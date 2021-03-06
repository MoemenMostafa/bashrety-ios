App.user = function() {
	return {
		details: {
			user_id: null,
			logged_in: null,
			email: null,
			userName: null,
			age: null,
			gender: null,
            location:null,
			language: null,
			last_sync:null,
			p_last_sync:null,
			lat:40,
			lon:123,
		},

		errors: [],
		
		loginUser: function() {
			this.gatherLoginDetails();
			var api = new App.api();
			api.loginUser(this);
		},

		getLoggedInUser: function() {
			//∂console.log("Checking DB for user.");
			// Check the local DB for a logged in user. Result handled by handleGetUserDB below.
			
			App.database.getCurrentUser(this);
		},

		handleGetUserDB: function(transaction, results) {
			var data = results.rows.item(0);
			console.log(data);
			if (data.id != undefined && data.id != null) {
				App.current_user.details.current_user = data.current_user;
				App.current_user.details.user_id = data.current_user;
				App.current_user.details.email = data.email;
				App.current_user.details.userName = data.user_name;
				App.current_user.details.age = data.age;
				App.current_user.details.gender = data.gender;
				App.current_user.details.language = data.language;
				//console.log(App.current_user.details);
				
				if(App.current_user.details.language == "English")
				{
					transToEnglish();
				}else if(App.current_user.details.language == "Arab"){
					transToArab();
				}
				
				var DB = new App.db();
				DB.open();
				DB.db.transaction(
					function(transaction) {
						transaction.executeSql("SELECT MAX(`servertime`) AS `last_sync` FROM `article_sync`;", [], 
							function(transaction, results) {
								console.log(results.rows.item(0));
								App.current_user.details.last_sync = results.rows.item(0).last_sync	;
                                               
								//this.moments = new App.moments();
								//this.moments.getMoments();
								Lungo.Router.section("article_list_section");
 							},
							function(transaction, results) {
								//console.log(results);
							}
						);
					}
				);
			}
		},

		validateLogin: function() {
			//console.log("Validating.")
			if (this.details.email == null) {
				this.errors.push("You should have an email.");
			}
			if (this.details.password == null) {
				this.errors.push("You should have a password.");
			}

			if (this.errors.length) {
				console.log("Problem(s) encountered validating user data.");
				for (var i = 0; i < this.errors.length; i++) {
					console.log(this.errors[i]);
				}
				return false;
			} else {
				return true;
			}
		},

		logout: function() {
			App.database.destroyDB('logout');
		},

		addUser: function() {
			this.gatherDetails();
			var api = new App.api();
			api.addUser(this);
		},

		handleAdd: function(data) {
			//console.log(data);
			if (data.user_id != undefined && data.user_id != null) {
				this.details.user_id = data.user_id;
				this.details.current_user = data.user_id;
				App.database.addUser(this.details);
				//Lungo.Router.section("walkthrough-share");
				Lungo.Router.section("article_list_section");
			}
		},

		gatherDetails: function() {
			// Pull values from form to details object.
			this.details = {
				email: Lungo.dom("#login-email").val(),
				userName: Lungo.dom("#login-name").val(),
				age: Lungo.dom("#select_age").val(),
				gender: Lungo.dom("#select_gender").val(),
                location: Lungo.dom("#select_location").val(),
				language: Lungo.dom("#select_language").val()
			};
		},

		validate: function(neworupdate) {
			if (neworupdate == null) {
				neworupdate = "new";
			}
			this.errors = [];
			
			if (this.details.email == null || this.details.email=="") {
				this.errors.push("You should have an email.");
			}else{
                var validate_email= this.looksLikeMail(this.details.email);
                if (validate_email==false)
                {
                    this.errors.push("Invalidate email address.");
                }
            }
            
			if (this.details.userName == null || this.details.userName=="") {
				this.errors.push("You should have a userName.");
			}
			if (this.details.age == null || this.details.age=="") {
				this.errors.push("You should have a age.");
			}
			if (this.details.gender == null || this.details.gender=="") {
				this.errors.push("You should have a gender.");
			}
            if (this.details.gender == null || this.details.location=="") {
				this.errors.push("You should have a location.");
			}
			if (this.details.language == null || this.details.language=="") {
				this.errors.push("You should have a language.");
			}

			if (this.errors.length) {
				console.log("Problem(s) encountered validating user data.");
				for (var i = 0; i < this.errors.length; i++) {
					 Lungo.Notification.error(this.errors[i], "","", 2);
				}
				return false;
			} else {
				return true;
			}
		},
        
        looksLikeMail:function(str){
            var lastAtPos = str.lastIndexOf('@');
            var lastDotPos = str.lastIndexOf('.');
            return (lastAtPos < lastDotPos && lastAtPos > 0 && str.indexOf('@@') == -1 && lastDotPos > 2 && (str.length - lastDotPos) > 2);
        }

	}
}

