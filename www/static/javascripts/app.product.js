App.product = function() {
	var dbproduct = {};
	return {
		details: {
			id: null,
			title: null,
			description: null,
			create_date: null,
			image: null,
            isNew:null
		},

		errors: [],

		showResultProduct: function() {
			//console.log("Running showProduct.");            
			return this.renderResultProduct();
		},
		
		showProduct: function() {
			//console.log("Running showProduct.");            
			return this.renderProduct();
		},
        
        renderResultProduct: function() {
            Lungo.dom(".results_list ul").append("<li class=\"thumb big\" onclick=\"javascript:App.product().gotoProductDetail(\'"+this.details.id+"\');\">\
                        <img src=\""+App.config.product_image+this.details.image+"\" />\
                        <div>"+this.details.description+"</div>\
                    </li>");
            
		},
		
		renderProduct: function() {
            if(this.details.isNew == "1"){
				Lungo.dom(".product_lists").append("<div class=\"product_item\" onclick=\"javascript:App.product().gotoProductDetail(\'"+this.details.id+"\');\" >\
                    <div class=\"p_new_mask\"></div>\
        			<img src=\""+App.config.product_image+this.details.image+"\" class=\"p_product_image\" /><br>\
        			<div class=\"product_detail_title\">"+this.details.title+"</div>\
        			<div class=\"product_detail_text\">"+this.details.description+"</div>\
        			</div>");
            }else{
                Lungo.dom(".product_lists").append("<div class=\"product_item\" onclick=\"javascript:App.product().gotoProductDetail(\'"+this.details.id+"\');\" >\
                    <img src=\"img/new_mask.png\" class=\"p_new_mask\"/>\
                    <img src=\""+App.config.product_image+this.details.image+"\" class=\"p_product_image\" /><br>\
                    <div class=\"product_detail_title\">"+this.details.title+"</div>\
                    <div class=\"product_detail_text\">"+this.details.description+"</div>\
                    </div>");
            }
            
		},
        
        gotoProductDetail:function(data){
            var _query = "SELECT * FROM `product` WHERE `product_id`=" + data;
            //console.log(_query);
			var DB = new App.db();
			DB.open();
			DB.db.transaction(
				function(transaction) {
					transaction.executeSql(_query, [],
						function(transaction, results) {
							if (results.rows != undefined && results.rows.length) {
                                 var m = results.rows.item(0);
                                 Lungo.dom(".products_detail .product_image").attr("src", App.config.product_image+m.image);
                                 Lungo.dom(".products_detail .product_detail_title").html(m.title);
                                 Lungo.dom(".products_detail .product_detail_text").html(m.text);
                                 Lungo.Router.section("products_detail_section");
							}
						},
						App.database.errorHandler
					);
				}
			);
            
            
            DB.db.transaction(
                function(transaction) {
                     transaction.executeSql("UPDATE `product` SET `isNew`=1 WHERE `product_id`="+ data, [],
                           function(transaction, results) {
                             console.log(results.rows);
                            },
                            App.database.errorHandler
                      );
                }
           );

        },
        
		cacheProduct: function() {
			var _this = this;
			// Start DB.
			var DB = new App.db();
			DB.open();

			// Add product to local DB.
			//console.log("Attempting to add product.");
			var m = _this.details;
			//console.log(m);
			var m_data_array = [m.id, m.title, m.description, m.create_date, m.image];
			var m_query = "INSERT OR IGNORE INTO `product` \
						(`product_id`, `title`, `text`, `date`, `image`) \
						VALUES (?, ?, ?, ?, ?);";
			DB.db.transaction(
				function(transaction) {
					transaction.executeSql(m_query, m_data_array, 
						function(transaction, results) {
							//console.log("product Insert ID: " + results.insertId);
							_this.details.id = results.insertId;
						}, 
						function(transaction, errors) {
							console.log(errors);
						}
					);
				}
			);
		},
	}
}
