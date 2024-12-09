import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductProvider';
import Items, {ItemsProps} from '../component/Items';

const List: React.FC = () => {
  const context = useContext(ProductContext);
  
  if (!context) {
    return <p>Chargement des données...</p>;
  }
  
  const { content, isLoading, error } = context;

  if(error) return <p className='red-color'>Une Erreur c'est produite lors du chargement des données</p>

  if (isLoading || !content.items.length)  return <p>Chargement des données...</p>;

  const articles: ItemsProps[] = content.items;

    return <>
        <header>
			<h1 className='center'>Catalogue</h1>
			</header>
		<main>
				<section>
					<h2>Catalogue</h2>
					<p>Retrouvez tous les articles présent dans notre boutique :</p>
					<aside>
                    {articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}</aside>
					<p className='center'>&lt;&lt; précedent - suivant &gt;&gt;</p>
				</section>
		</main>
    </>;
}
export default List;