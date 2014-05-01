$(document).ready(function () {

     $("#select_language").change(function (e) {
     	if($("#select_language").val() == "English")
     	{
     		transToEnglish();
     		
     	}else if($("#select_language").val() == "Arab")
		{
			transToArab();
		}     	
     });
                          
});

function transToEnglish()
{
	$("#fileter_title_txt").html("Filter your search");
	$("#fileter_title_txt1").html("Filter your search");
	
	$("#latest_articles_txt").html("Latest articles");
	$("#latest_articles_txt").css("text-align", "left");
    $("#products_list_txt").html("Products list");
    $("#products_list_txt").css("text-align", "left");
    $("#doctors_list_txt").html("Doctors list");
    $("#doctors_list_txt").css("text-align", "left");
    $("#events_left_slide_txt").html("Events");
    $("#events_left_slide_txt").css("text-align", "left");
    $("#make_a_test_txt").html("Make a test");
    $("#make_a_test_txt").css("text-align", "left");
    $("#visit_us_on_txt").html("Visit us on:");
    $("#visit_us_on_txt").css("text-align", "center");
	
	$("#event_time_right_side_txt").html("Event Time (FROM - TO)");
	$("#event_time_right_side_txt").css("text-align", "left");
	$("#area_right1_side_txt").html("Area");
	$("#area_right1_side_txt").css("text-align", "left");
	$("#event_search_clear").html("Clear");
	$("#event_search_done").html("Done");;
	
	$("#doctor_name_right_side_txt").html("Docter Name");
	$("#doctor_name_right_side_txt").css("text-align", "left");
	$("#clinic_name_right_side_txt").html("Clinic Name");
	$("#clinic_name_right_side_txt").css("text-align", "left");
	$("#area_right_side_txt").html("Area");
	$("#area_right_side_txt").css("text-align", "left");
	$("#doctor_search_clear").html("Clear");
	$("#doctor_search_btn").html("Done");
	
	$("#gender_choose_txt").html("Choose your Gender:");
	$("#gender_male_txt").html("Male");
	$("#gender_female_txt").html("Female");
	$("#gender_back_btn_txt").html("Back");
	$("#gender_next_btn_txt").html("Next");
	$("#gender_title_txt").html("Bashrety");
	
	$("#skin_choose_txt").html("Choose your skin color:");
	$("#skin_back_btn_txt").html("Back");
	$("#skin_next_btn_txt").html("Next");
	$("#skin_title_txt").html("Bashrety");
	
	$("#acne_choose_txt").html("Do you have Acne ?");
	$("#acne_black_txt").html("Acne Black");
	$("#acne_white_txt").html("Acne White");
	$("#acne_red_txt").html("Acne Red");
	$("#acne_big_red_txt").html("Acne Big Red");
	$("#acne_back_btn_txt").html("Back");
	$("#acne_next_btn_txt").html("Next");
	$("#acne_title_txt").html("Bashrety");
	
	$("#freckle_choose_txt").html("Do you have Freckle ?");
	$("#freckle_no_txt").html("No");
	$("#freckle_yes_txt").html("Yes");
	$("#freckle_dark_txt").html("dark spots");
	$("#freckle_melasma_txt").html("melasma");
	$("#freckle_back_btn_txt").html("Back");
	$("#freckle_next_btn_txt").html("Next");
	$("#freckle_title_txt").html("Bashrety");
	
	$("#around_eyes_choose_txt").html("Choose your around eyes:");
	$("#around_eyes_none_txt").html("None");
	$("#around_eyes_few_txt").html("Dark");
    $("#around_eyes_many_txt").html("Puffiness");
	$("#around_eyes_back_btn_txt").html("Back");
	$("#around_eyes_next_btn_txt").html("Next");
	$("#around_eyes_title_txt").html("Bashrety");
	
	$("#sensitivity_choose_txt").html("Choose your skin sensitivity:");
	$("#sensitivity_no_txt").html("No");
	$("#sensitivity_yes_txt").html("Yes");
	$("#sensitivity_back_btn_txt").html("Back");
	$("#sensitivity_next_btn_txt").html("Next");
	$("#sensitivity_title_txt").html("Bashrety");
	
	$("#pores_choose_txt").html("Wide pores and scars");
	$("#pores_wide_txt").html("Wide pores");
	$("#pores_scars_txt").html("Scars");
	$("#pores_back_btn_txt").html("Back");
	$("#pores_next_btn_txt").html("Next");
	$("#pores_title_txt").html("Bashrety");
	
	$("#skin_type_choose_txt").html("Choose your skin type :");
	$("#skin_type_none_txt").html("dry");
	$("#skin_type_few_txt").html("mixed");
	$("#skin_type_many_txt").html("oily");
	$("#skin_type_back_btn_txt").html("Back");
	$("#skin_type_next_btn_txt").html("Next");
	$("#skin_type_title_txt").html("Bashrety");
	
	$("#skin_aging_choose_txt").html("Choose your skin aging:");
	$("#skin_aging_none_txt").html("None");
	$("#skin_aging_few_txt").html("Medium");
	$("#skin_aging_many_txt").html("Deep");
	$("#skin_aging_back_btn_txt").html("Back");
	$("#skin_aging_next_btn_txt").html("Next");
	$("#skin_aging_title_txt").html("Bashrety");
	
	$("#what_you_need_txt").html("What you need ?");
	$("#results_back_btn_txt").html("Back");
	$("#results_share_it_btn_txt").html("Share it");
	$("#results_title_txt").html("Bashrety");
	
	$("#article_list_back_btn_txt").html("Back");
	$("#article_list_txt").html("Articles");
	$("#article_list_title_txt").html("Bashrety");
	
	$("#article_detail_back_btn_txt").html("Back");
	$("#article_detail_txt").html("Articles");
	$("#article_detail_title_txt").html("Bashrety");
	
	$("#product_detail_back_btn_txt").html("Back");
	$("#product_detail_txt").html("Products");
	$("#product_detail_title_txt").html("Bashrety");
	
	$("#product_list_back_btn_txt").html("Back");
	$("#product_list_txt").html("Products");
	$("#product_list_title_txt").html("Bashrety");
	
	$("#doctors_list_txt").html("Doctors and Clinics");
	$("#doctors_list_back_btn_txt").html("Back");
	$("#doctors_list_search_btn_txt").html("Search");
	$("#doctors_list_title_txt").html("Bashrety");
	
	$("#events_list_txt").html("Events");
	$("#events_list_back_btn_txt").html("Back");
	$("#events_list_search_btn_txt").html("Search");
	$("#events_list_title_txt").html("Bashrety");
}

function transToArab()
{
	$("#fileter_title_txt").html("تنقية البحث");
	$("#fileter_title_txt1").html("تنقية البحث");
	
	$("#latest_articles_txt").html("أحدث المقالات");
	$("#latest_articles_txt").css("text-align", "right");
    $("#products_list_txt").html("قائمة المنتجات");
    $("#products_list_txt").css("text-align", "right");
    $("#doctors_list_txt").html("قائمة الأطباء");
    $("#doctors_list_txt").css("text-align", "right");
    $("#events_left_slide_txt").html("الأحداث");
    $("#events_left_slide_txt").css("text-align", "right");
    $("#make_a_test_txt").html("الطبيب الاليكتروني");
    $("#make_a_test_txt").css("text-align", "right");
	$("#visit_us_on_txt").html("قم بزيارتنا على");
	$("#visit_us_on_txt").css("text-align", "center");
	
	$("#event_time_right_side_txt").html("وقت الحدث (من - إلى)");
	$("#event_time_right_side_txt").css("text-align", "right");
	$("#area_right1_side_txt").html("منطقة");
	$("#area_right1_side_txt").css("text-align", "right");
	$("#event_search_clear").html("مسح");
	$("#event_search_done").html("تم");
		
	$("#doctor_name_right_side_txt").html("اسم الطبيب");
	$("#doctor_name_right_side_txt").css("text-align", "right");
	$("#clinic_name_right_side_txt").html("اسم العيادة");
	$("#clinic_name_right_side_txt").css("text-align", "right");
	$("#area_right_side_txt").html("منطقة");
	$("#area_right_side_txt").css("text-align", "right");
	$("#doctor_search_clear").html("مسح");
	$("#doctor_search_btn").html("تم");
	
	$("#gender_choose_txt").html("اختر النوع");
	$("#gender_male_txt").html("ذكر");
	$("#gender_female_txt").html("انثى");
	$("#gender_back_btn_txt").html("رجوع");
	$("#gender_next_btn_txt").html("التالى");
	$("#gender_title_txt").html("بشرتى");
	
	$("#skin_choose_txt").html("اختر لون بشرتك");
	$("#skin_back_btn_txt").html("رجوع");
	$("#skin_next_btn_txt").html("التالى");
	$("#skin_title_txt").html("بشرتى");
	
	$("#acne_choose_txt").html("هل لديك حب الشباب؟");
	$("#acne_black_txt").html("حب الشباب السوداء");
	$("#acne_white_txt").html("حب الشباب الأبيض");
	$("#acne_red_txt").html("حب الشباب الحمراء");
	$("#acne_big_red_txt").html("حب الشباب حمراء كبيرة");
	$("#acne_back_btn_txt").html("رجوع");
	$("#acne_next_btn_txt").html("التالى");
	$("#acne_title_txt").html("بشرتى");
	
	$("#freckle_choose_txt").html("هل لديك نمش؟");
	$("#freckle_no_txt").html("لا");
	$("#freckle_yes_txt").html("نعم");
	$("#freckle_dark_txt").html("البقع الداكنة");
	$("#freckle_melasma_txt").html("الكلف");
	$("#freckle_back_btn_txt").html("رجوع");
	$("#freckle_next_btn_txt").html("التالى");
	$("#freckle_title_txt").html("بشرتى");
	
	$("#what_you_need_txt").html("ماذا تحتاج");
	$("#results_back_btn_txt").html("رجوع");
	$("#results_share_it_btn_txt").html("قم بمشاركته");
	$("#results_title_txt").html("بشرتى");
	
	$("#article_list_back_btn_txt").html("رجوع");
	$("#article_list_txt").html("مقالات");
	$("#article_list_title_txt").html("بشرتى");
	
	$("#article_detail_back_btn_txt").html("رجوع");
	$("#article_detail_txt").html("مقالات");
	$("#article_detail_title_txt").html("بشرتى");
	
	$("#product_list_back_btn_txt").html("رجوع");
	$("#product_list_txt").html("المنتجات");
	$("#product_list_title_txt").html("بشرتى");
	
	$("#product_detail_back_btn_txt").html("رجوع");
	$("#product_detail_txt").html("المنتجات");
	$("#product_detail_title_txt").html("بشرتى");
	
	$("#doctors_list_txt").html("الأطباء والعيادات");
	$("#doctors_list_back_btn_txt").html("رجوع");
	$("#doctors_list_search_btn_txt").html("بحث");
	$("#doctors_list_title_txt").html("بشرتى");
	
	$("#events_list_txt").html("الأحداث");
	$("#events_list_back_btn_txt").html("رجوع");
	$("#events_list_search_btn_txt").html("بحث");
	$("#events_list_title_txt").html("بشرتى");	
	
	$("#around_eyes_choose_txt").html("اختيار عيون جميع أنحاء الخاصة بك");
	$("#around_eyes_none_txt").html("لا شيء");
	$("#around_eyes_few_txt").html("مظلم");
    $("#around_eyes_many_txt").html("انتفاخ");
	$("#around_eyes_back_btn_txt").html("بحث");
	$("#around_eyes_next_btn_txt").html("التالى");
	$("#around_eyes_title_txt").html("بشرتى");
	
	$("#sensitivity_choose_txt").html("اختيار حساسية بشرتك");
	$("#sensitivity_no_txt").html("لا");
	$("#sensitivity_yes_txt").html("نعم");
	$("#sensitivity_back_btn_txt").html("بحث");
	$("#sensitivity_next_btn_txt").html("التالى");
	$("#sensitivity_title_txt").html("بشرتى");
	
	$("#skin_type_choose_txt").html("اختيار نوع بشرتك");
	$("#skin_type_none_txt").html("جاف");
	$("#skin_type_few_txt").html("مختلط");
	$("#skin_type_many_txt").html("زيتي");
	$("#skin_type_back_btn_txt").html("بحث");
	$("#skin_type_next_btn_txt").html("التالى");
	$("#skin_type_title_txt").html("بشرتى");
	
	$("#skin_aging_choose_txt").html("اختيار الشيخوخة بشرتك");
	$("#skin_aging_none_txt").html("لا شيء");
	$("#skin_aging_few_txt").html("متوسط");
	$("#skin_aging_many_txt").html("عميق");
	$("#skin_aging_back_btn_txt").html("بحث");
	$("#skin_aging_next_btn_txt").html("التالى");
	$("#skin_aging_title_txt").html("بشرتى");
	
	$("#pores_choose_txt").html("مسام واسعة والندوب");
	$("#pores_wide_txt").html("مسام واسعة");
	$("#pores_scars_txt").html("ندوب");
	$("#pores_back_btn_txt").html("بحث");
	$("#pores_next_btn_txt").html("التالى");
	$("#pores_title_txt").html("بشرتى");
}

function calculateDistance(p1, p2) {
    var erdRadius = 6371;
    
    p1.Longitude = p1.Longitude * (Math.PI / 180);
    p1.Latitude = p1.Latitude * (Math.PI / 180);
    p2.Longitude = p2.Longitude * (Math.PI / 180);
    p2.Latitude = p2.Latitude * (Math.PI / 180);
    
    var x0 = p1.Longitude * erdRadius * Math.cos(p1.Latitude);
    var y0 = p1.Latitude * erdRadius;
    
    var x1 = p2.Longitude * erdRadius * Math.cos(p2.Latitude);
    var y1 = p2.Latitude * erdRadius;
    
    var dx = x0 - x1;
    var dy = y0 - y1;
    
    return Math.sqrt((dx * dx) + (dy * dy));
}