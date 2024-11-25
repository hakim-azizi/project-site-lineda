import React, { useContext, useRef, useState } from "react";
import ImageZoomer from "../component/ImageZoomer";
import { ProductContext } from "../contexts/ProductProvider";

import '../style/item.css';
import '../style/form.css';

const Item: React.FC = () => {
  const quantityRef = useRef<HTMLSelectElement | null>(null); // Appeler useRef correctement
 const [singularPlural,setSingularPlural]=useState<string>("de l'article");
  const [quantity,setQuantity]=useState<number>(1);
  const [price,setPrice]=useState<number>(10);
  const context = useContext(ProductContext);

  if (!context) {
    return <p>Chargement des données...</p>;
  }

  const { content, isLoading, error } = context;

  if (error) return <p className="red-color">Une erreur s'est produite lors du chargement des données</p>;

  if (isLoading || !content.items.length) return <p>Chargement des données...</p>;

  const articles = content.items[5];
const priceUnit=10;
  const val = () => {
   
    if (quantityRef.current!==null) {
		setQuantity(parseInt(quantityRef.current.value));
    if(parseInt(quantityRef.current.value)>1)
      {
        setSingularPlural('des articles');
      }else{
        setSingularPlural("de l' article");
      }
	setPrice(priceUnit*parseInt(quantityRef.current.value));
}
   };

  const options = [];
  for (let i = 0; i < 10; i++) {
    options.push(
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    );
  }

  return (
    <div>
      <header>
        <h1 className="center">{articles.name}</h1>
      </header>
      <main>
        <section>
          <h2>{articles.name}</h2>
          <aside className="picture">
            <ImageZoomer picture={articles.picture}/>
          </aside>
          <article>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nisi explicabo
              dignissimos ad, ipsa sequi? Omnis et id ratione accusantium, amet ipsa nobis
              praesentium ex a itaque esse vel labore?
            </p>
            <form action="" method="get" id="cart">
              <p>
                Nom de l'article : {articles.name}.
                <input type="hidden" name="id-article" value="1" id="id-article" />
              </p>
              <label>
                Quantité :
                <select
                  name="quantity"
                  id="quantity"
                  ref={quantityRef} // Utiliser correctement la référence
                  onChange={val}
                  required
                >
                  {options}
                </select>
              </label>
              <p>
                Prix : <span className="red-color">{priceUnit} &euro;</span>
                <input type="hidden" name="price" id="price" value={priceUnit} />
              </p>
              <p>
                <span id="singular">Prix {singularPlural}</span> : <span className="red-color" id="price-items">{price} &euro;</span>
              </p>
              <button type="submit">Ajouter au panier</button>
            </form>
          </article>
        </section>
        <object data='../../add-cart-object.html' width='300' height='75'></object>
      </main>
    </div>

  );
};

export default Item;
