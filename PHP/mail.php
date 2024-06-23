<?php

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;



$mail = new PHPMailer();
$mail->SMTPDebug = SMTP::DEBUG_SERVER; 
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth= true;
$mail->Username = "bouabdellahbadreddine@gmail.com";
$mail->Password= 'secret';
$mail->SMTPSecure= 'ssl';
$mail->Port= 465;
$mail->isHTML(true);
$mail->CharSet= 'UTF-8';



 

?>