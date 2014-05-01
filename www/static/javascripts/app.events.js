App.events = function() {
	
	return {
		details: {
			events_from: null,
			events_to: null,
			events_area: null,
		},

		errors: [],

		getEvents: function() {
			this.gatherDetails();
			var api = new App.api();
        	api.getEvents(this);
		},
		
		handleAddEventsPosition: function(data) {
			//console.log(data);
			if (data.count != undefined && (data.count + 0) > 0) {
				Lungo.Notification.hide();
				App.map.addEventsToMap(data);            	
        	}else{
        		Lungo.Notification.success("Could not found any result.","","",2);
        	} 
		},
		
		gatherDetails: function() {
			// Pull values from form to details object.
			this.details = {
				events_from: Lungo.dom("#s_event_from").val(),
				events_to: Lungo.dom("#s_event_to").val(),
				events_area: Lungo.dom("#s_event_area_select").val(),
			};
		},
       
	}
}
