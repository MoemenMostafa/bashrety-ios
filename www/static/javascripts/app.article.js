App.article = function() {
	var dbArticle = {};
	return {
		details: {
			id: null,
			title: null,
			body: null,
			create_date: null,
			main_image: null,
            isNew:null
		},

		errors: [],

		showArticle: function() {
			//console.log("Running showarticle.");            
			return this.renderArticle();
		},

		renderArticle: function() {
			//console.log("Running renderarticle.");
            if(this.details.isNew == "1"){
				Lungo.dom(".article_lists").append("<li onclick=\"javascript:App.article().gotoArticleDetail(\'"+this.details.id+"\');\" class=\"arrow\">\
            			<div class=\"p_new_mask\"/></div>\
                    	<img src=\""+App.config.article_image+this.details.main_image+"\" class=\"p_article_image\" />\
            			<div><div class=\"article_title_text\">"+this.details.title+"</div>\
            			     <div class=\"article_detail_text\">\
                    			"+this.details.body+"\
                			</div>\
            			</div>\
       				</li>");
            }else{
                Lungo.dom(".article_lists").append("<li onclick=\"javascript:App.article().gotoArticleDetail(\'"+this.details.id+"\');\" class=\"arrow\">\
            			<img src=\"img/new_mask.png\" class=\"p_new_mask\"/>\
                    	<img src=\""+App.config.article_image+this.details.main_image+"\" class=\"p_article_image\" />\
            			<div><div class=\"article_title_text\">"+this.details.title+"</div>\
            			     <div class=\"article_detail_text\">\
                    			"+this.details.body+"\
                			</div>\
            			</div>\
       				</li>");
            }
		},
        
        gotoArticleDetail:function(data){
            //console.log(data);
            var _query = "SELECT * FROM `article` WHERE `article_id`=" + data;
			//console.log(_query);
			var DB = new App.db();
			DB.open();
			DB.db.transaction(
				function(transaction) {
					transaction.executeSql(_query, [],
						function(transaction, results) {
							if (results.rows != undefined && results.rows.length) {
                              	 var m = results.rows.item(0);
                                 Lungo.dom(".article_image").attr("src", App.config.article_image+m.image);
                                 Lungo.dom(".article_detail_title").html(m.title);
                                 Lungo.dom(".article_detail .article_detail_text").html(m.text);
                                 Lungo.Router.section("article_detail_section");
							}
						},
						App.database.errorHandler
					);
				}
			);
            DB.db.transaction(
                function(transaction) {
                    transaction.executeSql("update `article` set `isNew`=1 WHERE `article_id`="+ data, [],
                         function(transaction, results) {
                            //console.log(results);
                          },
                     App.database.errorHandler
                     );
                 }
            );
        },
        
		cacheArticle: function() {
			var _this = this;
			// Start DB.
			var DB = new App.db();
			DB.open();

			// Add article to local DB.
			//console.log("Attempting to add article.");
			var m = _this.details;
			//console.log(JSON.stringify(_this.details));
			var m_data_array = [m.id, m.title, m.body, m.create_date, m.main_image];
			var m_query = "INSERT OR IGNORE INTO `article` \
						(`article_id`, `title`, `text`, `date`, `isNew`, `image`) \
						VALUES (?, ?, ?, ?, 0, ?);";
			DB.db.transaction(
				function(transaction) {
					transaction.executeSql(m_query, m_data_array, 
						function(transaction, results) {
							//console.log("article Insert ID: " + results.insertId);
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
