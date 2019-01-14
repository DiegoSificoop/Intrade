<?php
	header("Content-Type: text/html;charset=utf-8");

	$nombre = $_POST['nombre'];
	$email = $_POST['email']; 
	$comentario = $_POST['comentario'];

	require ("phpmailer/class.phpmailer.php"); 
		$mail = new PHPMailer; 
		$mail->Host = "mail.dasandapps.com";
		$mail->From = $email; 
		$mail->FromName = "Contacto DAS&APPS"; 
		$mail->Subject = "Contacto Sitio Web";
		$mail->addAddress("contacto@dasandapps.com", "DAS&APPS");
		$mail->MsgHTML("Envía:  ".$nombre." <br/>".$comentario." <br/> Correo del contacto: ".$email." ");

	if($mail->Send()){
		echo '<script>alert("Se ha enviado exitosamente su mensaje. Responderemos a la brevedad a su correo")</script> ';
		echo "<script>location.href='https://www.dasandapps.com'</script>";
	}
	else{
		echo '<script>alert("No ha sido posible enviar su mensaje. Intentelo de nuevo.")</script> ';
		echo "<script>location.href='https://www.dasandapps.com'</script>";
	}
?>