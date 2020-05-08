<?php
include("db_connect.php");


$obj = json_decode($json,true);

$nom = $obj['nom'];
$prenom = $obj['prenom'];
$totem = $obj['totem'];
$quali = $obj['quali'];
$mail = $obj['mail'];

if($obj['mail'] != ""){
    $result = $msqli -> query("SELECT * FROM Utilisateur WHERE MailUtilisateur = '$mail'");

    if($result -> num_rows > 0) {
        echo json_encode('Ce mail existe déjà..');
    }
    else {
        $add = $msqli -> query("INSERT INTO Utilisateur (NomUtilisateur, PrenomUtilisateur, TotemUtilisateur, QualiUtilisateur, MailUtilisateur)
        VALUES ('$nom', '$prenom', '$totem', '$quali', '$mail')");

        if($add) {
            echo json_encode("Votre demande de compte pour l'application à été enregistré");
        }
        else {
            echo json_encode('Check internet connection');
        }
    }
}
else {
    echo json_encode('Try again');
}

// $_POST["nom"];
// $_POST["prenom"];
// $_POST["totem"];
// $_POST["quali"];
// $_POST["mail"];
//$_POST["password"];


// $requete = $dbh->prepare('SELECT * FROM Utilisateur');
// $requete -> execute();
// $retour["Utilisateur"]= $requete -> fetchAll(PDO::FETCH_ASSOC);

// $nbrMessage=count($retour["Utilisateur"]);
//  for($i = 0;$i<$nbrMessage;$i++){
//      $retour["Utilisateur"][$i]["QualiUtilisateur"]=htmlspecialchars_decode($retour["Utilisateur"][$i]["QualiUtilisateur"]);
//  }

// echo json_encode($retour);