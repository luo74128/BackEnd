 
   function login(callback){
   	var Notice = $("#login-page");     	 
     Notice.toggleClass("login_toggle");
    
     if(callback && typeof(callback) === "function"){
			     callback();		
		 }
     $(".login-close").click(function(){
			 Notice.removeClass("login_toggle");
			 $(".cd-login").removeClass('is-visible');
			 $(".cd-sigup").removeClass('is-visible');
			 $(".cd-login").addClass('is-none');
			 $(".cd-sigup").addClass('is-none');			 			
	   });
		        			
	 }  
	    
	function login_selected(){
		$(".cd-login").addClass('is-visible');
		$(".cd-login").removeClass('is-none');
		$(".cd-sigup").addClass('is-none');
		$(".cd-sigup").removeClass('is-visible');
		$(".cd-forgot-pswd").addClass('is-none');
		$(".cd-forgot-pswd").removeClass('is-visible');				
		login_selectpage();
	}

	function signup_selected(){
		$(".cd-sigup").addClass('is-visible');
		$(".cd-sigup").removeClass('is-none');
		$(".cd-login").removeClass('is-visible');
		$(".cd-login").addClass('is-none');
		$(".cd-forgot-pswd").addClass('is-none');
		$(".cd-forgot-pswd").removeClass('is-visible');		
		signup_selectpage();
	}
	
	function forgot_pswd_selected(){
		$(".cd-forgot-pswd").addClass('is-visible');
		$(".cd-forgot-pswd").removeClass('is-none');
		$(".cd-sigup").addClass('is-none');
		$(".cd-sigup").removeClass('is-visible');		
		$(".cd-login").removeClass('is-visible');
		$(".cd-login").addClass('is-none');	
		remove_selectpage();
	}
	
	function signup_selectpage(){
		$("#signup-tap").addClass('SelectPage');		
		$("#login-tap").removeClass('SelectPage');
	}
	function login_selectpage(){
		$("#login-tap").addClass('SelectPage');
		$("#signup-tap").removeClass('SelectPage');
	}
	function remove_selectpage(){
		$("#login-tap").removeClass('SelectPage');
		$("#signup-tap").removeClass('SelectPage');
	}
	
	var formLogin  = $('.cd-login');
	var formSignup = $('.cd-sigup');
	var formforgot = $('.cd-forgot-pswd');
	
	formLogin.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();		
		/*阻止表單提交*/
	});
	formSignup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();	
		/*阻止表單提交*/	
	});
	formforgot.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		/*阻止表單提交*/		
	});