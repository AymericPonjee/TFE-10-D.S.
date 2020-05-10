<?php

$servername = "185.98.131.128";
$username = "divin1378832";
$password = "u4qnbuguxv";
$dbname = "divin1378832";

try {
    $dbh = new PDO("mysql:host=$servername;port=3306;dbname=$dbname", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
    // set the PDO error mode to exception
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connection success";
} catch (PDOException $e) {
    error_log("Connection failed: " . $e->getMessage());
    echo "Connection failed: " . $e->getMessage();
}