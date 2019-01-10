function openTab(tabName) {
  var i, x, pos;
  x = document.getElementsByClassName("tabcont");
  for (i = 0; i < x.length; i++) { 
      x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";
  
  if(document.createStyleSheet) {
  	  document.createStyleSheet('../css/franquicias.min.css');
  }
}
