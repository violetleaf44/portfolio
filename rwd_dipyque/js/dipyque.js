$(function(){

    //  햄메뉴
    $(".ham").click(function(){
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


    // pc 메뉴
    $(function(){
        $("#pcmenu_ul > li > a").mouseenter(function(){
            // $(".tmenu").stop().slideUp(500);
            $(this).next().stop().slideDown(500);
        });

        $("#pcmenu_ul>li").mouseleave(function(){
            $(this).find(".mb").stop().slideUp(500);
        });
    });







    

    // 검색 열기 닫기
    $(".mob_form").hide();
    $(".head_right .mser_img> a").click(function(){
        $(".mob_form").stop().fadeIn(500);
    });
    $(".mob_form .cro_box .ser_cross").click(function(){
        $(".mob_form").stop().fadeOut(500);
    });


    // 스크롤 검색
    $(".mob_form").hide();
    $(".head_right2 .mser_img2> a").click(function(){
        $(".mob_form").stop().fadeIn(500);
    });
    $(".mob_form .cro_box .ser_cross").click(function(){
        $(".mob_form").stop().fadeOut(500);
    });





    // 로그인  닫기
     $(".logx_box .log_cross").click(function(){
    $(".mob_log").stop().fadeOut(500);
    });

    // 스크롤 로그인
     $(".logx_box .log_cross").click(function(){
        $(".mob_log2").stop().fadeOut(500);
        });





    // 관심상품 리스트
    $(".item_box").hide();
    $(".ic_item>a").click(function(){
     $(".item_box").stop().fadeIn(500);   
    });
     $(".item_cr .item_cross").click(function(){
         $(".item_box").stop().fadeOut(500);
    });
    // 스크롤 관심상품
    $(".item_box").hide();
    $(".ic_item2>a").click(function(){
     $(".item_box").stop().fadeIn(500);   
    });
     $(".item_cr .item_cross").click(function(){
         $(".item_box").stop().fadeOut(500);
    });

    // 장바구니
    $(".mob_market").hide();
    $(".ic_market>a").click(function(){
        $(".mob_market").stop().fadeIn(500);
    });
    $(".market_cr .market_cross").click(function(){
        $(".mob_market").stop().fadeOut(500);
    });
    // 스크롤 장바구니
    $(".mob_market").hide();
    $(".ic_market2>a").click(function(){
        $(".mob_market").stop().fadeIn(500);
    });
    $(".market_cr .market_cross").click(function(){
        $(".mob_market").stop().fadeOut(500);
    });





    // 모바일 배너 이미지

    var dipshow_img,dip_nextimg;
    function fadeInOut(){
        dipshow_img=$(".backbanner_ul > img:eq(0)");
        dip_nextimg=$(".backbanner_ul > img:eq(1)");
        dip_nextimg.addClass("mo_active");
        dip_nextimg.css("opacity","0")
        .animate({opacity:1},1000,function(){
            $(".backbanner_ul").append(dipshow_img);
            dipshow_img.removeClass("mo_active");
        });
    };
    var timer = setInterval(function(){fadeInOut()},4000);


    // header 스크롤다운
    // $(window).scroll(function(){
    //     var back = $(".ggg");
    //     if($(this).scrollTop() >= 330){ 
    //         back.addClass("back_color");
    //         $(this).animate({fadeIn},3000)
    //     }
    //     else back.removeClass("back_color")
    //     $(this).animate({fadeOut},3000)
    // });

    // $(window).scroll(function(){
    //     var ss = $(".abc");
    //     if($(this).scrollTop() >=650) ss.addClass("fade-in");
    //     else ss.removeClass("fade-in")
    // });





    // 헤더 스크롤 다운
    $(window).on('scroll',function(){
        if($(window).scrollTop()){ 
            $("header").addClass('active'); 
        

            }else{
                    $("header").removeClass('active'); 
            } 
        }); 




  
// 애니 효과
// 왼쪽
$(".wp1").waypoint(function(){
    $(".wp1").addClass("animated fadeInLeft");
},{
    offset:"75%"
});

// 위아래
$(".wp2").waypoint(function(){
    $(".wp2").addClass("animated fadeInOut")
},{
    offset:"75%"
});

$(".wp3").waypoint(function(){
    $(".wp3").addClass("animated fadeInLeft");
},{
    offset:"75%"
});

$(".wp4").waypoint(function(){
    $(".wp4").addClass("animated fadeInRight");
},{
    offset:"75%"
});

$(".wp5").waypoint(function(){
    $(".wp5").addClass("animated fadeInLeft");
},{
    offset:"75%"
});

$(".wp6").waypoint(function(){
    $(".wp6").addClass("animated fadeInRight");
},{
    offset:"75%"
});

$(".wp7").waypoint(function(){
    $(".wp7").addClass("animated fadeInLeft");
},{
    offset:"75%"    
});

$(".wp8").waypoint(function(){
    $(".wp8").addClass("animated fadeInRight")
},{
    offset:"75%"
});

$(".wp9").waypoint(function(){
    $(".wp9").addClass("animated fadeInLeft")
},{
    offset:"75%"
});

$(".wp10").waypoint(function(){
    $(".wp10").addClass("animated fadeInLeft")
},{
    offset:"75%"    
});

$(".en_div>wp11").waypoint(function(){
    $("en_div>.ap1").addClass("animated fadeInRight")
},{
    offset:"75%"
});



// 슬릭 슬라이더
$(function(){
    $(".best_ul").slick({
        autoplay:true,
        infinite:true,
        autoplayspeed:4000,
        slidesToShow:4,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                }
            },
            {
                breakpoint:760,
                settings:{
                    slidesToShow:1,
                    slidestoscroll:1
                }
            }
        ]
    });
});






// 퀵메뉴 
var defaulttop=parseInt($(".quick").css("top"));
$(window).on("scroll",function(){

var scv=$(window).scrollTop();
$(".quick").stop().animate({top:scv+defaulttop+"px"},500);    
});
$(".quick>a").click(function(){
    $.scrollTo(this.hash || 0, 1500);
    e.preventDefault();
});





  
   
			

});