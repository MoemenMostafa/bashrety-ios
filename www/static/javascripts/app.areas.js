App.areas = function() {
    return {
        details: {
            user_id: null,
        },
    
		getAreas: function() {
			var api = new App.api();
			api.getAreas(this);
		},
		handleGetAreas: function(data){
            //data ={"count":3,"areas":[{"id":"4","name":"Santa Barbara County","lat":"34.985003130171066","lon":" -119.9761962890625","update_date":"2014-03-10 10:10:35","create_date":"2014-03-10 10:05:33"},{"id":"3","name":"Arizona","lat":"29.859701442126756","lon":" -111.55517578125","update_date":"2014-03-10 10:04:55","create_date":"2014-03-10 10:04:55"},{"id":"2","name":"Ventura County","lat":"34.37064492478658","lon":" -118.89404296875","update_date":"2014-03-10 10:03:39","create_date":"2014-03-10 10:03:39"}]};
			//console.log(data.count);
            
            if (data.count != undefined && (data.count + 0) > 0) {
                if (data.areas != undefined && data.areas.length == (data.count + 0)) {
                    Lungo.dom("#select_location").empty();
                    Lungo.dom("#select_location").append("<option value=\"\">Select area</option>");
                    for (var i = 0; i < data.count; i++) {
                        Lungo.dom("#select_location").append("<option value=\'"+data.areas[i].name+"\'>"+data.areas[i].name+"</option>");
                    }
                }
            } else {
                
            }
		},
		
		handleGetEventAreas: function(data){
			//console.log(data);
            
            if (data.count != undefined && (data.count + 0) > 0) {
                if (data.areas != undefined && data.areas.length == (data.count + 0)) {
                    Lungo.dom("#s_event_area_select").empty();
                    Lungo.dom("#s_event_area_select").append("<option value=\"\">Select area</option>");
                    for (var i = 0; i < data.count; i++) {
                        Lungo.dom("#s_event_area_select").append("<option value=\'"+data.areas[i].name+"\'>"+data.areas[i].name+"</option>");
                    }
                }
            } else {
                
            }
		},
		handleGetDoctorAreas: function(data){
			//console.log(data);
            
            if (data.count != undefined && (data.count + 0) > 0) {
                if (data.areas != undefined && data.areas.length == (data.count + 0)) {
                    Lungo.dom("#s_doctor_area_search").empty();
                    Lungo.dom("#s_doctor_area_search").append("<option value=\"\">Select area</option>");
                    for (var i = 0; i < data.count; i++) {
                        Lungo.dom("#s_doctor_area_search").append("<option value=\'"+data.areas[i].name+"\'>"+data.areas[i].name+"</option>");
                    }
                }
            } else {
                
            }
		},
		handleGetClinicname: function(data){
			//console.log(data);
            
            if (data.count != undefined && (data.count + 0) > 0) {
                if (data.areas != undefined && data.areas.length == (data.count + 0)) {
                    Lungo.dom("#s_clinic_name").empty();
                    Lungo.dom("#s_clinic_name").append("<option value=\"\">Select Clinic Name</option>");
                    for (var i = 0; i < data.count; i++) {
                        Lungo.dom("#s_clinic_name").append("<option value=\'"+data.areas[i].name+"\'>"+data.areas[i].name+"</option>");
                    }
                }
            } else {
                
            }
		},
		getEventSearchAreas :function(){
			var api = new App.api();
			api.getEventSearchAreas(this);
		},
		
		getDoctorSearchAreas :function(){
			var api = new App.api();
			api.getDoctorSearchAreas(this);
		}
	}
}

