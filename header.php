<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet"><!--Bootstrap--> 
    <link href="css/animate.min.css" rel="stylesheet"> <!--動畫包-->
    <link href="css/initial.css" rel="stylesheet"><!--初始化樣式--->
    <link href="css/style.less" rel="stylesheet/less" type="text/css"><!--主樣式-->
    <link href="css/lightbox.less" rel="stylesheet/less" type="text/css"><!--lightbox樣式-->        
    <link href="css/login.less" rel="stylesheet/less" type="text/css"><!--login-->        
    <link href="css/ionicons.css" rel="stylesheet"><!--圖像字行-->       
		<!--<script src="js/jquery-1.8.3.min.js"></script>-->
		<script src="js/jquery-2.1.1.min.js"></script>
		
<title>Admin</title>
</head>

<body>
<?php  include "lightbox.html"; ?>	
<?php  include "login.php"; ?>	
<!--http://thevectorlab.net/flatlab/index.html  參考網站-->
 <script>
	$(document).ready(function(){
		"use strict";
		var nav = $(".nav-icon");//觸發按鈕
		var sidebar = $("#sidebar-nav");//側欄本身		
		var content = $(".content-nav");//內文本身
				
				/*Sidebar 顯示與隱藏*/
        nav.click(function(){
        	$(this).toggleClass("change");//觸發按鈕動作
        	
        	if(sidebar.css('display') === 'none') {        		
              sidebar.toggle(1000,'swing')
              sidebar.addClass('sidebar-toggle');
			   content.addClass('content-toggle');               					
              content.addClass('ml_250');
          }else{
          		 sidebar.toggle()
          		 sidebar.removeClass('sidebar-toggle'); 
				 content.removeClass('content-toggle');             
               content.removeClass('ml_250');
          }
          
        });
        
        /*sub-sidebar 有資料的添加+-icon*/ 
        $('.sub-menu ul').each(function(){
        		if($(this).children('ul')){
        			$(this).prev('a').addClass('add-toggle');
        			$(this).prev('a').addClass('minus-toggle');
        			$(this).prev('a').addClass('hasvalue');
        		}
        });
        
        /*sub-sidebar 顯示子清單*/ 
        var NavList = $('.sub-menu a'); 
        NavList.click(function(){        	
        	
				if($(this).hasClass('hasvalue')){
					$(this).toggleClass(".sub-menu ul");//觸發按鈕動作	        
        	var SubList = $(this).next('ul');
        	if(SubList.css('display') === 'none') {        		
              SubList.toggle(1000,'swing');              
              $(this).removeClass('add-toggle');   
          }else{
          	  
          	  SubList.toggle(1000,'swing');
          	  $(this).addClass('add-toggle');
          	
          }
        }
          
        });
         
});        
</script>
 <header class="container-fluid" data-animate="fadeInUp">
     <div class="row" id="top">
      <div id="Menu-List">
	     	<div class="nav-icon">
	          <span class="icon-bar-1"></span>
	          <span class="icon-bar-2"></span>
	          <span class="icon-bar-3"></span>
				</div>
				<a class="logo"><!--<img src="img/TestLogo.png" />-->
	        <h3><span class="logo-color">TEST</span>LOGO</h3>
	      </a>
      </div>
      <div id="Menu-Tips" class="init_hidden">
				<ul class="nav-top">
            <li class="email-alert init_relative">
            	  <a href="#"><span style="border-radius:99em; position:absolute; left:-15px;top:-10px;background-color:#F69;padding:10px;color:#FFFFFF; display:table-cell;line-height:6px; text-align:center;">6</span>
                <i class="icon ion-ios-email-outline "></i></a>
            </li>	
            <li class="even-alert init_relative">
                <span style="border-radius:99em; position:absolute; left:-15px;top:-10px;background-color:#36C;padding:10px;color:#FFFFFF; display:table-cell;line-height:6px; text-align:center;">3</span>
                <a href="#"><i class="icon ion-ios-bell-outline"></i></a>
            </li>
            <li>
               <span class="icon-md"><i class='icon ion-search'></i></span>
            	<input class="search" type="text" value="" max="20" placeholder="       SEARCH " />
            </li>
        </ul>
      </div>
      <div id="Account-Menu" class="pull-right">
        <ul class="nav-top">
	      	<li class="pull-right"><a href="#" class="sigup" onclick="login(signup_selected);">Sign Up</a></li>
					<li class="pull-right">|</li>
          <li class="pull-right"><a href="#" class="login" onclick="login(login_selected);">Log In</a></li>
          <li class="pull-right"><a href="#" class="shop-cart"><i class="icon ion-bag"></i></a></li>          
		 		</ul> 
      </div>     
    </div>
 </header>

<!-- ./header container-fluid -->
