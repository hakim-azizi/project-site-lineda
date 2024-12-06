import React, { useContext } from 'react';
import { ProductContext,HomeProps } from '../contexts/ProductProvider';
import Items, { ItemsProps } from '../component/Items';
import { ArticlesProps, FormSearch } from '../component/FormSearch';
import '../style/home.css';

const Home: React.FC = () => {
  const context = useContext(ProductContext);
  if (!context) {
    return <p>Chargement des données...</p>;
  }

  const { content, isLoading, error } = context;

  if (error) {
    return (
      <p className='red-color'>
        Une Erreur s'est produite lors du chargement des données
      </p>
    );
  }

  if (isLoading || !content.items.length) {
    return <p>Chargement des données...</p>;
  }

  const randomiser = (max: number) => Math.floor(Math.random() * max);

  const randomNumbers = (action: number) => {
    const numbers: number[] = [];
    while (numbers.length < 10) {
      const randomNumber = Math.floor(Math.random() * action);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  };

  // Typage des données récupérées
  const articles: ArticlesProps[] = content.items;
  const category = content.category[randomiser(content.category.length)];
  const subCategory = content.subCategory[randomiser(content.subCategory.length)];
  const homePage : HomeProps[] = content.home;

  console.log('homePage => ',homePage)

  return (
    <div>
      <header>
        <h1 className='center'>{homePage[0].sitename}</h1>
      </header>
      <img
        className='visual'
        src='asset/pictures/834e550a-baa2-490b-bbbb-50e3653674a3.jpg'
        alt=''
      />
      <main>
        <section>
          <h2>{homePage[0].subtitle}</h2>
          <p>{homePage[0].description}</p>
          <p>Voici une présentation de quelques articles</p>
          <aside className='home'>
            {randomNumbers(content.items.length).map((rand) => {
              // Extraction des propriétés nécessaires pour Items
              const { name, picture, price, url }: ItemsProps = articles[rand];
              return (
                <Items
                  key={rand}
                  name={name}
                  picture={picture}
                  price={price}
                  url={url}
                />
              );
            })}
          </aside>
        </section>
        <section>
          <h2>{category.name}</h2>
          <article>
            <p>{category.description}</p>
          </article>
          <aside className='home'>
            {randomNumbers(content.items.length).map((rand) => {
              const { name, picture, price, url }: ItemsProps = articles[rand];
              return (
                <Items
                  key={rand}
                  name={name}
                  picture={picture}
                  price={price}
                  url={url}
                />
              );
            })}
          </aside>
        </section>
        <section>
          <article>
            <h2>{subCategory.name}</h2>
            <p>{subCategory.description}</p>
          </article>
          <aside className='home'>
            {randomNumbers(content.items.length).map((rand) => {
              const { name, picture, price, url }: ItemsProps = articles[rand];
              return (
                <Items
                  key={rand}
                  name={name}
                  picture={picture}
                  price={price}
                  url={url}
                />
              );
            })}
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Home;
