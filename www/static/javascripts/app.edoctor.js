App.edoctor = function() {
	
return {
    details: {
    	gender: null,
    	skin: null,
    	acne_black:null,
    	acne_white:null,
    	acne_red:null,
    	acne_big_red:null,
    	freckle:null,
    	sensitivity:null,
    	around_eyes:null,
    	skin_aging:null,
    	skin_type:null,
    	wide_pores:null,
    	scars:null,
    },
        
    errors: [],
        
    getProductsByEdoctor: function() {
        this.gatherDetails();
        var api = new App.api();
        api.getProductsByEdoctor(this);
    },
		
    handleAddProducts: function(data) {
       // console.log(data);
        if(data.tip != null && data.tip !="")
        {
            setTimeout(function(){Lungo.Notification.success("Here is tip.", data.tip,3);}, 2000);
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
                    product.showResultProduct();
                }
                Lungo.Router.section("results_section");
            }
        } else {
            Lungo.Router.section("results_section");
        }
        
    },

    gatherDetails: function() {
        // Pull values from form to details object.
        if(App.question_data.gender == "Male")
        	this.details.gender = "male";
        else
        	this.details.gender = "female";
        	
        switch (App.question_data.skin_color)	
        {
        	case 1:
        		this.details.skin = 1;
        	case 2:
        		this.details.skin = 2;
        	case 3:
        		this.details.skin = 3;
        	case 4:
        		this.details.skin = 4;
        	case 5:
        		this.details.skin = 5;
        	case 6:
        		this.details.skin = 6;
        	default:
        		this.details.skin = 1;
        }
        
        this.details.freckle = App.question_data.freckle;
        this.details.acne_black = App.question_data.acne_black;
        this.details.acne_red = App.question_data.acne_red;
        this.details.acne_white = App.question_data.acne_white;
        this.details.acne_big_red = App.question_data.acne_big_red;
        this.details.sensitivity = App.question_data.sensitivity;
        this.details.around_eyes = App.question_data.around_eyes;
        this.details.skin_aging = App.question_data.skin_aging;
        this.details.skin_type = App.question_data.skin_type;
        this.details.wide_pores = App.question_data.wide_pores;
        this.details.scars = App.question_data.scars;

        console.log(this.details);
    },
        
       
	}
}
