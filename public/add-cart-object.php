<?php
$name=$_GET['name'];
$price=$_GET['price'];
$quantity=$_GET['quantity'];
$total=$price*$quantity;

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background: #443f40;">
    <span style='color:#FFF'><?php echo $quantity; ?> <?php echo $name; ?> ont bien été ajouté a votre panier pour un montant de <?php echo $total; ?> &euro;</span>
    
</body>
</html>