<?php
require_once 'vendor/autoload.php'; 

$loader = new \Twig\Loader\FilesystemLoader('twigTemplates');
$twig = new \Twig\Environment($loader);

echo $twig->render('index.html.twig'); 
?>