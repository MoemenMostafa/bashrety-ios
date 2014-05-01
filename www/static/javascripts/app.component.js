App.component = function() {
	return {
		gender_male : function () {
        	return {
                active : function () { 
                	//age = App.current_user.details.age;
                	Lungo.dom(".male_original_image").attr("src", "img/face/"+App.current_user.details.age+"/m_"+App.current_user.details.age+"_0.png");
                	Lungo.dom(".male_red_check_image").show();
                },
                inactive : function () {
                	//age = App.current_user.details.age;
                    Lungo.dom(".male_original_image").attr("src", "img/face/"+App.current_user.details.age+"/m_"+App.current_user.details.age+"_0.png");
                    Lungo.dom(".male_red_check_image").hide();
                }
            }
    	},
    	gender_female : function () { 
        	return {
                active : function () {
                	Lungo.dom(".female_original_image").attr("src", "img/face/"+App.current_user.details.age+"/f_"+App.current_user.details.age+"_0.png");
                	Lungo.dom(".female_red_check_image").show();
                },
                inactive : function () {
                	Lungo.dom(".female_original_image").attr("src", "img/face/"+App.current_user.details.age+"/f_"+App.current_user.details.age+"_0.png");
                	Lungo.dom(".female_red_check_image").hide();
                }
            }
    	},
    	skin_color1 : function () {
        	return {
                active : function () {
                	Lungo.dom(".skin_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
                	$(".skin_color_1_checked").show();
                },
                inactive : function () {
                    $(".skin_color_1_checked").hide();
                }
            }
    	},
    	skin_color2 : function () {
        	return {
                active : function () {
                	Lungo.dom(".skin_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
                	$(".skin_color_2_checked").show();
                },
                inactive : function () {
                    $(".skin_color_2_checked").hide();
                }
            }
    	},
    	skin_color3 : function () {
        	return {
                active : function () {
                	Lungo.dom(".skin_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
                	$(".skin_color_3_checked").show();
                },
                inactive : function () {
                    $(".skin_color_3_checked").hide();
                }
            }
    	},
    	skin_color4 : function () {
        	return {
                active : function () {
                	Lungo.dom(".skin_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
                	$(".skin_color_4_checked").show();
                },
                inactive : function () {
                    $(".skin_color_4_checked").hide();
                }
            }
    	},
    	skin_color5 : function () {
        	return {
                active : function () {
                	Lungo.dom(".skin_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
                	$(".skin_color_5_checked").show();
                },
                inactive : function () {
                    $(".skin_color_5_checked").hide();
                }
            }
    	},
    	skin_color6 : function () {
        	return {
                active : function () {
                	Lungo.dom(".skin_face_image").attr("src", "img/face/"+App.current_user.details.age+"/"+App.question_data.gender+"_"+App.current_user.details.age+"_"+App.question_data.skin_color+".png");
                	$(".skin_color_6_checked").show();
                },
                inactive : function () {
                    $(".skin_color_6_checked").hide();
                }
            }
    	},
    	acne_black : function () {
        	return {
                active : function () {
                	 Lungo.dom(".acne_black_mask_image").show();
                	 Lungo.dom(".acne_black_mask_image").attr("src", "img/acne_blank.png");
                     $(".acne_black").css("background-image", "url(img/acne_bg.png)");
                     $(".acne_black_text").css("color", "#fff");
                     $(".acne_black_img").show();
                },
                inactive : function () {
	                Lungo.dom(".acne_black_mask_image").hide();
                	$(".acne_black").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".acne_black_text").css("color", "#000");
                    $(".acne_black_img").hide();
                }
            }
    	},
    	acne_white : function () {
        	return {
                active : function () {
                	 Lungo.dom(".acne_white_mask_image").show();
                	 Lungo.dom(".acne_white_mask_image").attr("src", "img/acne_white.png");                	 
                     $(".acne_white").css("background-image", "url(img/acne_bg.png)");
                     $(".acne_white_text").css("color", "#fff");
                     $(".acne_white_img").show();
                },
                inactive : function () {
	                Lungo.dom(".acne_white_mask_image").hide();
                	$(".acne_white").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".acne_white_text").css("color", "#000");
                    $(".acne_white_img").hide();
                }
            }
    	},
    	acne_red : function () {
        	return {
                active : function () {
                	 Lungo.dom(".acne_red_mask_image").show();
                	 Lungo.dom(".acne_red_mask_image").attr("src", "img/acne_red.png");                	 
                     $(".acne_red").css("background-image", "url(img/acne_bg.png)");
                     $(".acne_red_text").css("color", "#fff");
                     $(".acne_red_img").show();
                },
                inactive : function () {
                	Lungo.dom(".acne_red_mask_image").hide();
                	$(".acne_red").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".acne_red_text").css("color", "#000");
                    $(".acne_red_img").hide();
                }
            }
    	},
    	acne_big_red : function () {
        	return {
                active : function () {
                	 Lungo.dom(".acne_big_red_mask_image").show();
                	 Lungo.dom(".acne_big_red_mask_image").attr("src", "img/acne_big_red.png");                	 
                     $(".acne_big_red").css("background-image", "url(img/acne_bg.png)");
                     $(".acne_big_red_text").css("color", "#fff");
                     $(".acne_big_red_img").show();
                },
                inactive : function () {
	                Lungo.dom(".acne_big_red_mask_image").hide();
                	$(".acne_big_red").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".acne_big_red_text").css("color", "#000");
                    $(".acne_big_red_img").hide();
                }
            }
    	},
    	wide_pores : function () {
        	return {
                active : function () {
                     $(".pores_wide").css("background-image", "url(img/acne_bg.png)");
                     $(".pores_wide_text").css("color", "#fff");
                     $(".pores_wide_img").show();
                },
                inactive : function () {
                	$(".pores_wide").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".pores_wide_text").css("color", "#000");
                    $(".pores_wide_img").hide();
                }
            }
    	},
    	scars : function () {
        	return {
                active : function () {
                     $(".pores_scars").css("background-image", "url(img/acne_bg.png)");
                     $(".pores_scars_text").css("color", "#fff");
                     $(".pores_scars_img").show();
                },
                inactive : function () {
                	$(".pores_scars").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".pores_scars_text").css("color", "#000");
                    $(".pores_scars_img").hide();
                }
            }
    	},
    	freckle_none : function () {
        	return {
                active : function () {
                	 Lungo.dom(".freckle_mask_image").hide();
                     $(".freckle_none").css("background-image", "url(img/acne_bg.png)");
                     $(".freckle_none_text").css("color", "#fff");
                     $(".freckle_none_img").show();
                },
                inactive : function () {
                	$(".freckle_none").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".freckle_none_text").css("color", "#000");
                    $(".freckle_none_img").hide();
                }
            }
    	},
    	freckle_yes : function () {
        	return {
                active : function () {
                	 Lungo.dom(".freckle_mask_image").show();
                	 Lungo.dom(".freckle_mask_image").attr("src", "img/freckles.png");  
                     $(".freckle_yes").css("background-image", "url(img/acne_bg.png)");
                     $(".freckle_yes_text").css("color", "#fff");
                     $(".freckle_yes_img").show();
                },
                inactive : function () {
                	$(".freckle_yes").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".freckle_yes_text").css("color", "#000");
                    $(".freckle_yes_img").hide();
                }
            }
    	},
    	freckle_dark : function () {
        	return {
                active : function () {
                	 Lungo.dom(".freckle_mask_image").show();
                	 Lungo.dom(".freckle_mask_image").attr("src", "img/dark_spots.png");
                     $(".freckle_dark").css("background-image", "url(img/acne_bg.png)");
                     $(".freckle_dark_text").css("color", "#fff");
                     $(".freckle_dark_img").show();
                },
                inactive : function () {
                	$(".freckle_dark").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".freckle_dark_text").css("color", "#000");
                    $(".freckle_dark_img").hide();
                }
            }
    	},
    	freckle_melasma : function () {
        	return {
                active : function () {
                	 Lungo.dom(".freckle_mask_image").show();
                	 Lungo.dom(".freckle_mask_image").attr("src", "img/melasma.png");  
                     $(".freckle_melasma").css("background-image", "url(img/acne_bg.png)");
                     $(".freckle_melasma_text").css("color", "#fff");
                     $(".freckle_melasma_img").show();
                },
                inactive : function () {
                	$(".freckle_melasma").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".freckle_melasma_text").css("color", "#000");
                    $(".freckle_melasma_img").hide();
                }
            }
    	},
    	sensitivity_none : function () {
        	return {
                active : function () {
                	 Lungo.dom(".sensitivity_mask_image").hide();
                     $(".sensitivity_none").css("background-image", "url(img/acne_bg.png)");
                     $(".sensitivity_none_text").css("color", "#fff");
                     $(".sensitivity_none_img").show();
                },
                inactive : function () {
                	$(".sensitivity_none").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".sensitivity_none_text").css("color", "#000");
                    $(".sensitivity_none_img").hide();
                }
            }
    	},
    	sensitivity_yes : function () {
        	return {
                active : function () {
                	 Lungo.dom(".sensitivity_mask_image").show();
                     if(App.question_data.skin_color == 5 || App.question_data.skin_color == 6)
                     {
                         Lungo.dom(".sensitivity_mask_image").attr("src", "img/skin_sensitivity1.png");
                     }
                     else{
                         Lungo.dom(".sensitivity_mask_image").attr("src", "img/skin_sensitivity2.png");
                     }
                     $(".sensitivity_yes").css("background-image", "url(img/acne_bg.png)");
                     $(".sensitivity_yes_text").css("color", "#fff");
                     $(".sensitivity_yes_img").show();
                },
                inactive : function () {
                	$(".sensitivity_yes").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".sensitivity_yes_text").css("color", "#000");
                    $(".sensitivity_yes_img").hide();
                }
            }
    	},
    	around_eyes_none : function () {
        	return {
                active : function () {
                	 Lungo.dom(".around_eyes_mask_image").hide();
                     $(".around_eyes_none").css("background-image", "url(img/acne_bg.png)");
                     $(".around_eyes_none_text").css("color", "#fff");
                     $(".around_eyes_none_img").show();
                },
                inactive : function () {
                	$(".around_eyes_none").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".around_eyes_none_text").css("color", "#000");
                    $(".around_eyes_none_img").hide();
                }
            }
    	},
    	around_eyes_few : function () {
        	return {
                active : function () {
                	 Lungo.dom(".around_eyes_mask_image").show();
                	 Lungo.dom(".around_eyes_mask_image").attr("src", "img/eye_dark.png");                	 
                     $(".around_eyes_few").css("background-image", "url(img/acne_bg.png)");
                     $(".around_eyes_few_text").css("color", "#fff");
                     $(".around_eyes_few_img").show();
                },
                inactive : function () {
                	$(".around_eyes_few").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".around_eyes_few_text").css("color", "#000");
                    $(".around_eyes_few_img").hide();
                }
            }
    	},
    	around_eyes_many : function () {
        	return {
                active : function () {
                	 Lungo.dom(".around_eyes_mask_image").show();
                	 Lungo.dom(".around_eyes_mask_image").attr("src", "img/eye_puffiness.png");                	 
                     $(".around_eyes_many").css("background-image", "url(img/acne_bg.png)");
                     $(".around_eyes_many_text").css("color", "#fff");
                     $(".around_eyes_many_img").show();
                },
                inactive : function () {
                	$(".around_eyes_many").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".around_eyes_many_text").css("color", "#000");
                    $(".around_eyes_many_img").hide();
                }
            }
    	},
    	skin_aging_none : function () {
        	return {
                active : function () {
                	 //Lungo.dom(".skin_aging_mask_image").hide();
                     $(".skin_aging_none").css("background-image", "url(img/acne_bg.png)");
                     $(".skin_aging_none_text").css("color", "#fff");
                     $(".skin_aging_none_img").show();
                },
                inactive : function () {
                	$(".skin_aging_none").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".skin_aging_none_text").css("color", "#000");
                    $(".skin_aging_none_img").hide();
                }
            }
    	},
    	skin_aging_few : function () {
        	return {
                active : function () {
                	 //Lungo.dom(".skin_aging_mask_image").show();
                	 //Lungo.dom(".skin_aging_mask_image").attr("src", "img/wrinkles_medium.png");
                     $(".skin_aging_few").css("background-image", "url(img/acne_bg.png)");
                     $(".skin_aging_few_text").css("color", "#fff");
                     $(".skin_aging_few_img").show();
                },
                inactive : function () {
                	$(".skin_aging_few").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".skin_aging_few_text").css("color", "#000");
                    $(".skin_aging_few_img").hide();
                }
            }
    	},
    	skin_aging_many : function () {
        	return {
                active : function () {
                	 //Lungo.dom(".skin_aging_mask_image").show();
                	 //Lungo.dom(".skin_aging_mask_image").attr("src", "img/wrinkles_deep.png");
                     $(".skin_aging_many").css("background-image", "url(img/acne_bg.png)");
                     $(".skin_aging_many_text").css("color", "#fff");
                     $(".skin_aging_many_img").show();
                },
                inactive : function () {
                	$(".skin_aging_many").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".skin_aging_many_text").css("color", "#000");
                    $(".skin_aging_many_img").hide();
                }
            }
    	},
    	skin_type_none : function () {
        	return {
                active : function () {
                	 Lungo.dom(".skin_type_mask_image").show();
                	 Lungo.dom(".skin_type_mask_image").attr("src", "img/skin_type_dry.png");
                     $(".skin_type_none").css("background-image", "url(img/acne_bg.png)");
                     $(".skin_type_none_text").css("color", "#fff");
                     $(".skin_type_none_img").show();
                },
                inactive : function () {
                	$(".skin_type_none").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".skin_type_none_text").css("color", "#000");
                    $(".skin_type_none_img").hide();
                }
            }
    	},
    	skin_type_few : function () {
        	return {
                active : function () {
                	 Lungo.dom(".skin_type_mask_image").show();
                	 Lungo.dom(".skin_type_mask_image").attr("src", "img/skin_type_mixed.png");                	 
                     $(".skin_type_few").css("background-image", "url(img/acne_bg.png)");
                     $(".skin_type_few_text").css("color", "#fff");
                     $(".skin_type_few_img").show();
                },
                inactive : function () {
                	$(".skin_type_few").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".skin_type_few_text").css("color", "#000");
                    $(".skin_type_few_img").hide();
                }
            }
    	},
    	skin_type_many : function () {
        	return {
                active : function () {
                	 Lungo.dom(".skin_type_mask_image").show();
                	 Lungo.dom(".skin_type_mask_image").attr("src", "img/skin_type_oily.png");                	 
                     $(".skin_type_many").css("background-image", "url(img/acne_bg.png)");
                     $(".skin_type_many_text").css("color", "#fff");
                     $(".skin_type_many_img").show();
                },
                inactive : function () {
                	$(".skin_type_many").css("background-image", "url(img/acne_bg_inactive.png)");
                    $(".skin_type_many_text").css("color", "#000");
                    $(".skin_type_many_img").hide();
                }
            }
    	},
	}
}

Lungo.Events.init({
    'tap .male_image': function() {
	    App.question_data.gender = "m";
    	App.component().gender_male().active();
    	App.component().gender_female().inactive();
    },
    'tap .female_image': function() {
	    App.question_data.gender = "f";
    	App.component().gender_male().inactive();
    	App.component().gender_female().active();
    },
    'tap .skin_color_1': function() {
	    App.question_data.skin_color = 1;
    	App.component().skin_color1().active();
    	App.component().skin_color2().inactive();
    	App.component().skin_color3().inactive();
    	App.component().skin_color4().inactive();
    	App.component().skin_color5().inactive();
    	App.component().skin_color6().inactive();
    },
    'tap .skin_color_2': function() {
    	App.question_data.skin_color = 2;
    	App.component().skin_color1().inactive();
    	App.component().skin_color2().active();
    	App.component().skin_color3().inactive();
    	App.component().skin_color4().inactive();
    	App.component().skin_color5().inactive();
    	App.component().skin_color6().inactive();
    },
    'tap .skin_color_3': function() {
	    App.question_data.skin_color = 3;
    	App.component().skin_color1().inactive();
    	App.component().skin_color2().inactive();
    	App.component().skin_color3().active();
    	App.component().skin_color4().inactive();
    	App.component().skin_color5().inactive();
    	App.component().skin_color6().inactive();
    },
    'tap .skin_color_4': function() {
	    App.question_data.skin_color = 4;    
    	App.component().skin_color1().inactive();
    	App.component().skin_color2().inactive();
    	App.component().skin_color3().inactive();
    	App.component().skin_color4().active();
    	App.component().skin_color5().inactive();
    	App.component().skin_color6().inactive();
    },
    'tap .skin_color_5': function() {
	    App.question_data.skin_color = 5;    
    	App.component().skin_color1().inactive();
    	App.component().skin_color2().inactive();
    	App.component().skin_color3().inactive();
    	App.component().skin_color4().inactive();
    	App.component().skin_color5().active();
    	App.component().skin_color6().inactive();
    },
    'tap .skin_color_6': function() {
	    App.question_data.skin_color = 6;    
    	App.component().skin_color1().inactive();
    	App.component().skin_color2().inactive();
    	App.component().skin_color3().inactive();
    	App.component().skin_color4().inactive();
    	App.component().skin_color5().inactive();
    	App.component().skin_color6().active();
    },
    'tap .acne_black': function() {
    	if(App.question_data.acne_black != "black")
    	{
    		App.component().acne_black().active();
    		App.question_data.acne_black = "black";
    	}else{
    		App.component().acne_black().inactive();
    		App.question_data.acne_black = "";
    	}
    },
    'tap .acne_white': function() {
    	if(App.question_data.acne_white != "white")
    	{
    		App.component().acne_white().active();
    		App.question_data.acne_white = "white";
    	}else{
    		App.component().acne_white().inactive();
    		App.question_data.acne_white = "";
    	}
    },
    'tap .acne_red': function() {
    	if(App.question_data.acne_red != "red")
    	{
    		App.component().acne_red().active();
    		App.question_data.acne_red = "red";
    	}else{
    		App.component().acne_red().inactive();
    		App.question_data.acne_red = "";
    	}
    },
    'tap .acne_big_red': function() {
    	if(App.question_data.acne_big_red != "big_red")
    	{
    		App.component().acne_big_red().active();
    		App.question_data.acne_big_red = "big_red";
    	}else{
    		App.component().acne_big_red().inactive();
    		App.question_data.acne_big_red = "";
    	}
    },
    'tap .pores_wide': function() {
    	if(App.question_data.wide_pores != "wide_pores")
    	{
    		App.component().wide_pores().active();
    		App.question_data.wide_pores = "wide_pores";
    	}else{
    		App.component().wide_pores().inactive();
    		App.question_data.wide_pores = "";
    	}
    },
    'tap .pores_scars': function() {
    	if(App.question_data.scars != "scars")
    	{
    		App.component().scars().active();
    		App.question_data.scars = "scars";
    	}else{
    		App.component().scars().inactive();
    		App.question_data.scars = "";
    	}
    },
    'tap .freckle_none': function() {
	    App.question_data.freckle = "no";      
    	App.component().freckle_none().active();
    	App.component().freckle_dark().inactive();
    	App.component().freckle_yes().inactive();    	
    	App.component().freckle_melasma().inactive();
    },
    'tap .freckle_dark': function() {
	    App.question_data.freckle = "dark";      
    	App.component().freckle_none().inactive();
    	App.component().freckle_dark().active();
    	App.component().freckle_yes().inactive();    	
    	App.component().freckle_melasma().inactive();
    },
    'tap .freckle_yes': function() {
	    App.question_data.freckle = "freckle";      
    	App.component().freckle_none().inactive();
    	App.component().freckle_dark().inactive();
    	App.component().freckle_yes().active();    	
    	App.component().freckle_melasma().inactive();
    },
    'tap .freckle_melasma': function() {
	    App.question_data.freckle = "melasma";      
    	App.component().freckle_none().inactive();
    	App.component().freckle_dark().inactive();
    	App.component().freckle_yes().inactive();    	
    	App.component().freckle_melasma().active();
    },
    'tap .sensitivity_none': function() {
	    App.question_data.sensitivity = "no";      
    	App.component().sensitivity_none().active();
    	App.component().sensitivity_yes().inactive();
    },
    'tap .sensitivity_yes': function() {
	    App.question_data.sensitivity = "yes";      
    	App.component().sensitivity_none().inactive();
    	App.component().sensitivity_yes().active();
    },
    'tap .around_eyes_none': function() {
	    App.question_data.around_eyes = "none";    
    	App.component().around_eyes_none().active();
    	App.component().around_eyes_few().inactive();
    	App.component().around_eyes_many().inactive();
    },
    'tap .around_eyes_few': function() {
	    App.question_data.around_eyes = "dark";      
    	App.component().around_eyes_none().inactive();
    	App.component().around_eyes_few().active();
    	App.component().around_eyes_many().inactive();
    },
    'tap .around_eyes_many': function() {
	    App.question_data.around_eyes = "puffiness";      
    	App.component().around_eyes_none().inactive();
    	App.component().around_eyes_few().inactive();
    	App.component().around_eyes_many().active();
    },
    'tap .skin_aging_none': function() {
	    App.question_data.skin_aging = "none";    
    	App.component().skin_aging_none().active();
    	App.component().skin_aging_few().inactive();
    	App.component().skin_aging_many().inactive();
    },
    'tap .skin_aging_few': function() {
	    App.question_data.skin_aging = "medium";      
    	App.component().skin_aging_none().inactive();
    	App.component().skin_aging_few().active();
    	App.component().skin_aging_many().inactive();
    },
    'tap .skin_aging_many': function() {
	    App.question_data.skin_aging = "deep";      
    	App.component().skin_aging_none().inactive();
    	App.component().skin_aging_few().inactive();
    	App.component().skin_aging_many().active();
    },
    'tap .skin_type_none': function() {
	    App.question_data.skin_type = "dry";    
    	App.component().skin_type_none().active();
    	App.component().skin_type_few().inactive();
    	App.component().skin_type_many().inactive();
    },
    'tap .skin_type_few': function() {
	    App.question_data.skin_type = "mixed";
    	App.component().skin_type_none().inactive();
    	App.component().skin_type_few().active();
    	App.component().skin_type_many().inactive();
    },
    'tap .skin_type_many': function() {
	    App.question_data.skin_type = "oily";      
    	App.component().skin_type_none().inactive();
    	App.component().skin_type_few().inactive();
    	App.component().skin_type_many().active();
    },
});

Lungo.ready(function() {
	$('#article_list_search').keyup(function(){
   		var valThis = $(this).val().toLowerCase();
   		if(valThis != ""){
    		$('.article_lists>li').each(function(){ 
     			var text = $(this).text().toLowerCase();
        		(text.indexOf(valThis) > 0) ? $(this).show() : $(this).hide();         
   			});
   		}
	});
	$('#product_list_search').keyup(function(){
   		var valThis = $(this).val();
    	$('.product_lists>div').each(function(){ 
     		var text = $(this).text().toLowerCase();
        	(text.indexOf(valThis) > 0) ? $(this).show() : $(this).hide();         
   		});
	});
});