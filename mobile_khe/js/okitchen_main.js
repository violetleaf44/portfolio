$(function(){
    // 햄버거 메뉴
    $(".ham_i").click(function(){
        $("#ham_header").animate({marginLeft:"95%"},300);
    });
    $("#crossx").click(function(){
        $("#ham_header").animate({marginLeft:"0px"})

    });

    // 검색
    $(".fieldback .ser_crox").stop().hide();
    $("form").stop().hide();

    $(".htop_back .main_ser").click(function(){

    $("form").stop().slideDown(100);
        $(".fieldback .ser_crox").stop().show();
        $(".htop_back .main_ser").stop().hide()
  

    });    

    $(".ser_crox").click(function(){
        $("form").stop().slideUp(100);
        $(".fieldback .ser_crox").stop().hide();
        $(".htop_back .main_ser").stop().show()
    });
    // $(".fieldback .ser_crox").click(function(){
    //          $(".htop_back .main_ser").stop().show();
    //         $(".fieldback .ser_crox").stop().hide();   
    //     });
    // });





   
			

});