$(function(){

    //  햄메뉴
    $(".ham2").click(function(){
        $("#mobi_menu").animate({marginLeft:"90%"},300);
    });
    // 햄  하위매뉴 열기
   $("#mobi_menu>ul>li>a").click(function(){
       if($(this).next().is(":visible")){
           $(this).next().stop().slideUp(500)
           $(this).children("img").attr("src","./dipimg/icon_hamopen.png");
       }
       else{
           $(".sub").stop().slideUp(500);
           $("#mobi_menu>ul>li>a").children("img").attr("src","./dipimg/icon_hamopen.png")
           $(this).next().stop().slideDown(500)
           $(this).children("img").attr("src","./dipimg/icon_hamclose.png")
       };
   });

// 햄매누 닫기
    $(".mobi_cross").click(function(){
        $("#mobi_menu").animate({marginLeft:"0%"},300);
    });
			
});