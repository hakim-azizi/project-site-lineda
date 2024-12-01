import React, { useRef } from "react";
import { useCart } from "../contexts/CartContext";
import { Product } from "../contexts/CartContext"; // Import du type Product

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const quantityRef = useRef<HTMLSelectElement | null>(null);
if(cart.length===0) return <div>Votre panier est vide</div>
// const quantity=()=>{

// console.log(Number(quantityRef.current.value));
// updateQuantity(product.id, product.quantity=Number(quantityRef.current.value )
// }

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {cart.map((product: Product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>{product.color || "Pas de couleur"}</div>
            <label>Quantité: <select ref={quantityRef} onChange={()=>{
                if (quantityRef.current) {
                  const selectedValue = Number(quantityRef.current.value);
                  console.log(selectedValue);
                  updateQuantity(product.id, (product.quantity = selectedValue));
                }
            }}>
              <option value={product.quantity}>{product.quantity}</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
            </select></label>
            <div>Prix: {product.price} &euro;</div>
            <button onClick={() => removeFromCart(product.id)}>X</button>
          </li>
        ))}
      </ul>
      <h3>Total: {total} &euro;</h3>
   
    </div>
  );
};

export default CartPage;
