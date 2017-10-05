	<link href="css/table.less" rel="stylesheet/less" type="text/css"><!--Table樣式-->
	<h1>[ <a href="#"><i class='icon ion-android-add-circle' data-animate="fadeInUp"></i></a> ]<h1/>
		<br />
	<table class="rwd-table">
		<tr>
			<th>No.</th>
			<th>Image</th>
			<th>Title</th>
			<th>Date</th>
			<th>Price</th>
			<th>Amount</th>
			<th>Status</th>
			<th>Option</th>	
		</tr>
		<tr>
			<td data-th="No."><i onclick="flyinitem('#img-1','.shop-cart');" class='icon ion-plus add-to-cart'></i></td>
			<td data-th="Image"><a onclick="lightbox('Images','img/11.jpg');"><img id="img-1" src="img/11.jpg" width="100"/></a></td>
			<td data-th="Title">The Title Example.</td>
			<td data-th="Date">10/02 [Wednesday]</td>
			<td data-th="Price"><?=sprintf("%.2f", 109.0023)?></td>
			<td data-th="Amount">20</td>
			<td data-th="Status"><a href="#"><i class='icon ion-android-checkmark-circle'></i></a></td>
			<td data-th="Option"><a href="#"><i class='icon ion-ios-trash-outline'></i></a></td>
		</tr>
		<tr>
			<td data-th="No."><div class="init_relative"><span class="plus-bg"></span><i onclick="flyinitem('#img-2','.shop-cart');" class='icon ion-plus add-to-cart'></i></div></td>
			<td data-th="Image"><a onclick="lightbox('Images','img/banner-2.jpg');"><img id="img-2"src="img/banner-2.jpg" width="100"/></a></td>
			<td data-th="Title">The Title Example.</td>
			<td data-th="Date">10/02 [Wednesday]</td>
			<td data-th="Price"><?=sprintf("%.2f", 109)?></td>
			<td data-th="Amount">20</td>
			<td data-th="Status"><a href="#"><i class='icon ion-alert-circled'></i></a></td>
			<td data-th="Option"><a href="#"><i class='icon ion-ios-trash-outline'></i></a></td>
		</tr>
		<tr>
			<td data-th="No."><i onclick="flyinitem('#img-3','.shop-cart');" class='icon ion-plus add-to-cart'></i></td>
			<td data-th="Image"><a onclick="lightbox('Images','img/11.jpg');"><img id="img-3" src="img/11.jpg" width="100"/></a></td>
			<td data-th="Title">The Title Example.</td>
			<td data-th="Date">10/02 [Wednesday]</td>
			<td data-th="Price"><?=sprintf("%.2f", 109.0023)?></td>
			<td data-th="Amount">20</td>
			<td data-th="Status"><a href="#"><i class='icon ion-android-checkmark-circle'></i></a></td>
			<td data-th="Option"><a href="#" onclick="lightbox('<h1 class=\'t_color\'>Operate</h1>','Success Delete This Item.');"><i class='icon ion-ios-trash-outline'></i></a></td>
		</tr>
</table>  

<nav class="init_textcenter">
	<ul class="pagination">
		<li><a href=""><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a></li>
		<li class="active"><a>1<span class="sr-only">(current)</span></a></li>
		<li><a href="">2<span class="sr-only">(current)</span></a></li>
		<li><a href=""><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>
	</ul>
</nav>

<script src="js/flyin-item.js"></script><!-- Login-->




