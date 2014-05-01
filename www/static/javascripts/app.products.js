App.products = function() {
    
	return {
    details: {
    id: null,
    since: null
    },
    
    errors: [],
        
    getProducts: function() {
       
        // Find locally cached products.
        App.database.getProducts(null, 'date DESC', 20, this);
        
        this.gatherDetails();
        if (!this.details.since) {
            if (App.current_user.details.p_last_sync) {
                this.details.since = App.current_user.details.p_last_sync;
            } else {
                this.details.since = null;
            }
        }
        console.log("last_sync: " + App.current_user.details.p_last_sync);
        var api = new App.api();
        api.getProducts(this);
    },
        
    handleGet: function(data) {
        
        if (data.time != undefined) {
            App.current_user.details.p_last_sync = data.time;
            var DB = new App.db();
            DB.open();
            var p = [App.current_user.details.p_last_sync];
            var q = "INSERT INTO `product_sync` (`servertime`) VALUES (?)";
            DB.executeQuery(q, p);
        }
        if (data.count != undefined && (data.count + 0) > 0) {
            if (data.products != undefined && data.products.length == (data.count + 0)) {
                console.log("API: Returned " + data.count + " products.");
                for (var i = 0; i < data.count; i++) {
                    var product = new App.product();

                    product.details.id = data.products[i].id;
                    product.details.title = data.products[i].name;
                    product.details.description = data.products[i].description;
                    product.details.create_date = data.products[i].create_date;
                    product.details.image = data.products[i].image;
                    product.details.isNew = 0;
                    product.cacheProduct();
                    product.showProduct();
                }
                Lungo.Router.section("product_list_section");
            }
        } else {
            Lungo.Router.section("product_list_section");
        }
    },
        
    refreshProducts: function(ref) {
        this.gatherDetails();
        this.details.since = null;
        var api = new App.api();
        api.getProducts(this);			
    },
        
    gatherDetails: function() {
        // Pull values from form to details object.
        this.details = {
        id: App.current_user.details.user_id,
        since: 0
        }
    }
	}
}
