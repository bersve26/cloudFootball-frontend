<?php
header("Content-Type: text/plain");

$curlEnd = '';
foreach ($_GET['select2'] as $selectedOption){
    $curlEnd .= $selectedOption.'/';
}

error_log("curlEnd: ".$curlEnd);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'http://531.svenb.io:8080/predict/'.$curlEnd);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);

echo $result;
