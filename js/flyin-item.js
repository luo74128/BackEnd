/*****加入購物車動畫 Start****/
 
 /*
 <link rel="stylesheet" href="css/jquery-ui.min.css" media="screen" type="text/css" />
 <script src="js/jquery-ui.min.js"></script> 必要
 */

	$('.ion-plus').on('click',function(){
	
			//$(this).prev().toggle("scale", { percent: 0 }, 1000);	
			$(this).prev().stop().hide("scale", {percent: 200, origin: 'center', fade: 'hide' }, 1000);
		//$('.plus-bg').stop().animate({
		//	left:'-160px'},500, 'easeInOutExpo');		


});	 
		//$(this).css("padding","20px");
		//$(this).css("background-color","red");	
		//$(this).css("animation-name","scaleout");		
		//$(this).css("animation-duration","1s");
		//$(this).css("animation-timing-function","ease-in-out");
		/*$(this).animate({	     	     	            			     
	     'width': '50px',
	     'height': '50px',
	     'padding': '50px',
	     'border-radius': '50px',
	     'opacity': 0
	  }, 500, 'easeInOutExpo')
	  .animate({'opacity': 1,'border-radius': '5px','padding': '5px','width': '40px',
	     'height': '40px'}, 500, 'easeInOutExpo');
	     */



function flyinitem(flyoutitem,flyinplace){
	
	//$('.add-to-cart').on('click', function () {
	  var cart = $(flyinplace); /*飛入的目的地shopping cart*/
	  var imgtodrag = $(flyoutitem);/*選擇要拋入的物件*/
	    if(imgtodrag){
	        var imgclone = imgtodrag.clone().offset({/*clone複製當前jquery對像、offset位移*/
	            top: imgtodrag.offset().top, /*目前物件的top位置*/
	            left: imgtodrag.offset().left/*目前物件的left位置*/
	        }).css({/*設定樣式*/
	            'opacity': '0.5',
	            'position': 'absolute',
	            'height': '150px',
	            'width': '150px',
	            'z-index': '100'
	        }).appendTo($('body')).animate({/*appendTo() 方法在被选元素的结尾（仍然在内部）插入指定内容。*/
	            'top': cart.offset().top + 10,/*目的地的top位置*/
	            'left': cart.offset().left + 10,/*目的地的top位置*/
	            'width': '75px',/*縮小尺寸讓動畫看起來有效果*/
	            'height': '75px'/*縮小尺寸讓動畫看起來有效果*/
	        }, 1000, 'easeInOutExpo');
	        
	        setTimeout(function () {
	            cart.effect('shake', { times: 2 }, 200);
	        }, 1500);
	        
	        imgclone.animate({
	            'width': 0,
	            'height': 0
	        }, function () {
	            $(this).detach();
	        });
	      }
	//});
}
/*****加入購物車動畫 End*****/