<?php
//Recepient Email Address
$to_email = "vacafest@gmail.com";


//Sanitize input data using PHP filter_var().
$nombre = filter_var($_POST["nombre"], FILTER_SANITIZE_STRING);
$link = filter_var($_POST["link"], FILTER_SANITIZE_URL);
$ubicacion = filter_var($_POST["ubicacion"], FILTER_SANITIZE_STRING);
$redesSociales = filter_var($_POST["redesSociales"], FILTER_SANITIZE_URL);
$telefono = filter_var($_POST["telefono"], FILTER_SANITIZE_STRING);
$duracion = filter_var($_POST["duracion"], FILTER_SANITIZE_NUMBER_INT);
$correo = filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);
$costo = filter_var($_POST["costo"], FILTER_SANITIZE_NUMBER_INT);
$subject = "Postulacion Vacafest";

//Textbox Validation 
if(strlen($nombre)<1){
	// If length is less than 4 it will output JSON error.
	$output = json_encode(array('type'=>'error', 'text' => 'valor vacio!'));
	die($output);
}

$message = '<html><body>';
$message .= 'Nombre: '.$nombre.'<br>';
$message .= 'Link de Youtube: '.$link.'<br>';
$message .= 'Ubicacion: '.$ubicacion.'<br>';
$message .= 'Redes Sociales: '.$redesSociales.'<br>';
$message .= 'Telefono: '.$telefono.'<br>';
$message .= 'Duracion del Show: '.$duracion.'<br>';
$message .= 'Correo: '.$correo.'<br>';
$message .= 'Costo: '.$costo.'<br>';
$message .= 'integrantes:<br>';
$message .= $_POST['integrantes'];
$message .= "</body></html>";

$file_attached = false;
//check uploaded file
if(isset($_FILES['img'])){
	//get file details we need
	$file_tmp_name = $_FILES['img']['tmp_name'];
	$file_name = $_FILES['img']['name'];
	$file_size = $_FILES['img']['size'];
	$file_type = $_FILES['img']['type'];
	$file_error = $_FILES['img']['error'];
	
	//exit script and output error if we encounter any
	if($file_error>0){
		$mymsg = array(
			1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini",
			2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form",
			3=>"The uploaded file was only partially uploaded",
			4=>"No file was uploaded",
			6=>"Missing a temporary folder" );
			
			$output = json_encode(array('type'=>'error', 'text' => $mymsg[$file_error]));
			die($output);
	}

	//read from the uploaded file & base64_encode content for the mail
	$handle = fopen($file_tmp_name, "r");
	$content = fread($handle, $file_size);
	fclose($handle);
	$encoded_content = chunk_split(base64_encode($content));

	//now we know we have the file for attachment, set $file_attached to true
	$file_attached = true;
}

//continue if we have the file
if($file_attached){

	// a random hash will be necessary to send mixed content
	$separator = md5(time());

	// carriage return type (RFC)
	$eol = "\r\n";

	// main header (multipart mandatory)
	$headers = "From:VacaFest <mailto@vacafest.com>" . $eol;
	$headers .= "MIME-Version: 1.0" . $eol;
	$headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
	$headers .= "Content-Transfer-Encoding: 7bit" . $eol;
	$headers .= "This is a MIME encoded message." . $eol;
	
	// message
	$body .= "--" . $separator . $eol;
	$body .= "Content-type:text/html; charset=utf-8\n";
	$body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
	$body .= $message . $eol;
	
	// attachment
	$body .= "--" . $separator . $eol;
	$body  .= "Content-Type:".$file_type." ";
	$body .= "Content-Type: application/octet-stream; name=\"" . $file_name . "\"" . $eol;
	$body .= "Content-Transfer-Encoding: base64" . $eol;
	$body .= "Content-Disposition: attachment; filename=\"".$file_name."\"". $eol;
	$body .= $encoded_content . $eol;
	$body .= "--" . $separator . "--";
}
else{
	$eol = "\r\n";
	$headers = "From: VacaFest <mailto@vacafest.com>" . $eol;
	$headers .= "Reply-To: ". strip_tags($correo) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$body .= $message . $eol;
}

$send_mail = mail($to_email, $subject, $body, $headers);
if(!$send_mail){
	//If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
	die('No se pudo enviar el correo');
}else{
	die('Tu banda ya está postulada y dentro del proceso de selección. ¡Gracias!');
}
?>