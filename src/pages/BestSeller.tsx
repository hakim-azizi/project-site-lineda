import Items from "../component/Items";
import { ItemsProps } from "../component/Items";

function BestSeller(){
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

    return <>
    		<div>
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
			</div>
    </>;
}
export default BestSeller;