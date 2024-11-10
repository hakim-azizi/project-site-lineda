import Item from "../component/Item";
import { ItemProps } from "../component/Item";

import '../style/home.css';

function Home(){

	const articles:ItemProps[]=[
		{
			name:'A',
			picture:'photo-article1.jpg',
			price:50
		},
		{
			name:'B',
			picture:'photo-article2.jpg',
			price:46
		},
		{
			name:'C',
			picture:'photo-article3.jpg',
			price:58
		},
		{
			name:'D',
			picture:'photo-article4.jpg',
			price:95
		},
		{
			name:'E',
			picture:'photo-article5.jpg',
			price:38
		},
		{
			name:'F',
			picture:'photo-article6.jpg',
			price:55
		},
		{
			name:'G',
			picture:'photo-article7.jpg',
			price:40
		},
		{
			name:'H',
			picture:'photo-article8.jpg',
			price:35
		},
		{
			name:'I',
			picture:'photo-article9.jpg',
			price:63
		},
		{
			name:'J',
			picture:'photo-article10.jpg',
			price:57
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

				<Item name={articles[0].name} picture={articles[0].picture} price={articles[0].price} />
				<Item name={articles[1].name} picture={articles[1].picture} price={articles[1].price} />
				<Item name={articles[2].name} picture={articles[2].picture} price={articles[2].price} />
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
					<Item name={articles[3].name} picture={articles[4].picture} price={articles[3].price} />
					<Item name={articles[4].name} picture={articles[5].picture} price={articles[4].price} />
					<Item name={articles[5].name} picture={articles[0].picture} price={articles[5].price} />
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
					<Item name={articles[6].name} picture={articles[6].picture} price={articles[6].price} />
					<Item name={articles[7].name} picture={articles[7].picture} price={articles[7].price} />
					<Item name={articles[8].name} picture={articles[8].picture} price={articles[8].price} />
				</aside>
			</section>
		</main>
		</div>
			</>
};
export default Home;
