<?php
    include("../PHP/db_connect.php");

    $con = mysqli_connect($servername,$username,$password,$dbname);
    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $NomEvenement = $obj['NomEvenement'];
    $DateDebutEvenement = $obj['DateDebutEvenement'];
    $HeureDebutEvenement = $obj['HeureDebutEvenement'];
    $DateFinEvenement = $obj['DateFinEvenement'];
    $HeureFinEvenement = $obj['HeureFinEvenement'];
    $LieuEvenement = $obj['LieuEvenement'];
    $AnimeAbsentEvenement = $obj['AnimeAbsentEvenement'];

    $CheckSQL = "SELECT * FROM Evenement WHERE NomEvenement='$NomEvenement' AND DateDebutEvenement='$DateDebutEvenement' AND HeureDebutEvenement='$HeureDebutEvenement' AND DateFinEvenement='$DateFinEvenement' AND HeureFinEvenement='$HeureFinEvenement' AND LieuEvenement='$LieuEvenement' AND LieuEvenement='$LieuEvenement'";
    $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));

    if(isset($check)) {
        $EventExistMSG = false; //Cet Event existe déjà.. Essayez autre chose !
        $EventExistJson = json_encode($EventExistMSG);
        echo $EventExistJson ;  
    }
    else {
        $Sql_Query = "INSERT INTO Evenement (NomEvenement, DateDebutEvenement, HeureDebutEvenement, DateFinEvenement, HeureFinEvenement, LieuEvenement, AnimeAbsentEvenement) 
            values ('$NomEvenement','$DateDebutEvenement','$HeureDebutEvenement', '$DateFinEvenement', '$HeureFinEvenement', '$LieuEvenement', '$AnimeAbsentEvenement')";
        
        if(mysqli_query($con,$Sql_Query)) {
            $MSG = true ;//Event Registered Successfully
            $json = json_encode($MSG);
            echo $json ;
        }
        else{ 
            $error = 0;//Try again
            $json = json_encode($error);
            echo $json ;
        }
    }
    mysqli_close($con);
?>