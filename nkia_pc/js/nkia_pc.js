$(function(){
    // 햄 매뉴 나오게
    $(".tablet_back .pc_ham").click(function(){
        $(".pc_nav").animate({marginRight:"300px"},300);	
    });

     // x누르면 들어가라
     $(".pc_cross").click(function(){
         $(".pc_nav").animate({marginRight:"0px"},300);
     });
			
		
			
			

});