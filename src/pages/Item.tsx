import React, { useContext, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ImageZoomer from "../component/ImageZoomer";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductProvider";
import { ItemProps } from "../contexts/ProductProvider";

import "../style/item.css";
import "../style/form.css";

const Item: React.FC = () => {
  const location = useLocation().pathname;

  const verif = location.split("/").filter((e) => e);
  const quantityRef = useRef<HTMLSelectElement | null>(null);
  const [singularPlural, setSingularPlural] = useState<string>("de l'article");
  const [price, setPrice] = useState<number>(0);
  const [objectDataUrl, setObjectDataUrl] = useState<string>("../../add-cart-object.html"); // URL par défaut pour la balise object

  const cartContext = useContext(CartContext);
  const productContext = useContext(ProductContext);

  if (!cartContext || !productContext) {
    return <p>Chargement des données...</p>;
  }

  const { content, isLoading, error } = productContext;
  const { addToCart } = cartContext;

  if (error) return <p className="red-color">Une erreur s'est produite lors du chargement des données</p>;

  if (isLoading || !content.items.length) return <p>Chargement des données...</p>;

  let articles: ItemProps[] = [];
  content.items.map((article) => {
    if (article.name.toLowerCase() === verif[2]) {
      articles.push(article);
    }
    return "ca marche";
  });

  const priceUnit: number = Number(articles[0].price);

  const val = () => {
    if (quantityRef.current !== null) {
      const quantity = parseInt(quantityRef.current.value);
      setSingularPlural(quantity > 1 ? "des articles" : "de l' article");
      setPrice(priceUnit * quantity);
    }
  };

  const addToCartHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quantityRef.current) return;

    const quantity = parseInt(quantityRef.current.value);
    const product = {
      id: articles[0].id, // Utiliser un identifiant unique
      name: articles[0].name,
      price: priceUnit,
      quantity,
      color: articles[0].color || "default", // Exemple pour gérer la couleur
    };

    addToCart(product);

    const url = `../../add-cart-object.html?name=${articles[0].name}&price=${priceUnit}&quantity=${quantity}`;
    setObjectDataUrl(url); // Met à jour la balise <object>
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
        <h1 className="center">{articles[0].name}</h1>
      </header>
      <main>
        <section>
          <h2>{articles[0].name}</h2>
          <aside className="picture">
            <ImageZoomer picture={articles[0].picture} />
          </aside>
          <article>
            <p>{articles[0].description}</p>
            <form action="" method="get" id="cart" onSubmit={addToCartHandler}>
              <p>
                Nom de l'article : {articles[0].name}.
                <input type="hidden" name="id-article" value="1" id="id-article" />
              </p>
              <label>
                Quantité :
                <select
                  name="quantity"
                  id="quantity"
                  ref={quantityRef}
                  onChange={val}
                  required
                >
                  {options}
                </select>
              </label>
              <p>
                Prix : <span className="red-color">{articles[0].price} &euro;</span>
                <input type="hidden" name="price" id="price" value={priceUnit} />
              </p>
              <p>
                <span id="singular">Prix {singularPlural}</span> :{" "}
                <span className="red-color" id="price-items">
                  {price !== 0 ? price : articles[0].price} &euro;
                </span>
              </p>
              <button type="submit">Ajouter au panier</button>
            </form>
          </article>
        </section>
       {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <object data={objectDataUrl} width="300" height="75"></object>
        <NavLink to='../../cart'>Panier</NavLink>
      </main>
    </div>
  );
};

export default Item;
