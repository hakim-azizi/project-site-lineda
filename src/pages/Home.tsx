import { useLoaderData } from "react-router-dom";

import Items from "../component/Items";
import { ItemsProps } from "../component/Items";

import '../style/home.css';

function Home(){
	const data:any = [useLoaderData()];
	
	const articles:ItemsProps[]=data[0].items;

	const category:any=data[0].category[0]

	const subCategory:any=data[0].subcategory[0];

		return <>
			<div>
		<header>
			<h1 className='center'>LINEDA V&ecirc;tements</h1>
		</header>
		<img className='visual' src='asset/pictures/834e550a-baa2-490b-bbbb-50e3653674a3.jpg' alt='' />
		<main>
			<section>
			<h2>Sous-titre</h2>
			<p>Voici une présentation de quelques articles</p>
			<aside className='home'>
{articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}
							</aside>
			</section>
			<section>
				<h2>{category.name}</h2>
				<article>
					<p>
					{category.description}
					</p>
				</article>
				<aside className='home'>
				{articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}
				</aside>
			</section>
			<section>
				<article>
				<h2>{subCategory.name}</h2>
					<p>
					{subCategory.description}
					</p>
				</article>
				<aside className='home'>
				{articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}
				</aside>
			</section>
		</main>
		</div>
			</>
};
export default Home;
