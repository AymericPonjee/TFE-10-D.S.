<?php

$servername = "127.0.0.1";
$username = "Aymeric";
$password = "Tryggon006";
$dbname = "DivinSauveurBDD";

try {
    $dbh = new PDO("mysql:host=$servername;port=8889;dbname=$dbname", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    // set the PDO error mode to exception
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connection success";
} catch (PDOException $e) {
    error_log("Connection failed: " . $e->getMessage());
    echo "Connection failed: " . $e->getMessage();
}