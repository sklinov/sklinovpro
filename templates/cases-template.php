<?php
include "./controller/cases.php";
var_dump($_SERVER['DOCUMENT_ROOT']);
echo '
<div class="screen screen-gradient" id="cases">
<div class="screen__container screen__container-main" id="main-container">
    <h2 class="h2">'.$docs[0]["data"]["project_name"].'</h2>
    <div class="case__image" id="main-image"></div>
    <h3 class="case__title" id="case-title">Beauty Time</h3>
    <p class="case__description" id="case-description">'.
    $docs[0]["data"]["description"].'
    </p>';

    if(isset($docs[0]["data"]["aux_image_url"]["url"])) 
    {
     echo '
        <img class="case__auximage" src='.$docs[0]["data"]["aux_image_url"]["url"].' id="case-auximage">';
    }
echo '
</div>
</div>
';
echo '
<script>;
var imgurl ='.json_encode($docs[0]["images"]["main_image_url"])

.';
console.log(imgurl);
</script>';


?>