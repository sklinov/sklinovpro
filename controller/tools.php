<?php 
include "db.php";

$resp = $couch->send("GET", "/tools/_all_docs");

$alldocs = json_decode($resp, true);

$tools = $alldocs['rows'];

foreach ($tools as $tool) {
    //echo $case["id"];
    //echo "<br>";
    $docs[]=$couch->send("GET", "/tools/".$tool["id"]);
}
$docs=json_encode($docs);
echo '
<script>;
var tools ='.$docs.';
</script>';

?>