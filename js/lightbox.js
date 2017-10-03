
      
      function lightbox(titletext,content,callback){
        		 var Titlelabel = $(".lightbox-content label");
        		 var ContentText = $(".articleText");
        		 var confirm_lightbox = 0;
        		 
        		 Notice.toggleClass("lightbox_toggle");
        		 //
        		// alert(content);
        		 if(img===".jpg" || img===".png" || img===".gif" || img===".pdf"){
        		 		Titlelabel.html(titletext);
        		 		
        		 		$(".lightbox-close").click(function(){
		        		 	Notice.removeClass("lightbox_toggle");
		        		 	confirm_lightbox = 1;
		        		 	if(callback && typeof(callback) === "function"){
		        		 		callback();		
		        		 	}
		        			
	        			});  
	        			
	        			   		 		
        		 }else{
        		 	  Titlelabel.html(titletext);
        		 	  ContentText.html(content);
        		 	  $(".lightbox-close").click(function(){
		        		 	Notice.removeClass("lightbox_toggle");
		        		 	confirm_lightbox = 1;
		        		 	
		        		 	if(callback && typeof(callback) === "function"){
		        		 		callback();		
		        		 	}
	        			});    
        		 }
            	
	       
	       
	       // return confirm_lightbox;
     		
      }

