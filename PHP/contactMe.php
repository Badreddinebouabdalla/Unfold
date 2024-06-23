<?php
require_once 'mail.php';

$emailAdress = '';
$emailName = '';
$subject = '';
$message = '';

$status=array('hasSended'=>false);
try {
    $mail->setFrom($emailAdress,$emailName);
    $mail->addAddress('bouabdellahbadreddine@gmail.com');
    $mail->Subject=$subject;
    $mail->Body=$message;
    $mail->send();
    $status['hasSended']=true;
} catch (\Throwable $th) {
    $status['hasSended']=false;
}

echo json_encode($status);



 

?>