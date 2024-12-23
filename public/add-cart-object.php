<?php
if(preg_match("#^([a-zA-Z0-9 éèêëÊËàâäÂÄîïÎÏûùüÛÜôöÔÖç]{0,100})$#",$_GET['name']) AND preg_match("#^([0-9]{0,100})$#",$_GET['price']) AND preg_match("#^([0-9]{0,100})$#",$_GET['quantity'])) {
 $name=$_GET['name'];
 $price=intval($_GET['price']); 
 $quantity=intval($_GET['quantity']);
}else{ echo "<p style='color:#ff0000'>ERROR !!!</p>";
echo "name => ".$_GET['name']."<br>price => ".$_GET['price']."<br>quantity => ".$_GET['quantity'];       
exit;
}

if($quantity>1){
$singular='ont';
}else{
$singular='a';
}

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
    <span style='color:#FFF'><?php echo $quantity; ?> <?php echo "$name  $singular"; ?> bien été ajouté à votre panier pour un montant de <?php echo $total; ?> &euro;</span>
    
</body>
</html>