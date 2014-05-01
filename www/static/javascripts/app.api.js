App.api = function() {
	
	var config = {
		url: "http://myrichtree.com/wkang/bashrety/public/api/",
		token: "1234567890",
		controller: "",
		action: "",
		method: "POST",
		callback: ""
	}

	return {
		getProductsByEdoctor: function(ref) {
			Lungo.Service.post(config.url + "edoctor", ref.details, function(data) {
                     console.log(data);
                     Lungo.Notification.hide();
                     ref.handleAddProducts(data);
            }, "json");
		},
		goingEvent: function(details) {
			Lungo.Service.get(config.url + "eventsgoing", details, function(data) {
                     //console.log(data);
            }, "json");
		},
		addUser: function(ref) {
			console.log("Running addUser");
			if (ref.validate("new") == true) {
				Lungo.Service.get(config.url + "login", ref.details, function(data) {
                   Lungo.Notification.hide();
                   ref.handleAdd(data);
                }, "json");
			} else {
				console.log("User doesn't validate.");
			}
		},
		
		getEvents: function(ref) {
			console.log("Running getEvents");
			//console.log(ref.details);
			Lungo.Service.get(config.url + "searchevents", ref.details, function(data) {
				   //console.log(data);
                   //Lungo.Notification.hide();
                   ref.handleAddEventsPosition(JSON.parse(data));
            },function (e){}, "json");
			
		},
		
		getDoctors: function(ref) {
			console.log("Running getDoctors");
			if (ref.validate() == true) {
				Lungo.Service.get(config.url + "searchdoctors", ref.details, function(data) {
                   //Lungo.Notification.hide();
                   ref.handleAddDoctors(data);
                }, "json");
			} else {
				console.log("doctor search doesn't validate.");
			}
		},
		
		getArticles: function(ref) {
			console.log("Running getArticles");
            //console.log(config.url + "getarticles" + $$.serializeParameters(ref.details, "?"));
            Lungo.Service.get(config.url + "getarticles", ref.details, function(data) {
                              //console.log(data);
                     Lungo.Notification.hide();
                     ref.handleGet(data);
            }, "json");
		},
        
        getProducts: function(ref) {
			console.log("Running getProducts");
            //console.log(config.url + "getproducts" + $$.serializeParameters(ref.details, "?"));
            Lungo.Service.get(config.url + "getproducts", ref.details, function(data) {
                        //console.log(data);
                       Lungo.Notification.hide();
                       ref.handleGet(data);
            }, "json");
		},
		
        getAreas: function(ref) {
            console.log("Running getallareas");
            Lungo.Service.get(config.url + "getallareas", {}, function(data) {
                       //console.log(data);
                       ref.handleGetAreas(data);
            }, "json");
		},
		getEventSearchAreas: function(ref) {
            console.log("Running getallareas");
            Lungo.Service.get(config.url + "getallareas", {}, function(data) {
                       //console.log(data);
                       ref.handleGetEventAreas(data);
            }, "json");
		},
		getDoctorSearchAreas: function(ref) {
            console.log("Running getallareas");
            Lungo.Service.get(config.url + "getallareas", {}, function(data) {
                       //console.log(data);
                       ref.handleGetDoctorAreas(data);
            }, "json");
            Lungo.Service.get(config.url + "getclinicname", {}, function(data) {
                       ref.handleGetClinicname(data);
            }, "json");
		},
	}
}
