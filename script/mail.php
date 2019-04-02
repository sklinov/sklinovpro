<?php

$me = "me@sklinov.pro";
$subj = "You have received a message";
$customer_subj = "Your message received";
$body = "You have received a message from ";
$customer_body = ", thank you for contacting me. I will respond your inquiery as soon as possible. This is an automated message but you can reply to this e-mail if you have further questions. Best wishes, Sergei Klinov";


$headers = 'From: me@sklinov.pro' . "\r\n" .
'Reply-To: me@sklinov.pro' . "\r\n" .
'MIME-Version: 1.0'. "\r\n" .
'Content-type: text/html; charset=iso-8859-1' ."\r\n" . 
'X-Mailer: PHP/' . phpversion();

$contact=[];

$contact["name"] = isset($_POST['name']) ? $_POST['name'] : NULL;
$contact["phone"] = isset($_POST['phone']) ? $_POST['phone'] : NULL;
$contact["email"] = isset($_POST['email']) ? $_POST['email'] : NULL;

$body = $body.$contact["name"]." Please respond him as soon as possible to ".$contact["email"]." or call ".$contact["phone"];
$customer_body = $contact["name"].$customer_body;

mail($me,$subj,$body,$headers);
mail($contact["email"],$customer_subj, $customer_body, $customer_headers);

//echo $contact["name"].$contact["phone"].$contact["email"];
echo 'Thank you '.$contact["name"].'!<br>
     I will respond your inquiery as soon as possible.';
?>