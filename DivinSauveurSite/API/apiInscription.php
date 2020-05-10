<?php
include("../PHP/db_connect.php");

// function Inscription() {
//     $json = file_get_contents('php://input');

//     $POST = json_decode($json,true);

//     $nom = $POST['NomUtilisateur'];
//     $prenom = $POST['PrenomUtilisateur'];
//     $totem = $POST['TotemUtilisateur'];
//     $quali = $POST['QualiUtilisateur'];
//     $mail = $POST['MailUtilisateur'];
//     $password = $POST['MDPUtilisateur'];
//     $IsChef = $POST['IsChef'];


//     if($mail != " "){
//         $result = $msqli -> query("SELECT * FROM Utilisateur WHERE MailUtilisateur = '$mail'");
//         $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
        
//         if($result -> num_rows > 0) {
//             echo json_encode('Ce mail existe déjà..');
//         }
//         else {
//             $add = $msqli -> query("INSERT INTO Utilisateur (NomUtilisateur, PrenomUtilisateur, TotemUtilisateur, QualiUtilisateur, MailUtilisateur, MDPUtilisateur, IsChef)
//             VALUES ('$nom', '$prenom', '$totem', '$quali', '$mail', ' ', 0)");

//             if($add) {
//                 echo json_encode("Votre demande de compte pour l'application à été enregistré");
//             }
//             else {
//                 echo json_encode('Check internet connection');
//             }
//         }
//     }
//     else {
//         echo json_encode('Try again');
//     }
// }

$requete = $dbh->prepare('SELECT * FROM Utilisateur');
$requete -> execute();
$retour["Utilisateur"]= $requete -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($retour);