$(document).ready(function(){


$('.index_image img').each(function( i ){
  $(this).delay(600*i).fadeTo(1000,1);
});


$(".iframe_click").on("click",function(){

	$(".iframe").show();

});


});