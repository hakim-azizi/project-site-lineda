import React, { useEffect, useRef, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Product } from '../contexts/CartContext'; // Import du type Product

export type QuantityProps={
  id:string;
  quantity:number;
}

const CartPage: React.FC = () => {
  const [i,setI]=useState<number>(0)
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const quantityRef = useRef<HTMLSelectElement | null>(null);
  let quantity:number=0;
 if (quantityRef.current){ quantity=Number(quantityRef.current.value)}
 useEffect(()=>{
  
     for(setI(quantity); i<0; setI(i-1) ){
      console.log('i => ',i)
    }
    },[i,quantity])
if(cart.length===0) return <div>Votre panier est vide</div>

const selectQuantity=(product:QuantityProps)=>{
  if (quantity) {
    const selectedValue = Number(quantity);
    console.log(selectedValue);
    updateQuantity(product.id, (product.quantity = selectedValue));
  }
}

  return <>
      <h2>Panier</h2>
      <ul>
        {cart.map((product: Product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>{product.color || 'Pas de couleur'}</div>
            <label>Quantité: <select ref={quantityRef} onChange={()=>{selectQuantity(product)}}>
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
   
    </>;
};

export default CartPage;
