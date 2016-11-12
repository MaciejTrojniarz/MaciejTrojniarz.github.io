<?php
$mail    = $_POST["email"];
$to      = 'maciej.trojniarz@gmail.com';
$subject = '[MTWeb]'.$_POST["subject"];
$message = $_POST["name"]. "wrote:\t\n" .$_POST["message"];
$headers = 'From: webmaster@trojniarz.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion(). "\r\n" .
    'X-Send-From: '. 'MaciejTrojniarz.com contact form';
mail($to, $subject, $message, $headers);
?>