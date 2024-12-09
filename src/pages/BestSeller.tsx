import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Items, {ItemsProps} from '../component/Items';

const BestSeller: React.FC = () => {
	const [articles,setArticles]=useState<ItemsProps[]>([])
 
    const data:any=useLoaderData();
   

    useEffect(() => {
        
        
		setArticles(data.best_seller);
       
    }, [data.best_seller]);

if(articles.length!==10){return <div>chargement en cours ...</div>}
   

    return <>
		<header>
			<h1 className='center'>Top vente</h1>
			</header>
		<main>
				<section>
					<h2>Nos meilleurs vente</h2>
					<p>Retrouvez le top 10 des meilleurs vente :</p>
                    <aside>
{articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}
							</aside>
				</section>
		</main>
			
    </>;
}
export default BestSeller;