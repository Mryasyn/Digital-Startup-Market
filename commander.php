<?php
$connect = mysqli_connect("localhost","root","","bd25247361") or die("connection impossible");

$code = $_POST["code"];
$mdp = $_POST["mdp"];

$req = "SELECT *
        FROM client
        WHERE CodeClt ='$code' and Pswd='$mdp'";
$res = mysqli_query($connect,$req) or die(mysqli_error($connect));

if (mysqli_num_rows($res) == 0){
    echo"Erreue : client inexistant";
    exit;
}

?>