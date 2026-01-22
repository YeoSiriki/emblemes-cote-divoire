<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = strip_tags(trim($_POST['nom']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $telephone = strip_tags(trim($_POST['telephone']));
    $entreprise = strip_tags(trim($_POST['entreprise']));
    $message = strip_tags(trim($_POST['message']));

    if (!$nom || !$email || !$message) {
        echo json_encode(['status' => 'error', 'message' => 'Veuillez remplir tous les champs obligatoires.']);
        exit;
    }

    $to = "contact@ufr-biologiques.ci";
    $subject = "Message du formulaire de contact";
    $body = "Nom: $nom\nEmail: $email\nTéléphone: $telephone\nEntreprise: $entreprise\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Votre message a été envoyé avec succès !']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée']);
}
