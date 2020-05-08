<?php
include("db_connect.php");


$obj = json_decode($json,true);

$mail = $obj['mail'];
$password = $obj['password'];

if($obj['mail'] != ""){
    $result = $msqli -> query("SELECT * FROM Utilisateur WHERE MailUtilisateur = '$mail' and MDPUtilisateur = '$mail'");

    if($result -> num_rows > 0) {
        echo json_encode('Aïe erreur..');
    }
    else {
        echo json_encode('Ok');
    }
}
else {
    echo json_encode('Try again');
}