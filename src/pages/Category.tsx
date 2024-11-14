import Items from "../component/Items";
import { ItemsProps } from "../component/Items";

import '../style/home.css';

function Category(){

	const articles:ItemsProps[]=[
		{
			name:'A',
			picture:'../asset/photo/photo-article1.jpg',
			price:50,
			url:'subcategory/item'
		},
		{
			name:'B',
			picture:'../asset/photo/photo-article2.jpg',
			price:46,
			url:'subcategory/item'
		},
		{
			name:'C',
			picture:'../asset/photo/photo-article3.jpg',
			price:58,
			url:'subcategory/item'
		},
		{
			name:'D',
			picture:'../asset/photo/photo-article4.jpg',
			price:95,
			url:'subcategory/item'
		},
		{
			name:'E',
			picture:'../asset/photo/photo-article5.jpg',
			price:38,
			url:'subcategory/item'
		},
		{
			name:'F',
			picture:'../asset/photo/photo-article6.jpg',
			price:55,
			url:'subcategory/item'
		},
		{
			name:'G',
			picture:'../asset/photo/photo-article7.jpg',
			price:40,
			url:'subcategory/item'
		},
		{
			name:'H',
			picture:'../asset/photo/photo-article8.jpg',
			price:35,
			url:'subcategory/item'
		},
		{
			name:'I',
			picture:'../asset/photo/photo-article9.jpg',
			price:63,
			url:'subcategory/item'
		},
		{
			name:'J',
			picture:'../asset/photo/photo-article10.jpg',
			price:57,
			url:'subcategory/item'
		}
	];

    const category:any=[
		{
			name:'Robe',
			description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nisi explicabo dignissimos ad, ipsa sequi? Omnis et id ratione accusantium, amet ipsa nobis praesentium ex a itaque esse vel labore?'
		}
	];

    return <>
                    <div>
                    <header>
                        <h1 className='center'>Titre du site</h1>
                    </header>
                    <main>
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
                    </main>
                </div>
</>;
}
export default Category;