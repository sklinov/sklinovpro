<?php

$me = "Sergei Klinov <me@sklinov.pro>";
$subj = "You have received a message";
$customer_subj = "Your message received";
$body = "You have received a message from ";

$contact=[];

$contact["name"] = isset($_POST['name']) ? $_POST['name'] : NULL;
$contact["phone"] = isset($_POST['phone']) ? $_POST['phone'] : NULL;
$contact["email"] = isset($_POST['email']) ? $_POST['email'] : NULL;

$customer_body = '
<!doctype html>
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <style>
            body {
                font-family: "Montserrat", sans-serif;
                background-color: #eeeeee;
            }
            .msg__container {
                margin-top: 30px;
                margin-bottom: 30px;
                margin-left: auto;
                margin-right: auto;
                padding: 20px;
                background-color: #fafafa;
                filter: drop-shadow(10px 10px 10px #bdbdbd);
            }
            .msg__header {
                font-size: 2em;
                font-weight: 500;
            }
            .msg__text {
                font-size: 1em;
            }
            .msg__smalltext {
                font-size: 0.5em;
            }

        </style>
    </head>
<body>
    <div class="msg__container">
        <div class="msg__header">'.$contact["name"].',</div>    
        <div class="msg__text">
            <p>
                thank you for contacting me. I will respond your inquiery as soon as possible. 
            </p>
            <p>
                This is an automated message but you can reply to this e-mail if you have further questions. 
            </p>
                <br>Best wishes, <br><br> Sergei Klinov
        </div>
    <div>
</body>
</html>
';

$headers = 'From: Sergei Klinov <me@sklinov.pro>' . "\r\n" .
'Reply-To: Sergei Klinov <me@sklinov.pro>' . "\r\n" .
'MIME-Version: 1.0'. "\r\n" .
'Content-type: text/html; charset=iso-8859-1' ."\r\n" . 
'X-Mailer: PHP/' . phpversion();
$additional_headers = '-fme@sklinov.pro';


$body = $body.$contact["name"]." Please respond him as soon as possible to ".$contact["email"]." or call ".$contact["phone"];
//$customer_body = $contact["name"].$customer_body;

mail($me,$subj,$body,$headers,$additional_headers);
mail($contact["email"],$customer_subj, $customer_body, $headers, $additional_headers);

//echo $contact["name"].$contact["phone"].$contact["email"];
echo 'Thank you '.$contact["name"].'!<br>
     I will respond your inquiery as soon as possible.';
?>