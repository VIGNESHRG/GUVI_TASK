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
    if($user){
        echo '{"status" : "failure"}';
    } 
    else{
    $sql = "INSERT INTO users (user_name,email,mno,dob,password) VALUES(?,?,?,?,?)";
    $stmt = $mysqli->stmt_init();
    if(! $stmt->prepare($sql)){
        die("SQL error:".$mysqli->error);
    }
    $stmt->bind_param("sssss",$_POST["user_name"],$_POST["email"],$_POST["mno"],$_POST["dob"],$_POST["password"]);
    $stmt->execute(); 
    echo '{"status" : "success"}';
    }
     
}
?>