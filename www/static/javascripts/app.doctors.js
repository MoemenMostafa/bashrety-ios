App.doctors = function() {
	
	return {
		details: {
			doctor_name: null,
			clinic_name: null,
			clinic_area: null,
			distance: null,
			lat: null,
            lon:null
		},

		errors: [],

		getDoctors: function() {
			this.gatherDetails();
			var api = new App.api();
        	api.getDoctors(this);
		},
		
		handleAddDoctors: function(data) {
			console.log(data);
			if (data.count != undefined && (data.count + 0) > 0) {
				Lungo.Notification.hide();
				App.map.addDoctorsToMap(data);            	
        	}else{
        		Lungo.Notification.success("Could not found any result.","","",2);
        	}
		},
		
		gatherDetails: function() {
			// Pull values from form to details object.
			this.details = {
				doctor_name: Lungo.dom("#s_doctor_name").val(),
				clinic_name: Lungo.dom("#s_clinic_name").val(),
				clinic_area: Lungo.dom("#s_doctor_area_search").val(),
				distance: 1000000,// Lungo.dom("#").val(),
                lat: 24,//Lungo.dom("#").val(),
				lon: 123, //Lungo.dom("#").val()
			};
		},

		validate: function() {
			this.errors = [];
			
			if (this.details.doctor_name == null || this.details.doctor_name=="") {
				this.errors.push("You should input an doctor name.");
			}
            
			if (this.details.clinic_name == null || this.details.clinic_name=="") {
				this.errors.push("You should input a clinic name.");
			}
			
			if (this.errors.length) {
				console.log("Problem(s) encountered validating doctor search data.");
				for (var i = 0; i < this.errors.length; i++) {
					 Lungo.Notification.error(this.errors[i], "","", 2);
				}
				return false;
			} else {
				return true;
			}
		},
        
	}
}
