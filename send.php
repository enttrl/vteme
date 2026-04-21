<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $email = htmlspecialchars($_POST["email"]);

    $to = "enttrl@mail.ru";
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $phone\nEmail: $email";
    $headers = "From: no-reply@yourdomain.ru\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение отправлено";
    } else {
        echo "Ошибка отправки";
    }
}
?>