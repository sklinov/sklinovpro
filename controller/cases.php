<?php 
include "db.php";

$resp = $couch->send("GET", "/cases/_all_docs");

$alldocs = json_decode($resp, true);

$cases = $alldocs['rows'];

foreach ($cases as $case) {
    //echo $case["id"];
    //echo "<br>";
    $docs[]=json_decode($couch->send("GET", "/cases/".$case["id"]),true);
}

//var_dump($docs);

// foreach ($docs as $doc){
//     echo $doc["data"]["project_name"];
//     echo "<br>";
//     echo $doc["data"]["description"];
//     echo "<br>";
//     echo '<img src='.$doc["images"]["main_image_url"].'>';
// }

?>