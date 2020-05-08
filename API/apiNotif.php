<?php
include("db_connect.php");


//  header('Content-Type: application/json');
//  var_dump($_POST);




$requete = $dbh->prepare('SELECT * FROM Utilisateur');
$requete -> execute();
$retour["User"]= $requete -> fetchAll();

// $nbrMessage=count($retour["notifications"]);
// for($i = 0;$i<$nbrMessage;$i++){
//     $retour["notifications"][$i]["message"]=htmlspecialchars_decode($retour["notifications"][$i]["message"]);
// }
//$retour="test";
echo json_encode($retour);