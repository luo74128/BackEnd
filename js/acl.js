/*global $ */
/*顯示 隱藏修改密碼區塊*/
$(document).ready(function () {
	"use strict";
	$("#changepassword").click(function(){
		$("#pswd").toggle('5000');
		$(".currentpwsd").css("display","block");
		$(".newpwsd").css("display","block");
		$(".confirmpwsd").css("display","block");		 
		$(".hidden_btn-1").addClass('hidden');
		$(".hidden_btn-2").removeClass('hidden');
		//$("#form-pswd").addClass('CheckInputJs');
	});
});



/* animations */
/*滾動視聽waypoint + animate*/
$(document).ready(function () {
"use strict";
function animations() {
    
	var delayTime = 0;
    $('[data-animate]').css({opacity: '0'});
    $('[data-animate]').waypoint(function(direction) {
	delayTime += 150;
	$(this).delay(delayTime).queue(function(next) {
	    $(this).toggleClass('animated');
	    $(this).toggleClass($(this).data('animate'));
	    delayTime = 0;		
	    next();
	    //$(this).removeClass('animated');
	    //$(this).toggleClass($(this).data('animate'));
	});
		
    },
	    {
		offset: '80%',
		triggerOnce: true
	    });

    $('[data-animate-hover]').hover(function() {
	$(this).css({opacity: 1});
	$(this).addClass('animated');
	$(this).removeClass($(this).data('animate'));
	$(this).addClass($(this).data('animate-hover'));
    }, function() {
	$(this).removeClass('animated');
	$(this).removeClass($(this).data('animate-hover'));
    });

}
	animations();
});



/*Product Detail 圖片更換*/
$(document).ready(function () {	
	"use strict";
	//function changePic(name){
		$('.productdetail-thumb-img img').click(function(){
			var N = $(this).attr("src");
			$(".productdetail-img img").attr("src",N);
		});						
	//}
});	
/******$(document).ready  END*******/	


/*Product List 測攔隱藏與顯示*/
$(document).ready(function () {	
	"use strict";
	$(function(){
		var sidebar = $("#sidebar_productlist");//側欄本身
		var content = $("#content_productlist");//內文本身		
		var filter  = $(".filter-action");
		
			filter.click(function(){ 
			if(sidebar.css('display') === 'none') {
				//x.style.display = 'block';
				sidebar.toggle(1000,'swing');
				sidebar.addClass('init_none');							
				content.removeClass('col-md-12');
				content.addClass('col-md-9');				
				filter.html("<i class='fa fa-bars' aria-hidden='true'></i><b>Filter Hide</b>");

			} else {
				//x.style.display = 'none';
				sidebar.toggle(1000,'swing');
				sidebar.removeClass('init_none');			
				content.removeClass('col-md-9');
				content.addClass('col-md-12');
				filter.html("<i class='fa fa-bars' aria-hidden='true'></i><b>Filter Show</b>");
			}
		});
	
	});

});	
/******$(document).ready  END*******/	


/*Filter li 隱藏與顯示*/
$(document).ready(function(){	
	"use strict";
	$(function(){		
		var myfilter = $('.sub-filter');
		myfilter.css('display','none');
		
		$('#myfilter li a').each(function(index){
  			$(this).click(function(){
				$(this).next('.sub-filter').toggle(1000);
			});
			//console.log(index + ": " + $(this).text());
		});
	});

});	
/******$(document).ready  END*******/	


/*****************************************/
/********檢查Form表單裡的input欄位格式*******/
/*****************************************/
$(document).ready(function(){
	"use strict";
	var pswd;
	var success_border_color= "#006cff";
	var error_border_color 	= "red";
	var error_text_color 	= "green";
	var error_font_size 	= "0.6em";/*請使用em單位*/
	$(".check-input").focus(function(){
		$(this).css("border-color",success_border_color);//移入對話框就顯示藍色邊框	
		//$('.user_hint').html($(this).attr("type")).css("color","green");
		$(this).blur(function(){
			
				if($(this).hasClass("check-email")){				
					check_email($(this));
				}
				if($(this).hasClass("check-text")){
					check_text($(this));
				}
				if($(this).hasClass("check-password")){
					pswd = $(this).val();					
					check_password($(this));
				}
				if($(this).hasClass("check-confirm")){
					check_confirm($(this),pswd);
				}
				if($(this).hasClass("check-phone")){
						check_phone($(this));						
				}
				if($(this).hasClass("check-card")){
						check_card($(this));
				}			
				if($(this).hasClass("check-number")){
						check_number($(this));
				}			  
		});


	});	
	function check_email(that){		
		var rule =/^([a-zA-Z0-9_\\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/;		
		if(rule.test(that.val())){
			that.addClass("qualified");	
			that.next('.error_text').html('');/*錯誤訊息恢復空白*/
			return true;
		}else{
			that.css("border-color",error_border_color);
			if(that.val()===""){
                		that.next('.error_text').html('This field is required').css("color",error_text_color).css("font-size",error_font_size);
            		}else{
            			that.next('.error_text').html('Ex:abc@hotmail.com').css("color",error_text_color).css("font-size",error_font_size);			/*錯誤文字*/
            		}
			that.removeClass("qualified");
			return false;
			//alert('不符合規定');
		}
	}
	function check_text(that){
		var rule = /^[\u4e00-\u9fa5_a-zA-Z0-9\s\w\d\\\/\*\@\#\%\$\!\~\^\&\*\(\)\:\?\,\.\|\<\>\{\}\[\]\=\-\_\+]+$/;
    //var rule = "";
		//that.blur(function(){ //接著當滑鼠從inputform這個對話框移開時，執行...
			if(rule.test(that.val())){
				that.addClass("qualified");
				that.next('.error_text').html('');/*錯誤訊息恢復空白*/
				return true;
			}else{
				that.css("border-color",error_border_color);
				if(that.val()===""){
            that.next('.error_text').html('This field is required').css("color",error_text_color).css("font-size",error_font_size);
        }else{
            that.next('.error_text').html("Do not enter special characters.").css("color",error_text_color).css("font-size",error_font_size);				
				    	/*錯誤文字*/
        }
				that.removeClass("qualified");
				return false;
			}
		//});
	}
	function check_password(that){
		var rule = /^[a-zA-Z0-9\w\d\\\/\*\@\#\%\$\!\~\^\&\*\(\)\:\?\,\.\|\<\>\{\}\[\]\=\-\_\+].{4,20}$/;
		//that.blur(function(){ //接著當滑鼠從inputform這個對話框移開時，執行...
			if(rule.test(that.val())){
				that.addClass("qualified");
				that.next('.error_text').html('');/*錯誤訊息恢復空白*/
				return true;
			}else{
				that.css("border-color",error_border_color);
				if(that.val()===""){
                    			that.next('.error_text').html('This field is required').css("color",error_text_color).css("font-size",error_font_size);
                		}else{
                    			that.next('.error_text').html('Do not enter special characters.  Min 4 words / Max 20 words.').css("color",error_text_color).css("font-size",error_font_size);
				    /*錯誤文字*/
               			 }
                
			    that.removeClass("qualified");
				return false;
			}
		//});	
	}
	function check_confirm(that,pswd){
		//that.blur(function(){ //接著當滑鼠從inputform這個對話框移開時，執行...	
			if (pswd!==that.val()){
				//alert(pswd);
				that.css("border-color",error_border_color);
				if(that.val()===""){
                    			that.next('.error_text').html('This field is required').css("color",error_text_color).css("font-size",error_font_size);
                		}else{
                    			that.next('.error_text').html('Password not same.').css("color",error_text_color).css("font-size",error_font_size);
				    /*錯誤文字*/
               			 }
                that.removeClass("qualified");
				return false;
			}else {	
				that.addClass("qualified");
               			that.next('.error_text').html('');/*錯誤訊息恢復空白*/
				return true;
			}
						
		//});	
	}
	function check_phone(that){
		var rule = /^([0-9\-\\(\) ])+$/;
		//that.blur(function(){ //接著當滑鼠從inputform這個對話框移開時，執行...
			if(rule.test(that.val())){
				that.addClass("qualified");
				that.next('.error_text').html('');/*錯誤訊息恢復空白*/
				return true;
			}else{
				that.css("border-color",error_border_color);
				that.next('.error_text').html('Error !! Ex: 0431-123-456 \(03\)111-222-222').css("color",error_text_color).css("font-size",error_font_size);
				/*錯誤文字*/
				that.removeClass("qualified");
				return false;
			}
		//});	
	}
	
	function check_card(that){
		var rule = /^([0-9\-\ ])+$/;
		//that.blur(function(){ //接著當滑鼠從inputform這個對話框移開時，執行...
			if(rule.test(that.val())){
				that.addClass("qualified");
				that.next('.error_text').html('');/*錯誤訊息恢復空白*/
				return true;
			}else{
				that.css("border-color",error_border_color);
				that.next('.error_text').html('Error !! Ex:0000-0000-0000-0000').css("color",error_text_color).css("font-size",error_font_size);
				/*錯誤文字*/
				that.removeClass("qualified");
				return false;
			}
		//});	
	}
	
	function check_number(that){
		var rule = /^([0-9])+$/;
		//that.blur(function(){ //接著當滑鼠從inputform這個對話框移開時，執行...
			if(rule.test(that.val())){
				that.addClass("qualified");
				that.next('.error_text').html('');/*錯誤訊息恢復空白*/
				return true;
			}else{
				that.css("border-color",error_border_color);
				that.next('.error_text').html('Warning !! Only Number.').css("color",error_text_color).css("font-size",error_font_size);
				/*錯誤文字*/
				that.removeClass("qualified");
				return false;
			}
		//});	
	}
	function check_select(that){	
		if(that.val()!==""){
				that.addClass("qualified");	
				return true;
		}else{
			that.css("border-color",error_border_color);
			that.next('.error_text').html('Warning !! No Empty.').css("color",error_text_color).css("font-size",error_font_size);
			/*錯誤文字*/
			that.removeClass("qualified");
			return false;
		}
	}
	
	function check_allow_null(that){		
			if(that.val()==="" || that.val()===null){
				that.addClass("qualified");
				that.css("border-color","");
				return true;
			}
	}
	function check_not_null(that){		
			if(that.val()==="" || that.val()===null){
				that.css("border-color",error_border_color);
				that.removeClass("qualified");
				return false;
			}
	}
	
        var input_array_val = function input_array_val(array_value){
            var userid = array_value['userid'].val();
            var username = array_value['username'].val();
            var phone = array_value['phone'].val();
            var street = array_value['street'].val();
            var suburb = array_value['suburb'].val();
            var state = array_value['state'].val();
            var postcode = array_value['postcode'].val();
            //data:{username:username, phone:phone,street:street,suburb:suburb,state:state,postcode:postcode},
            $.ajax({
                url: 'checkout_json.php',
                type: 'GET',
                dataType: 'json',
                data: {userid:userid, username:username, phone:phone, street:street, suburb:suburb, state:state, postcode:postcode},
                success: function(data){
                    for (var i = 0; i < data.length; i++) {
                        alert("name=" + data[i]["欄位名稱"]);
                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert("Status: " + xhr.status + "\nError: " + thrownError);
                }
            });
            //return array_value;
        }
	
	
	// button click
	$('.submit_btn').click(function(){
		$(this).parents('form').addClass('CheckInputJs');
		//按鈕送出前幫上一級包含的form表單加上Class.CheckInputJs 
	  var input_array = [];
		$('.CheckInputJs input').each(function(){
		//按鈕送出前檢查一遍輸入框	
			if($(this).hasClass("check-input")){
				if($(this).hasClass("check-email")){check_email($(this));}
				if($(this).hasClass("check-text")){check_text($(this));input_array[$(this).attr("name")]=$(this);}
				if($(this).hasClass("check-password")){pswd = $(this).val();check_password($(this));input_array['password']=$(this);}
				if($(this).hasClass("check-confirm")){check_confirm($(this),pswd);}
				if($(this).hasClass("check-phone")){check_phone($(this));input_array[$(this).attr("name")]=$(this);}
				if($(this).hasClass("check-number")){check_number($(this));input_array[$(this).attr("name")]=$(this);}
				if($(this).hasClass("check-card")){check_card($(this));input_array[$(this).attr("name")]=$(this);}
			}
			if($(this).hasClass("check-allow-null")){
				check_allow_null($(this));
			}
			if($(this).hasClass("check-not-allow")){
				check_not_null($(this));
			}
		});
		$('.CheckInputJs select').each(function(){
			if($(this).hasClass("check-select")){check_select($(this));input_array[$(this).attr("name")]=$(this);}
		});
		//Form下面沒有class = qualified的輸入框邊框都設成紅色	
		$('.CheckInputJs input:not(.qualified)').each(function(){			
			$(this).css("border-color",error_border_color);
		});
	  var a = $('.CheckInputJs input:not(.qualified)').size();
	  var b = $('.CheckInputJs textarea:not(.qualified)').size();
	  var c = $('.CheckInputJs select:not(.qualified)').size();
	  var d = a+b+c;
	  //alert(a);
	  if(d===0){
		  
		  var that = $(this);
		  var sendtosumbimt = function sendtosumbimt(){
		  	 that.parents('form').submit();
		   }
		  if($(this).parents('form').hasClass("NonSubmit")){
		  	 input_array_val(input_array);
		  	 lightbox('Tips !! ','the operation was successfully.');	
		  }else{
		  	 sendtosumbimt();
		  	 //lightbox('Tips !! ','The operation was successfully.', sendtosumbimt);	
		  }
		  
		   
	  }else{		  
		   lightbox('Operation notification','Input invalid.');	  
		   //alert("Fail");	 
		   //(this).parents('form').submit(false); 
	  }
		
	});
	
	
	
});	/******$(document).ready  END*******/	



/*Cart 小計計算*/
$(document).ready(function(){	
	"use strict";
	$(function(){
		var price;
		var subtotal = Array();
		var total=0;
		var num1;
		var num2;
		//var index = 0;
		//var sub = $(".cart-circle").find('.cart-sub').next().val();
		 $(".cart-circle").each(function(index){
			 var that = $(this);
			 
			 price	  = parseInt(that.find('.cart-price').html());
			 num2     = parseInt(that.find('.cart-qty').val());
			 
			 subtotal[index] = price*num2;	
			 that.find('.cart-subtotal').html(subtotal[index]);
			 total = total+subtotal[index];
			 cart_total();
			
			// alert(that.find('.cart-subtotal').html());
			 $(this).find('.cart-sub').on("click", function(){
				 num1 = parseInt($(this).next('.cart-qty').val());
				 if(num1===0){
					//total
					 num2 = 0;
					 $(this).next('.cart-qty').val(num2);
					 price	  = parseInt(that.find('.cart-price').html());	
					 subtotal[index] = price*num2;		
					 that.find('.cart-subtotal').html(subtotal[index]);
				 }else{
					 num2 = num1-1;
					 $(this).next('.cart-qty').val(num2);
					 price	  = parseInt(that.find('.cart-price').html());	
					 subtotal[index] = price*num2;		
					 that.find('.cart-subtotal').html(subtotal[index]);
				 	 total = total-price;
				 }
				/* $(".cart-circle").each(function(index){
					 price	  = parseInt($(this).find('.cart-price').html());

					 subtotal[index] = price*num2;	
					 $(this).find('.cart-subtotal').html(subtotal[index]);
					 total = total+subtotal[index];
				 	cart_total(total);
				 });*/
				 
			 });
			 
			/* that.find('.cart-qty').change(function(){
				  num1 = parseInt($(this).val());
				 if(num1===0){
					 num2 = 0;
					 $(this).val(num2);
					 price	  = parseInt(that.find('.cart-price').html());	
					 subtotal[index] = price*num2;		
					 that.find('.cart-subtotal').html(subtotal[index]);
				 }else{
					 $(this).val(num1);
					 price	  = parseInt(that.find('.cart-price').html());	
					 subtotal[index] = price*num1;		
					 that.find('.cart-subtotal').html(subtotal[index]);					 
				 }
				 
				 total = total-price;
				 cart_total(total);
				 
			 });*/
			 
			  $(this).find('.cart-add').on("click", function(){
				 num1 = parseInt($(this).prev('.cart-qty').val());
				 num2 = num1+1;
				 $(this).prev('.cart-qty').val(num2) ;
				 price	  = parseInt(that.find('.cart-price').html());	
				 subtotal[index] = price*num2;				 
				 that.find('.cart-subtotal').html(subtotal[index]);
				 total = total+price;
				 cart_total(total);
			 });
			 
			 
			//  index = index+1;
			 
		 });
		function cart_total(){
			//total = total+subtotal;
				$('.cart-total').html(total);
			
			
		}
			
		
		
	});

});	


/*Home 鍵 active*/
$(document).ready(function () {
	//alert($("#HomeTitle a").attr("href"));
	
	 $(".HomeTitle").each(function(){
	 	if(document.location.pathname=="/sedy/"){
	 		var compare = "index.php";
	 	}else{
	 		var	compare = document.location.pathname.match(/[^\/]+$/)[0];
	 	}		
		if(compare===$(this).children().attr("href")){
			$(this).addClass('active');
		}else{
			$(this).removeClass('active');
		}
	});
});


/*Banner Slider*/
 $(document).ready(function() {
 
 /* $("#owl-demo").owlCarousel({
      navigation : false, // Show next and prev buttons
 			autoPlay:true,
      slideSpeed : 300,
      paginationSpeed : 400,
      items : 1, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
  });
  */
});	
