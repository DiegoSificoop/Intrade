$(document).ready(function() {
	$('#arriba').click(function(){  //referimos el elemento ( clase o identificador de acción )
		$('html, body').animate({scrollTop:0}, 'slow'); //seleccionamos etiquetas,clase o identificador destino, creamos animación hacia top de la página.
		return false;
	});
});