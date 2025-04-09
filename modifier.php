<?php
$connect = mysqli_connect("localhost","root","","bd25247361") or die("connection impossible");

$code = $_POST["code"];
$mdp = $_POST["mdp"];
$nmdp =$_POST["nmdp"];

$req = "SELECT *
        FROM client
        WHERE CodeClt ='$code' and Pswd='$mdp'";
$res = mysqli_query($connect , $req) or mysqli_error($connect);
if (mysqli_num_rows($res) < 1 ){
    echo "Clients inexistant";
    exit;
}

$req2 = "UPDATE client
         SET Pswd = '$nmdp'
         WHERE CodeClt ='$code' and Pswd='$mdp'";
$res2 = mysqli_query($connect , $req2) or die(mysqli_error($connect));
if ((mysqli_affected_rows($connect)>0)){
    echo "Mise a jour effectuee avec succes";
}
else{
    echo "Aucune mise à jour effectuée (données incorrectes ou mot de passe inchangé)";
}
?>