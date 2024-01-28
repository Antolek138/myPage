<?php

// Sprawdź, czy wszystkie wymagane pola zostały przesłane
if (empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["msg"])) {
    header("Location: /index.html?mail_status=error");
    exit;
}

// Walidacja danych wejściowych
$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
$from = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
$message = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);

// Sprawdź poprawność adresu email
if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
    header("Location: /index.html?mail_status=error");
    exit;
}

// Treść wiadomości
$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

// Filtrowanie i ucieczka danych
$txt = htmlspecialchars($txt, ENT_QUOTES);

// Adres e-mail docelowy
$to = 'kontakt@antolcoding.pl';

// Nagłówki
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Zabezpieczenie przed atakami CSRF - dodaj kod generujący i sprawdzający unikalny token

// Spróbuj wysłać e-mail
$mail_status = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $txt, $headers);

if ($mail_status) {
    header("Location: /index.html?mail_status=sent");
} else {
    header("Location: /index.html?mail_status=error");
}