/*****����ُ��܇�Ӯ� Start****/
 
 /*
 <link rel="stylesheet" href="css/jquery-ui.min.css" media="screen" type="text/css" />
 <script src="js/jquery-ui.min.js"></script> ��Ҫ
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
	  var cart = $(flyinplace); /*�w���Ŀ�ĵ�shopping cart*/
	  var imgtodrag = $(flyoutitem);/*�x��Ҫ��������*/
	    if(imgtodrag){
	        var imgclone = imgtodrag.clone().offset({/*clone�}�u��ǰjquery����offsetλ��*/
	            top: imgtodrag.offset().top, /*Ŀǰ�����topλ��*/
	            left: imgtodrag.offset().left/*Ŀǰ�����leftλ��*/
	        }).css({/*�O����ʽ*/
	            'opacity': '0.5',
	            'position': 'absolute',
	            'height': '150px',
	            'width': '150px',
	            'z-index': '100'
	        }).appendTo($('body')).animate({/*appendTo() �����ڱ�ѡԪ�صĽ�β����Ȼ���ڲ�������ָ�����ݡ�*/
	            'top': cart.offset().top + 10,/*Ŀ�ĵص�topλ��*/
	            'left': cart.offset().left + 10,/*Ŀ�ĵص�topλ��*/
	            'width': '75px',/*�sС�ߴ�׌�Ӯ���������Ч��*/
	            'height': '75px'/*�sС�ߴ�׌�Ӯ���������Ч��*/
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
/*****����ُ��܇�Ӯ� End*****/