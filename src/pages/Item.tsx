import React, { useContext, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageZoomer from '../component/ImageZoomer';
import { CartContext } from '../contexts/CartContext';

import '../style/item.css';
import '../style/form.css';

type ItemProps = {
  id:string,
  name: string,
  price: number,
  description: string,
  category: string,
  subcategory: string,
  picture: string,
  url: string,
  color:string,
}

const Item: React.FC<{ articles: ItemProps[] }> = ({ articles }) => {
  const location = useLocation().pathname;
  const navigate = useNavigate(); // Utilisé pour rediriger vers 404
  const verif = location.split('/').filter((e) => e);
  const validCartRef = useRef<HTMLDivElement  | null>(null);
  const quantityRef = useRef<HTMLSelectElement | null>(null);
  const [singularPlural, setSingularPlural] = useState<string>("de l'article");
  const [price, setPrice] = useState<number>(0);
  const [objectDataUrl, setObjectDataUrl] = useState<string>('../../add-cart-object.html');

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <p>Chargement des données...</p>;
  }

  const { addToCart } = cartContext;

  // Filtrer l'article correspondant
  const filteredArticles = articles.filter(
    (article) => article.name.toLowerCase() === verif[2]
  );

  if (filteredArticles.length === 0) {
    // Rediriger vers la page 404 si aucun article n'est trouvé
    navigate('/404');
    return null; // Assurez-vous de ne rien rendre après une redirection
  }

  // On suppose qu'un seul article correspond
  const article = filteredArticles[0];

  const val = () => {
    if (quantityRef.current !== null) {
      const quantity = parseInt(quantityRef.current.value);
      setSingularPlural(quantity > 1 ? 'des articles' : "de l'article");
      setPrice(article.price * quantity);
    }
  };

  const addToCartHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quantityRef.current) return;
  
    const quantity = Number(quantityRef.current.value);
    const product = {
      id: article.id,
      name: article.name,
      price: article.price,
      quantity,
      color: article.color || 'default',
    };
  
    addToCart(product);
  
    const url = `http://localhost:8000/add-cart-object.php?name=${article.name}&price=${article.price}&quantity=${quantity}`;
    setObjectDataUrl(url);
  
    if (validCartRef.current) {
      validCartRef.current.style.display = 'flex';
    }
  };
  
  const closeAddCart = () => {
    if (validCartRef.current) {
      validCartRef.current.style.display = 'none';
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

  const cart = ()=>{
    navigate('../cart')
  }



  return (
    <div>
      <header>
        <h1 className='center'>{article.name}</h1>
      </header>
      <main>
        <section>
          <h2>{article.name}</h2>
          <aside className='picture'>
            <ImageZoomer picture={article.picture} />
          </aside>
          <article>
            <p>{article.description}</p>
            <form action='' method='get' id='cart' onSubmit={addToCartHandler}>
              <label>
                Quantité :
                <select
                  name='quantity'
                  id='quantity'
                  ref={quantityRef}
                  onChange={val}
                  required
                >
                  {options}
                </select>
              </label>
              <p>
                Prix : <span className='red-color'>{article.price} &euro;</span>
              </p>
              <p>
                <span id='singular'>Prix {singularPlural}</span> :{' '}
                <span className='red-color' id='price-items'>
                  {price !== 0 ? price : article.price} &euro;
                </span>
              </p>
              <button type='submit'>Ajouter au panier</button>
            </form>
          </article>
        </section>
        <div className='valid-cart' ref={validCartRef}>
         {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <object data={objectDataUrl} width='300' height='75'></object>
        <button onClick={cart}>régler vos achats</button>
        <button onClick={closeAddCart}>Continuez vos achats</button>
        </div>
      </main>
    </div>
  );
};

export default Item;
