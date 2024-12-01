<?php
if(!file_exists('api/'.$_GET['api'].'.json')){
    header('HTTP/1.0 404 Not Found');
    exit;
}

// Autoriser une origine spécifique (par exemple React en localhost)
header("Access-Control-Allow-Origin: http://localhost:3000");

// Autoriser les méthodes HTTP nécessaires
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Autoriser les en-têtes personnalisés nécessaires
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Gérer les requêtes OPTIONS pour la pré-vérification CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json");

if ($_GET['api'] === 'keywords') {
    $data = str_replace(['}1','}
    1'],'}',include('api/keywords.json'));
} elseif ($_GET['api'] === 'products') {
    $data = str_replace(['}1','}
    1'],'}',include('api/products.json'));
} else {
    $data = ["error" => "Invalid API request"];
}
