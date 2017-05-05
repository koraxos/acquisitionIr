<?php

$servername = "localhost";
$username = "u842927745_oli";
$password = "tutFhqaf8mZ";
$db="u842927745_bdd";

$conn = mysqli_connect($servername, $username, $password,$db);
mysqli_set_charset($conn,("UTF8"));

$data=$_POST['mydata'];
$id=$_POST['dataType'];

$sql="INSERT INTO `ACQUISITIONS` (Acquisition,letter) Values('$data','$id')";

mysqli_query($conn,$sql);
mysqli_close($conn);
/*
u842927745_bdd
user u842927745_oli
mp bdd tutFhqaf8mZ*/
?>