<?php include "header.php";?>
<div class="container-fluid init_relative mt_65" ><!-- Content -->
	<section class="row"><!--.row-->
	<?php include "sidebar-left.php"?>
	
	
	
	<!--Content-main-->
	<section class="content-nav ml_250">
		<div id="content-main">			
      <section class="col-md-12">
        <div class="content-path">
      		<span>Home</span> <span> / </span> <span>Table</span>             
        </div>
      </section>
          
      <section class="content-data">
				<?php include "table.php"?>
      </section>			
		</div>
		<?php include "footer.php";?>
		
	<div class="clearfix"></div>	
	</section>
	<!--./Content-main--> 
	
	
	
	</section><!--./row-->
	<div class="clearfix"></div>		
</div><!-- ./Content -->

<?php include "IncludeJs.php"?>