jQuery(document).ready(listo);



function listo()
{
	//alert("mensaje de alerta");
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-times");
	
	});

	jQuery("header .container nav a").click(function(){

		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");

		var dev = jQuery(this).attr("href");
		//alert(dev);
		jQuery("html,body").animate({
			"scrollTop": jQuery(dev).offset().top - 76
		});
	});
}