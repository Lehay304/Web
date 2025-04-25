<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'bdconnect.php';
$error = '';

if (isset($_REQUEST['formSubmit'])){
    if(empty($_POST['LastName'])){
        $error = 'Введите вашу фамилию';
    }
    if(empty($_POST['Name'])){
        $error = 'Введите ваше имя';
    }
    if(empty($_POST['Otchestvo'])){
        $error = 'Введите ваше отчество';
    }
    if(empty($_POST['BirthDate'])){
        $error = 'Введите вашу дату рождения';
    }
    if(empty($_POST['PhoneNum'])){
        $error = 'Введите ваш номер телефона';
    }
    if(empty($_POST['Email'])){
        $error = 'Введите ваш E-mail';
    }
    if(empty($_POST['Sradio'])){
        $error = 'Выберите ваш пол';
    }
    if(empty($_POST['Eradio'])){
        $error = 'Выберите ваше образование';
    }
    if(empty($_POST['Country'])){
        $error = 'Выберите вашу страну';
    }
    if(empty($_POST['AcceptGetInf'])){
        $error = 'Согласитесь на обработку персональных данных';
    }

    if (empty($error)){
        $LastName = $_POST['LastName'];
        $Name = $_POST['Name'];
        $Otchestvo = $_POST['Otchestvo'];
        $BirthDate = $_POST['BirthDate'];
        $PhoneNum = $_POST['PhoneNum'];
        $Email = $_POST['Email'];
        $Sradio = $_POST['Sradio'];
        $Eradio = $_POST['Eradio'];
        $Country = $_POST['Country'];
        $AcceptGetInf = $_POST['AcceptGetInf'];

        $query = "INSERT INTO `users`(`LastName`, `Name`, `Otchestvo`, `BirthDate`, `PhoneNum`, `Email`, `Sradio`, `Eradio`, `Country`, `AcceptGetInf`) 
                  VALUES ('$LastName', '$Name', '$Otchestvo', '$BirthDate', '$PhoneNum', '$Email', '$Sradio', '$Eradio', '$Country', '$AcceptGetInf')";
        if (mysqli_query($db, $query)){
            echo 'Регистрация пройдена';
        } else {
            echo 'Ошибка регистрации :' . mysqli_error($db);
        }
    } else {
        echo $error;
    }
}
?>