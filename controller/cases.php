<?php 
include "db.php";

$resp = $couch->send("GET", "/cases/_all_docs");

$alldocs = json_decode($resp, true);

$cases = $alldocs['rows'];

foreach ($cases as $case) {
    //echo $case["id"];
    //echo "<br>";
    $docs[]=$couch->send("GET", "/cases/".$case["id"]);
}
$docs=json_encode($docs);
echo '
<script>;
var cases ='.$docs.';
</script>';


?>