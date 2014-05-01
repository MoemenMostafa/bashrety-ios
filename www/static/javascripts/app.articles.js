App.articles = function() {
    
	return {
    details: {
    id: null,
    since: null
    },
    domnode: "#articles-article",
    errors: [],
        
    getArticles: function(domnode) {
        if (domnode != null) {
            this.domnode = domnode;
        }
        
        // Find locally cached articles.
        App.database.getArticles(null, 'date DESC', 20, this);
        
        this.gatherDetails();
        if (!this.details.since) {
            if (App.current_user.details.last_sync) {
                this.details.since = App.current_user.details.last_sync;
            } else {
                this.details.since = null;
            }
        }
        //console.log("last_sync: " + App.current_user.details.last_sync);
        var api = new App.api();
        api.getArticles(this);
    },
        
    handleGet: function(data) {
        if (data.time != undefined) {
            App.current_user.details.last_sync = data.time;
            var DB = new App.db();
            DB.open();
            var p = [App.current_user.details.last_sync];
            var q = "INSERT INTO `article_sync` (`servertime`) VALUES (?)";
            DB.executeQuery(q, p);
        }
        if (data.count != undefined && (data.count + 0) > 0) {
            if (data.articles != undefined && data.articles.length == (data.count + 0)) {
                //console.log("API: Returned " + data.count + " articles.");
                for (var i = 0; i < data.count; i++) {
                    var article = new App.article();

                    article.details.id = data.articles[i].id;
                    article.details.title = data.articles[i].title;
                    article.details.body = data.articles[i].body;
                    article.details.create_date = data.articles[i].create_date;
                    article.details.main_image = data.articles[i].main_image;
                    article.details.isNew = 0;
                    article.cacheArticle();
                    article.showArticle();
                }
                Lungo.Router.section("article_list_section");
            }
        } else {
            Lungo.Router.section("article_list_section");
        }
    },
        
    refreshArticles: function(ref) {
        this.gatherDetails();
        this.details.since = null;
        var api = new App.api();
        api.getarticles(this);			
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
