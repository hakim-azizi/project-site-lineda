import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
import Items, {ItemsProps} from '../component/Items';

const Home: React.FC = () => {
  const context = useContext(ProductContext);
  
  if (!context) {
    return <p>Chargement des données...</p>;
  }
  

  const { content, isLoading, error } = context;

  if(error) return <p className="red-color">Une Erreur c'est produite lors du chargement des données</p>

  if (isLoading || !content.items.length)  return <p>Chargement des données...</p>;
  
const randomiser=(max:number)=>{
  const random:number= Math.floor(Math.random() * max);
  return random;
}

 const randomNumbers= ()=> {
    const numbers:number[] = [];
    while (numbers.length < 10) {
        const randomNumber:number = Math.floor(Math.random() * ((content.subCategory.length-1) - 0 + 1)) + 0;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}
 
  // Récupération des données
  const articles: ItemsProps[] = content.items;
  const category = content.category[randomiser(content.category.length)];
  const subCategory = content.subCategory[randomiser(content.subCategory.length)];
  console.log('env =>',process.env.REACT_APP_API_URL)
  return (
    <>
      <div>
        <header>
          <h1 className="center">LINEDA V&ecirc;tements</h1>
        </header>
        <img
          className="visual"
          src="asset/pictures/834e550a-baa2-490b-bbbb-50e3653674a3.jpg"
          alt=""
        />
        <main>
          <section>
            <h2>Sous-titre</h2>
            <p>Voici une présentation de quelques articles</p>
            <aside className="home">
              {randomNumbers().map((rand) => (
                <Items
                  key={rand}
                  name={articles[rand].name}
                  picture={articles[rand].picture}
                  price={articles[rand].price}
                  url={articles[rand].url}
                />
              ))}
            </aside>
          </section>
          <section>
            <h2>{category.name}</h2>
            <article>
              <p>{category.description}</p>
            </article>
            <aside className="home">
            {randomNumbers().map((rand) => (
                <Items
                  key={rand}
                  name={articles[rand].name}
                  picture={articles[rand].picture}
                  price={articles[rand].price}
                  url={articles[rand].url}
                />
              ))}
            </aside>
          </section>
          <section>
            <article>
              <h2>{subCategory.name}</h2>
              <p>{subCategory.description}</p>
            </article>
            <aside className="home">
            {randomNumbers().map((rand) => (
                <Items
                  key={rand}
                  name={articles[rand].name}
                  picture={articles[rand].picture}
                  price={articles[rand].price}
                  url={articles[rand].url}
                />
              ))}
            </aside>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
