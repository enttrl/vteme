<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $phone = htmlspecialchars(trim($_POST["phone"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));

    $to = "enttrl@mail.ru";
    $subject = "Новая заявка с сайта";

    $message = "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Email: $email\n";

    $headers = "From: enttrl@mail.ru\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение отправлено";
    } else {
        echo "Ошибка отправки";
    }
}
?>