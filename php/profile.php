<?php

$host = "localhost";
$dbname = "login_db";
$username = "root";
$password = ""; 

$mysqli = new mysqli(hostname : $host,
                    username : $username,
                    password : $password,
                    database : $dbname);
if ($mysqli->connect_errno)
{
    die("Connection error : " . $mysqli->connect_error);

} 
else    
{
    $sql=sprintf("SELECT * FROM users WHERE email='%s'",
        $mysqli->real_escape_string($_POST["email"])); 
    $result=$mysqli->query($sql);
    $user=$result->fetch_assoc();
    echo json_encode($user);
}
?>  