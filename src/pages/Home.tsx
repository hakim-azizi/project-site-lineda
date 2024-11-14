import Items from "../component/Items";
import { ItemsProps } from "../component/Items";

import '../style/home.css';

function Home(){

	const articles:ItemsProps[]=[
		{
			name:'A',
			picture:'asset/photo/photo-article1.jpg',
			price:50,
			url:'category/subcategory/item'
		},
		{
			name:'B',
			picture:'asset/photo/photo-article2.jpg',
			price:46,
			url:'category/subcategory/item'
		},
		{
			name:'C',
			picture:'asset/photo/photo-article3.jpg',
			price:58,
			url:'category/subcategory/item'
		},
		{
			name:'D',
			picture:'asset/photo/photo-article4.jpg',
			price:95,
			url:'category/subcategory/item'
		},
		{
			name:'E',
			picture:'asset/photo/photo-article5.jpg',
			price:38,
			url:'category/subcategory/item'
		},
		{
			name:'F',
			picture:'asset/photo/photo-article6.jpg',
			price:55,
			url:'category/subcategory/item'
		},
		{
			name:'G',
			picture:'asset/photo/photo-article7.jpg',
			price:40,
			url:'category/subcategory/item'
		},
		{
			name:'H',
			picture:'asset/photo/photo-article8.jpg',
			price:35,
			url:'category/subcategory/item'
		},
		{
			name:'I',
			picture:'asset/photo/photo-article9.jpg',
			price:63,
			url:'category/subcategory/item'
		},
		{
			name:'J',
			picture:'asset/photo/photo-article10.jpg',
			price:57,
			url:'category/subcategory/item'
		}
	];

	const category:any=[
		{
			name:'Robe',
			description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nisi explicabo dignissimos ad, ipsa sequi? Omnis et id ratione accusantium, amet ipsa nobis praesentium ex a itaque esse vel labore?'
		}
	];

	const subCategory:any=[
		{
			name:'Robe orientale',
			description:'Dolor sit amet consectetur adipisicing elit. Quo nisi explicabo dignissimos ad, ipsa sequi? Omnis et id ratione accusantium, amet ipsa nobis praesentium ex a itaque esse vel labore.'
		}
	];

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
				<h2>{category[0].name}</h2>
				<article>
					<p>
					{category[0].description}
					</p>
				</article>
				<aside className='home'>
				{articles.map((article)=><Items key={article.name} name={article.name} picture={article.picture} price={article.price} url={article.url} />)}
				</aside>
			</section>
			<section>
				<article>
				<h2>{subCategory[0].name}</h2>
					<p>
					{subCategory[0].description}
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
