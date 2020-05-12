<?php
    include("../PHP/db_connect.php");

    $con = mysqli_connect($servername,$username,$password,$dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $MailUtilisateur = $obj['MailUtilisateur'];
    $MDPUtilisateur = $obj['MDPUtilisateur'];

    $CheckSQL = "SELECT * FROM Utilisateur WHERE MailUtilisateur = '$MailUtilisateur' AND MDPUtilisateur = '$MDPUtilisateur'";
    $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

    if(isset($check)){

        $Valide = true;
        $Valide_Json = json_encode($Valide);
        echo $Valide_Json ; 
        
    }
    else{
        $NValide = false;
        $NValide_Json = json_encode($NValide);
        echo $NValide_Json ; 
    }

    mysqli_close($con);
?>
    