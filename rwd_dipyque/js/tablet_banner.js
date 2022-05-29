$(function(){

    // 태블릿 배너 이미지
    
    var tabdipshow_img,tabdip_nextimg;
    function fadeInOut(){
        tabdipshow_img=$(".tablet_backbanner_ul > img:eq(0)");
        tabdip_nextimg=$(".tablet_backbanner_ul > img:eq(1)");
        tabdip_nextimg.addClass("tablet_active");
        tabdip_nextimg.css("opacity","0")
        .animate({opacity:1},1000,function(){
            $(".tablet_backbanner_ul").append(tabdipshow_img);
            tabdipshow_img.removeClass("tablet_active");
        });
    };
    var timer = setInterval(function(){fadeInOut()},4000);

			

});