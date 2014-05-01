App.map = {
	
    addMap:function(mId)
    {
        var clientPosition = new google.maps.LatLng(App.current_user.details.lat, App.current_user.details.lon);
//        var clientPosition = new google.maps.LatLng(40, 123);
        var myOptions = {
        	center: clientPosition,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            callback: function () { }
        };
                  
        map_element = document.getElementById(mId);
        map = new google.maps.Map(map_element, myOptions);
                
        var mapwidth = $(window).width();
        var mapheight = $(window).height()-100;
        $("#"+mId).height(mapheight);
        $("#"+mId).width(mapwidth);
        google.maps.event.trigger(map, 'resize');
               
        currentLocationMarker = new google.maps.Marker({
        	position: clientPosition,
            animation: google.maps.Animation.DROP,
            title:"You!",
        });
                  
        var infowindow = new google.maps.InfoWindow();
                 
        google.maps.event.addListener(currentLocationMarker, 'click', function() {
              //infowindow.setContent(this.title);
              //infowindow.open(map, this);
              Lungo.Notification.html('<div class="map_message"> <div class="map_message_title">You</div></div>', "Close");
        });
                 
        currentLocationMarker.setMap(map);

    },
    
    addEventsToMap:function(data)
    {
	       if (data.events != undefined && data.events.length == (data.count + 0)) {
                var mId = "events_map_canvas";
                //Lungo.dom("#events_map_canvas").hide();
        		var clientPosition = new google.maps.LatLng(data.events[0].lat, data.events[0].lon);
        		var myOptions = {
        			center: clientPosition,
            		zoom: 4,
            		mapTypeId: google.maps.MapTypeId.ROADMAP,
            		callback: function () { }
        		};
                  
        		map_element = document.getElementById(mId);
        		map = new google.maps.Map(map_element, myOptions);
                
        		var mapwidth = $(window).width();
        		var mapheight = $(window).height()-100;
        		$("#"+mId).height(mapheight);
        		$("#"+mId).width(mapwidth);
        		google.maps.event.trigger(map, 'resize');
        
                	for (var i = 0; i < data.count; i++) {
                    	//console.log(data.events[i].description+"/"+data.events[i].address);
                    	
                    	currentLocationMarker = new google.maps.Marker({
        					position: new google.maps.LatLng(data.events[i].lat, data.events[i].lon),
            				animation: google.maps.Animation.DROP,
            				title:"Name : "+data.events[i].name+" \n Street : "+data.events[i].address+"",
            				description: data.events[i].description,
            				name:data.events[i].name,
            				event_id:data.events[i].id,
        				});
                  		
        				var infowindow = new google.maps.InfoWindow();

        				google.maps.event.addListener(currentLocationMarker, 'click', function() {
              				//infowindow.setContent(this.title);
              				//infowindow.open(map, this);
              				Lungo.Notification.html('<div class="map_message"> <div class="map_message_title"><h4>Name</h4><div>'+this.name+'</div><h4>Detail</h4></div><div class="map_message_detail">'+this.description+'</div><input type="button" value="Going" onclick="Going('+this.event_id+');"/></div>', "Close");
       					});
                 
        				currentLocationMarker.setMap(map);
                	}
                	//Lungo.Router.section("product_list_section");
            	}       
    },
    
    addDoctorsToMap:function(data)
    {        
        if (data.doctors != undefined && data.doctors.length == (data.count + 0)) {
                	var mId = "doctors_map_canvas";
                	//Lungo.dom("#doctors_map_canvas").hide();
        			var clientPosition = new google.maps.LatLng(data.doctors[0].lat, data.doctors[0].lon);
        			var myOptions = {
        				center: clientPosition,
           				zoom: 4,
           				mapTypeId: google.maps.MapTypeId.ROADMAP,
            			callback: function () { }
        			};
                  
       				map_element = document.getElementById(mId);
        			map = new google.maps.Map(map_element, myOptions);
                
        			var mapwidth = $(window).width();
        			var mapheight = $(window).height()-100;
        			$("#"+mId).height(mapheight);
        			$("#"+mId).width(mapwidth);
        			google.maps.event.trigger(map, 'resize');
        
                	for (var i = 0; i < data.count; i++) {
                    	//console.log(data.events[i].description+"/"+data.events[i].address);
                    	
                    	currentLocationMarker = new google.maps.Marker({
        					position: new google.maps.LatLng(data.doctors[i].lat, data.doctors[i].lon),
            				animation: google.maps.Animation.DROP,
            				title:"Name : "+data.doctors[i].doctor_name+" \n Street : "+data.doctors[i].clinic_address+"",
            				description: data.doctors[i].description,
            				name:data.doctors[i].doctor_name,
        				});
                  		
        				var infowindow = new google.maps.InfoWindow();

        				google.maps.event.addListener(currentLocationMarker, 'click', function() {
              				//infowindow.setContent(this.title);
              				//infowindow.open(map, this);
              				Lungo.Notification.html('<div class="map_message"> <div class="map_message_title"><h4>Name</h4><div>'+this.name+'</div><h4>Detail</h4></div><div class="map_message_detail">'+this.description+'</div><input type="button" value="Navigate" onclick="navigate();"/></div>', "Close");
       					});
                 
        				currentLocationMarker.setMap(map);
                	}
                	//Lungo.Router.section("product_list_section");
        }       
    }
}

function Going(event_id){
	Lungo.Notification.hide();
	var details = {
		event_id:event_id,
		user_id: App.current_user.details.user_id,
	};
	var api = new App.api();
	api.goingEvent(details);
}
function navigate(){
	Lungo.Notification.hide();
}