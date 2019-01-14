(function(){
  
  var validanombre = function(){
    var n = nombre.value;
      if(n == ""){
        nombre.select();
      }
      else if(!/^[a-z-A-Z]+.+[a-z-A-Z]/.test(n)){
        alert("Escriba su nombre correctamente. Evite espacios antes de escribir.");
        nombre.value= "";
      }
  };

  var validatelefono = function(){
    var n = telefono.value;
      if(n == ""){
        telefono.select();
      }
      else if(!/^[0-9]{10}/.test(n)){
        alert("Escriba su numero de telefono celular de 10 digitos. Ej=(3414100000)");
        telefono.value="";
      }
  };

  var correo = function(){
    var n = corr.value;
      if(n == ""){
        corr.select();
      }
      else if(!/^[a-z-0-9\.\_\-]+@+[a-z]+.+[a-z]/.test(n)){
        alert("Escriba un correo electronico valido");
        corr.value= "";
      }
  };

  var validaasunto = function(){
    var n = asunto.value;
      if(n == ""){
        asunto.select();
      }
      else if(!/^[a-z-A-Z]+.+[a-z-A-Z]/.test(n)){
        alert("Escriba un asunto. Evite espacios antes de escribir.");
        asunto.value= "";
      }
  };


  var validaform = function(e){
    if(nombre.value == "" || telefono.value == "" || corr.value == "" || asunto.value == "" || texto.value == "" ){
      alert("Completa los campos antes de enviar");
      e.preventDefault();
    }
  };

  //Variables para validar formulario
  var formulario = document.getElementById('valform');
  formulario.addEventListener("submit",validaform);

  var nombre = document.getElementById('nombre');
  nombre.addEventListener("blur",validanombre);

  var telefono = document.getElementById('telefono');
  telefono.addEventListener("blur",validatelefono);

  var corr = document.getElementById('email');
  corr.addEventListener("blur",correo);

  var asunto = document.getElementById('asunto');
  asunto.addEventListener("blur",validaasunto);

  var texto = document.getElementById('texto');

})();