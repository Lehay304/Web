<?php
$server = 'localhost';
$user = 'root';
$password = '';
$database = 'registration-form';

$db = mysqli_connect($server, $user, $password, $db);

if(!$db) {
    echo "Не подключается к серверу БД";
    exit;
}
?>