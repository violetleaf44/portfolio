$(document).ready(function(){ 
    fullset(); 
    quickClick(); 
});
 function fullset(){
      var pageindex = $("#fun_bigbox > .mo_article").size(); 
    
for(var i=1;i<=pageindex;i++){
    $("#fun_bigbox > .quick > ul").append("<li></li>"); 
} 
$("#fun_bigbox .quick ul :first-child").addClass("on"); 

//마우스 휠 이벤트 
$(window).bind("mousewheel", function(event){
var page = $(".quick ul li.on"); 
if($("body").find("#fun_bigbox:animated").length >= 1) return false;
    
//마우스 휠을 위로 
if(event.originalEvent.wheelDelta >= 0){ 
    var before=page.index(); 
    if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");//퀵버튼옮기기 
    var pagelength=0; 
    for(var i=1; i<(before); i++)
    { 
        pagelength += $(".full"+i).height(); 
    } 
    if(page.index() > 0){ 
        page=page.index()-1; 
        $("#fun_bigbox").animate({"top": -pagelength + "px"},1000, "swing");
        }else{ 
            alert("첫번째페이지 입니다.");
            } }else{ 
            var nextPage=parseInt(page.index()+1); 
            var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호 
            if(page.index() <= $(".quick ul li").size()-1){ page.next().addClass("on").siblings(".on").removeClass("on");
            } 
            if(nextPage < lastPageNum){ 
            var pagelength=0; 
            for(var i = 1; i<(nextPage+1); i++){

                    pagelength += $(".full"+i).height();
                    } 
                    $("#fun_bigbox").animate({"top": -pagelength + "px"},1000, "swing");
                    }
                    else{  
                    alert("마지막 페이지 입니다!");
                    };
                }
            }); 
            $(window).resize(function(){
                 var resizeindex = $(".quick ul li.on").index()+1; 
                 var pagelength=0; for(var i = 1; i<resizeindex; i++){ 
                    pagelength += $(".full"+i).height();
                 } 
                 $("#fun_bigbox").animate({"top": -pagelength + "px"},0);
                 }); 
                } 

                // 사이드 퀵버튼 클릭 이동
    function quickClick(){
         $(".quick li").click(function(){
              var gnbindex = $(this).index()+1; 
              var length=0; 
              for(var i=1; i<(gnbindex); i++)
              { 
                  length+=$(".full"+i).height();
                 } 
                 if($("body").find("#fun_bigbox:animated").length >= 1) 
                 return false; 
                 $(this).addClass("on").siblings("li").removeClass("on"); 
                 $("#fun_bigbox").animate({"top": -length + "px"},800, "swing");
                  return false;
                 });
}

