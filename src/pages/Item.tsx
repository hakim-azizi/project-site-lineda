import Items from "../component/Items";
import { ItemsProps } from "../component/Items";

import '../style/item.css'
import '../style/form.css'

function Item(){
    const articles:ItemsProps[]=[
		{
			name:'A',
			picture:'../../asset/photo/photo-article1.jpg',
			price:50,
			url:''
		},
		{
			name:'B',
			picture:'../asset/photo/photo-article2.jpg',
			price:46,
			url:'item'
		},
		{
			name:'C',
			picture:'../asset/photo/photo-article3.jpg',
			price:58,
			url:'item'
		},
		{
			name:'D',
			picture:'../asset/photo/photo-article4.jpg',
			price:95,
			url:'item'
		},
		{
			name:'E',
			picture:'../asset/photo/photo-article5.jpg',
			price:38,
			url:'item'
		},
		{
			name:'F',
			picture:'../asset/photo/photo-article6.jpg',
			price:55,
			url:'item'
		},
		{
			name:'G',
			picture:'../asset/photo/photo-article7.jpg',
			price:40,
			url:'item'
		},
		{
			name:'H',
			picture:'../asset/photo/photo-article8.jpg',
			price:35,
			url:'item'
		},
		{
			name:'I',
			picture:'../asset/photo/photo-article9.jpg',
			price:63,
			url:'item'
		},
		{
			name:'J',
			picture:'../asset/photo/photo-article10.jpg',
			price:57,
			url:'item'
		}
	];
const val=()=>{console.log('la valeur à changer')};

    return <>
        		<div>
		<header>
			<h1  className='center'>{articles[0].name}</h1>
		</header>
		<main>
			<section>
				<h2>{articles[0].name}</h2>
				<aside className='picture'>
                <Items name={articles[0].name} picture={articles[0].picture} price={articles[0].price} url={articles[0].url} />
				</aside>
				<article>
					<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nisi explicabo dignissimos ad, ipsa sequi? Omnis et id ratione accusantium, amet ipsa nobis praesentium ex a itaque esse vel labore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione similique mollitia hic, dolorum ut quis iusto. Eaque repudiandae accusamus error maxime ipsa tenetur quas, dolorum eveniet, iure dolores eius quod.
					</p>
					<form action='' method='get' id='cart'>
						<p>
							Nom de l'article : {articles[0].name}.
							<input type='hidden' name='id-article' value='1' id='id-article' />
						</p>
						<label>Quantité :
							<select name='quantity' id='quantity' onChange={val} required>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
								<option value='6'>6</option>
								<option value='7'>7</option>
								<option value='8'>8</option>
								<option value='9'>9</option>
								<option value='10'>10</option>
							</select>
						</label>
						<p>
							Prix : <span className='red-color'>10 &euro;</span>
							<input type='hidden' name='price' id='price' value='10' />
						</p>
						<p>
							<span id='singular'>Prix de l'article</span> : <span className='red-color' id='price-items'>10 &euro;</span>
						</p>
						<button type='submit'>Ajouter au panier</button>
					</form>
				</article>
			</section>
		</main>
			</div>
    </>;
}
export default Item;