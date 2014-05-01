App.database = {

	shortname: 'bashrety', 
	version: '1.1', 
	displayname: 'bashrety', 
	maxsize: 10*1024*1024,
	
	db: {},

	open: function() {
		//console.log("Trying to open database.");
		this.db = openDatabase(this.shortname, "", this.displayname, this.maxsize);
		this.createTables();
	},

	createTables: function() {
		//console.log("Trying to create table.");
		// User table (id = Local, user_id = API ID)
		var user_definition = "\
			CREATE TABLE IF NOT EXISTS `user`(\
				`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, \
				`user_name` TEXT NULL, \
				`email` TEXT NOT NULL, \
				`age` TEXT NULL, \
				`gender` TEXT NULL, \
				`language` TEXT NULL, \
				`current_user` INTEGER NOT NULL DEFAULT 0 \
			);";

		var article_sync_definition = "\
			CREATE TABLE IF NOT EXISTS `article_sync` ( \
				`servertime` INTEGER NOT NULL PRIMARY KEY \
			);";
		var product_sync_definition = "\
			CREATE TABLE IF NOT EXISTS `product_sync` ( \
				`servertime` INTEGER NOT NULL PRIMARY KEY \
			);";
		var article_definition = "\
			CREATE TABLE IF NOT EXISTS `article`(\
				`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, \
				`article_id` INTEGER UNIQUE NULL, \
				`title` TEXT NOT NULL, \
				`text` TEXT NULL, \
				`date` DATETIME, \
                `isNew` TEXT NULL, \
				`image` TEXT NULL\
			);";	
		var product_definition = "\
			CREATE TABLE IF NOT EXISTS `product`(\
				`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, \
				`product_id` INTEGER UNIQUE NULL, \
				`title` TEXT NOT NULL, \
				`text` TEXT NULL, \
				`date` DATETIME, \
                `isNew` TEXT NULL, \
				`image` TEXT NULL\
			);";	
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(user_definition, [], App.database.nullDataHandler, App.database.errorHandler);
				transaction.executeSql(article_sync_definition, [], App.database.nullDataHandler, App.database.errorHandler);
				transaction.executeSql(product_sync_definition, [], App.database.nullDataHandler, App.database.errorHandler);
				transaction.executeSql(article_definition, [], App.database.nullDataHandler, App.database.errorHandler);
				transaction.executeSql(product_definition, [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
	},

	addUser: function(d) {
		// console.log("Adding logged in user to local DB.");
		// console.log(d);
        if(d.current_user == undefined || d.current_user==null)
            d.current_user =0;
		
		if (d.id != undefined) { 
			var data_array = [d.id, d.userName, d.email, d.age, d.gender, d.language, d.current_user];
			var query = "INSERT OR IGNORE INTO `user` (`id`,`user_name`,`email`, `age`, `gender`, `location`,`language`, `current_user`) \
					VALUES (?, ?, ?, ?, ?, ?, ?);";
		} else {
			var data_array = [d.id, d.userName, d.email, d.age, d.gender, d.language, d.current_user];
			var query = "INSERT INTO `user` (`id`,`user_name`,`email`, `age`, `gender`, `language`, `current_user`) \
					VALUES (?, ?, ?, ?, ?, ?, ?);";
		}		
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, data_array, App.database.handleInsertedUser, App.database.errorHandler);
			}
		);
	},

	getCurrentUser: function(ref) {
		//Query DB for logged in user.
		var query = "SELECT * FROM `user`";
		//console.log(query);
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(query, [], ref.handleGetUserDB, App.database.errorHandler);
			}
		);
	},

	handleInsertedUser: function(transaction, results) {
		// Do something.
	},

	getArticles: function(owner, order, limit, ref) {
		console.log("Running DB getArticles");
		var wheres = [{sql: "`title` IS NOT NULL", param: null}];
		var _limit = '';
		var _order = '';
		var _data = [];
		var _this = this;
		this.myref = ref;
		if (owner != undefined) {
			wheres.push({sql: "`owner` = ?", param: owner});
		}
		if (limit != undefined) {
			_limit = " LIMIT " + limit;
		}
		if (order != undefined) {
			_order = " ORDER BY " + order;
		}
		if (wheres.length) {
			for (var i = 0; i < wheres.length; i++) {
				if (i == 0) {
					var _where = " WHERE ";
				} else {
					_where += " AND ";
				}
				_where += wheres[i].sql;
				if (wheres[i].param != null) {
					_data.push(wheres[i].param);
				}
			}
		}
		var _query = "SELECT * FROM `article` " + _where + _order + _limit;
		//console.log(_query);
		
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(_query, _data, 
					function(transaction, results) {
						if (results.rows != undefined && results.rows.length) {
							var returnobj = {
								count: results.rows.length,
								articles: []
                               }
                            //console.log(results.rows.length);
							for (var i=0; i < results.rows.length; i++) {
								var m = results.rows.item(i);
								var article = new App.article();
								
								article.details.id = m.article_id;
								article.details.title = m.title;
								article.details.body = m.text;
								article.details.main_image = m.image;
								article.details.create_date = m.date;
                                article.details.isNew = m.isNew;
								article.showArticle();
							}
						}
					},
					App.database.errorHandler
				);
			}
		);
	},

	getProducts: function(owner, order, limit, ref) {
		console.log("Running DB getProducts");
		var wheres = [{sql: "`title` IS NOT NULL", param: null}];
		var _limit = '';
		var _order = '';
		var _data = [];
		var _this = this;
		this.myref = ref;
		if (owner != undefined) {
			wheres.push({sql: "`owner` = ?", param: owner});
		}
		if (limit != undefined) {
			_limit = " LIMIT " + limit;
		}
		if (order != undefined) {
			_order = " ORDER BY " + order;
		}
		if (wheres.length) {
			for (var i = 0; i < wheres.length; i++) {
				if (i == 0) {
					var _where = " WHERE ";
				} else {
					_where += " AND ";
				}
				_where += wheres[i].sql;
				if (wheres[i].param != null) {
					_data.push(wheres[i].param);
				}
			}
		}
		var _query = "SELECT * FROM `product` " + _where + _order + _limit;

		this.db.transaction(
			function(transaction) {
				transaction.executeSql(_query, _data, 
					function(transaction, results) {
						if (results.rows != undefined && results.rows.length) {
							for (var i=0; i < results.rows.length; i++) {
								var m = results.rows.item(i);
								var product = new App.product();
								
								product.details.id = m.product_id;
								product.details.title = m.title;
								product.details.description = m.text;
								product.details.image = m.image;
								product.details.create_date = m.date;
                                product.details.isNew = m.isNew;
                              
								product.showProduct();
							}
						}
					},
					App.database.errorHandler
				);
			}
		);
	},
	
	destroyDB: function(reason, ref) {
		var command;
		switch (reason) {
			case "version":
			case "logout":
				command = "DROP TABLE";
				break;
			//case "logout":
			default:
				command = "DELETE FROM";
				break;
		}
		this.db.transaction(
			function(transaction) {
				transaction.executeSql(command + " `user`", [], App.database.nullDataHandler, App.database.errorHandler);
			}
		);
	},

	errorHandler: function(transaction, error) {
		// error.message is a human-readable string.
		// error.code is a numeric error code
		console.log('Oops.  Error was '+error.message+' (Code '+error.code+')');

		// Handle errors here
		var we_think_this_error_is_fatal = true;
		if (we_think_this_error_is_fatal) return true;
		return false;
	},

	nullDataHandler: function(transaction, results) {
		// Do nothing.
		//console.log(results);
		//Lungo.Notification.hide();
	},

	// When passed as the error handler, this silently causes a transaction to fail.
	killTransaction: function(transaction, error) {
		return true;
	}
}
