var App = (function(lng, undefined) {

	return {

	};

})(Lungo);

App.question_data = {
	gender : null,
    skin_color:"0",
    acne_black:"",
    acne_white:"",
    acne_red:"",
    acne_big_red:"",
    freckle:null,
    sensitivity:null,
    around_eyes:null,
    skin_aging:null,
    skin_type:null,
    wide_pores:"",
    scars:"",
};

App.config = {
    article_image: "http://myrichtree.com/wkang/bashrety/public/images/articles/",
    product_image: "http://myrichtree.com/wkang/bashrety/public/images/products/"
};

Lungo.ready(function() {

	// Initialize DB.
	App.database.open();
    // Create instance of user for the current user. 

	App.current_user = new App.user();

	// Check if there is a logged in user.
	App.current_user.getLoggedInUser();
	
	App.areas = new App.areas();
	App.areas.getAreas();
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true });
});

Lungo.Events.init({
    'load section#doctors_list_section':function () {
    	App.areas.getDoctorSearchAreas();
    	Lungo.dom("#s_doctor_name").val('');
    	setTimeout(function(){App.map.addMap("doctors_map_canvas"); stopTimer();}, 1000);
    },    
    'load section#events_list_section':function () {
		App.areas.getEventSearchAreas();
    	Lungo.dom("#article_list_search").val('');
    	
    	setTimeout(function(){App.map.addMap("events_map_canvas"); stopTimer();}, 1000);
    },
    'tap #left_slidebar_menu_btn':function () {
    	//Lungo.dom("#events_right-sidebar").hide();
    	Lungo.dom("#right-sidebar").hide();
    },
    'tap #events_right_sidebar_menu_btn':function () {
    	Lungo.dom("#events_right-sidebar").hide();
    	//Lungo.dom("#right-sidebar").hide();
    },
    'tap #doctors_list_search_btn_txt':function () {
    	//Lungo.dom("#events_right-sidebar").show();
    	Lungo.dom("#right-sidebar").show();
    },
    'tap #events_list_search_btn_txt':function () {
    	Lungo.dom("#events_right-sidebar").show();
    	//Lungo.dom("#right-sidebar").show();
    },
    'tap #facebook_feed_btn':function () {
    	var ref = window.open('https://www.facebook.com/www.Bashrety.tv', '_blank', 'location=yes');
    },
    'tap #twitter_feed_btn':function () {
    	var ref = window.open('http://twitter.com/bashrety', '_blank', 'location=yes');
    },
    'tap #youtube_feed_btn':function () {
    	var ref = window.open('http://www.youtube.com/simsimsame', '_blank', 'location=yes');
    },
    'tap #grooveshark_feed_btn':function () {
    	var ref = window.open('http://bashrety.tv/', '_blank', 'location=yes');
    },
    'tap #doctor_search_btn':function () {
    	Lungo.Notification.show();
        var m = new App.doctors();
		m.getDoctors();
    	Lungo.Aside.hide();
    },
    
    'tap #event_search_done':function () {
	    Lungo.Notification.show();
        var m = new App.events();
		m.getEvents();
    	Lungo.Aside.hide();
    },
    
    'load section#article_list_section':function () {
        Lungo.Notification.show();
        Lungo.dom(".article_lists").empty();
    	var m = new App.articles();
		m.getArticles();
		
			var _query = "SELECT * FROM `article` WHERE `isNew`!=1";
			//console.log(_query);
			var DB = new App.db();
			DB.open();
			DB.db.transaction(
				function(transaction) {
					transaction.executeSql(_query, [],
						function(transaction, results) {
							if (results.rows != undefined && results.rows.length) {
                              	 
                                 Lungo.dom(".tag").html(results.rows.length);
                                 
							}
						},
						App.database.errorHandler
					);
				}
			);
			
    },
    'load section#products_list_section':function () {
        Lungo.Notification.show();                  
        Lungo.dom(".product_lists").empty();
    	var m = new App.products();
		m.getProducts();
    },
    'load section#gender':function () {
    	if(App.current_user.details.gender == "Male")
    	{	
    		App.question_data.gender = "m";
    		App.component().gender_male().active();
    		App.component().gender_female().inactive();
    	}
    	else
    	{
    		App.question_data.gender = "f";
    		App.component().gender_male().inactive();
    		App.component().gender_female().active();
    	}
    },
    
    'tap #event_search_clear': function() {
        Lungo.dom("#s_event_from").val('2013-01-01');
        Lungo.dom("#s_event_to").val('2014-01-01');
    },
    
    'tap #doctor_search_clear': function() {
        Lungo.dom("#s_doctor_name").val('');
    },

    'tap #login_btn': function() {
	    Lungo.Notification.show();
        App.current_user.addUser();
    },
    
    'tap #gender_next_btn': function() {
	    Lungo.dom(".skin_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_0.png");
		Lungo.Router.section("skin_section");
    },
    'tap #skin_next_btn': function() {
        if(App.question_data.skin_color == 0)
	        Lungo.Notification.success("please select your skin color.", "","", 2);
        else{
        	Lungo.dom(".acne_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
        	Lungo.dom(".freckle_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
        	Lungo.dom(".sensitivity_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
        	Lungo.dom(".around_eyes_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
        	Lungo.dom(".skin_aging_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
        	Lungo.dom(".skin_type_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
        	Lungo.dom(".pores_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
			
			Lungo.Router.section("acne_section");
		}
    },
    'tap #acne_next_btn': function() {
        if((App.question_data.acne_black == null || App.question_data.acne_black=="")&& (App.question_data.acne_white == null || App.question_data.acne_white == "")&& (App.question_data.acne_red == null || App.question_data.acne_red == "") && (App.question_data.acne_big_red == null||App.question_data.acne_big_red == ""))
	        Lungo.Notification.success("please select one.", "","", 2);
        else{        	
			Lungo.Router.section("freckle_section");
		}
    },
    'tap #freckle_next_btn': function() {
		if(App.question_data.freckle == null)
	        Lungo.Notification.success("please select one.", "","", 2);
        else{        	
			Lungo.Router.section("sensitivity_section");
		}
    },
    'tap #sensitivity_next_btn': function() {
		if(App.question_data.sensitivity == null)
	        Lungo.Notification.success("please select one.", "","", 2);
        else{        	
			Lungo.Router.section("around_eyes_section");
		}
    },
    'tap #around_eyes_next_btn': function() {
		if(App.question_data.around_eyes == null)
	        Lungo.Notification.success("please select one.", "","", 2);
        else{        	
			Lungo.Router.section("skin_aging_section");
		}
    },
    'tap #skin_aging_next_btn': function() {
		if(App.question_data.skin_aging == null)
	        Lungo.Notification.success("please select one.", "","", 2);
        else{        	
			Lungo.Router.section("pores_section");
		}
    },
    'tap #pores_next_btn': function() {
		if((App.question_data.scars == null || App.question_data.scars=="")&& (App.question_data.wide_pores == null || App.question_data.wide_pores == ""))
	        Lungo.Notification.success("please select one.", "","", 2);
        else{        	
			Lungo.Router.section("skin_type_section");
		}
    },
    'tap #skin_type_next_btn': function() {
		if(App.question_data.skin_type == null)
	        Lungo.Notification.success("please select one.", "","", 2);
        else{        	
			 Lungo.dom(".results_list ul").empty();
			//Lungo.Router.section("results_section");
			Lungo.Notification.show();
			var m = new App.edoctor();
			m.getProductsByEdoctor();
		}

    },
});

function onSuccess(position)
{
     App.current_user.details.lat = position.coords.latitude;
     App.current_user.details.lon = position.coords.longitude;
}

function onError(error){

}