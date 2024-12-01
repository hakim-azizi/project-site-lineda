import React from 'react';
import Items from './Items';

export type ArticleProp = {
    id:string,
    name: string,
    price: number,
    description: string,
    category: string,
    subcategory: string,
    picture: string,
    url: string,
    color:string
};

export type catProps = {
    name: string,
    category: string,
    description: string
};

type CategoryItemsProps = {
    category: catProps[];
    articles: ArticleProp[];
};

const CategoryItems: React.FC<CategoryItemsProps> = ({ category, articles }) => {
    console.log('category => ',category)
    return (
        <div>
            <header>                
                <h1 className='center'>{category[0].name}</h1>
            </header>
            <main>
                <section>
                    <h2>{category[0].name}</h2>
                    <article>
                        <p>{category[0].description}</p>
                    </article>
                    <aside className='home'>
                        {articles.map((article) => (
                            <Items
                                key={article.name}
                                name={article.name}
                                picture={article.picture}
                                price={article.price}
                                url={article.url}
                            />
                        ))}
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default CategoryItems;
