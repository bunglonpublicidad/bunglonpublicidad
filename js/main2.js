 $(document).ready(function(){
	 var ancho = $(window).width();
	 
	 	if (ancho <= 600){
		$('body').css({
			'background-size': 'initial'
		});
	}
	 
	 $(window).scroll(function(){
	 	var barra = $(window).scrollTop();
		var posicion = (barra * 0.10);
		
		$('body').css({
		 'background-position': '0 -' + posicion + 'px'
		});
	 
	 });
	 
	});