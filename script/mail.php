<?php

$me = "me@sklinov.pro";
$subj = "You have received a message";
$body = "You have received a message from ";
$headers = 'From: me@sklinov.pro' . "\r\n" .
'Reply-To: me@sklinov.pro' . "\r\n" .
'X-Mailer: PHP/' . phpversion();


$contact=[];

$contact["name"] = isset($_POST['name']) ? $_POST['name'] : NULL;
$contact["phone"] = isset($_POST['phone']) ? $_POST['phone'] : NULL;
$contact["email"] = isset($_POST['email']) ? $_POST['email'] : NULL;

$body = $body.$contact["name"]." Please respond him as soon as possible to ".$contact["email"]." or call ".$contact["phone"];

mail($me,$subj,$body,$headers);

//echo $contact["name"].$contact["phone"].$contact["email"];
echo 'Thank you '.$contact["name"].'!<br>
     I will respond your inquiery as soon as possible.';
?>