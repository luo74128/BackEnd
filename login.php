	<link href="css/login.less" rel="stylesheet/less" type="text/css"><!--Table樣式-->
	
	<div class="login-target" id="login-page">
  <div class="login-content">
  	<div>
  		<label><span id="login-tap" onclick="login_selected();">Lgin</span>  /  <span id="signup-tap" onclick="signup_selected();">Register</span></label>	
  		<div class="login-close"></div>
  	</div>
    <div class="login-area">								
							<div class="cd-login is-none">
							<form id="form-login" name="form-login" method="POST" action="" role="form"  >
							
							<div class="col-sm-8 col-md-offset-2" class="input-area">          
									<input type="email" class="form-control check-input check-email" id="signin-email" name="signin-email" maxlength="30" placeholder="E-mail" >
								  <span class="error_text"></span>
							</div>
								  
							<div class="col-sm-8 col-md-offset-2" class="input-area">          
									<input type="password" class="form-control check-input check-password" id="signin-password" name="signin-password" maxlength="20" placeholder="Password" >
									<span class="error_text"></span>
							</div>
							
						  <div class="col-sm-12" style="font-size: 0.9em;padding:10px;">
						  	<a href="javascriopt:void(0)"  onclick="forgot_pswd_selected();">Forgot Password</a>
						  </div>  
						  
							    
							<div class="col-sm-12" style="padding:30px;">                
                <button type="button" class="btn btn-style submit_btn">Login</button>
							</div>
						</form>
						</div>
						
						
						
						<div class="cd-sigup is-none">
							<form id="form-register" name="form-register" method="POST" action="" role="form"  >
							
							<div class="col-sm-8 col-md-offset-2" class="input-area">          
									<input type="text" class="form-control check-input check-text" id="signin-email" name="signin-user" maxlength="30" placeholder="User Name" >
								  <span class="error_text"></span>
							</div>
							
							<div class="col-sm-8 col-md-offset-2" class="input-area">          
									<input type="email" class="form-control check-input check-email" id="signin-email" name="signin-email" maxlength="30" placeholder="E-mail" >
								  <span class="error_text"></span>
							</div>
								  
							<div class="col-sm-8 col-md-offset-2" class="input-area">          
									<input type="password" class="form-control check-input check-password" id="signin-password" name="signin-password" maxlength="20" placeholder="Password" >
									<span class="error_text"></span>
							</div>
							
						  <div class="col-sm-12" style="font-size: 0.9em;padding:10px;">
						  	<a href="javascriopt:void(0)" onclick="forgot_pswd_selected();">Forgot Password</a>
						  </div>  
						  
							    
							<div class="col-sm-12" style="padding:30px;">                
                <button type="button" class="btn btn-style submit_btn">Creat Account</button>
							</div>
						</form>
						</div>
						
						
							<div class="cd-forgot-pswd is-none">							
							<form id="form-forgot" name="form-forgot" method="POST" action="" role="form"  >							
								
								<div class="col-sm-8 col-md-offset-2" class="input-area">     
								<br />
								<p>Lost your password? Please enter your email address. You will receive a link to create a new password.</p>
								<br />
								</div>
								<div class="col-sm-8 col-md-offset-2" class="input-area">          
									<input type="email" class="form-control check-input check-email" id="forgot-email" name="forgot-email" maxlength="30" placeholder="E-mail" >
								  <span class="error_text"></span>
								</div>
								<div class="col-sm-12" style="padding:30px;">                
	                <button type="button" class="btn btn-style submit_btn" >Reset Password</button>
								</div>							
							</form>
							</div>
										
    	<div style="clear:both;"></div>
    </div>
    <div style="clear:both;"></div>
	</div>
</div>