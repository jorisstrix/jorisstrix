<?php
require_once 'vendor/autoload.php'; // Load Composer's autoloader

$loader = new \Twig\Loader\FilesystemLoader('twigTemplates');
$twig = new \Twig\Environment($loader);

echo $twig->render('index.html.twig'); // Render the main template
?>