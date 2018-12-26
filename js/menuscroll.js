$(document).ready(function(){
	var flag = false;
	var resolucion = false;
	var scroll; 

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				//$("#menusup").css({"display": "none"});
				$("#menu").css({"background-color": "rgb(185,100,0)"});
				$("#arriba").css({"display": "block"});
				flag = true; 
			}	
		}
		else{
			if(flag){
				//$("#menusup").css({"display": "flex"});
				$("#menu").css({"background-color": "transparent"});
				$("#arriba").css({"display": "none"});
				flag = false; 
			}
		}
	});
});