import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductProvider';
import { NavLink } from 'react-router-dom';

import '../style/menu.css';

type Keyword = {
	name: string;
  };

export type ElementProps = {
	menuRef: React.RefObject<HTMLDivElement>;
	};

	function Menu( {menuRef }: ElementProps ){
		const [keyword,setKeyword] = useState<Keyword[]>([]);
		useEffect(() => {
			fetch(`${process.env.REACT_APP_API_URL}/api.php?api=keywords`)
			.then((response) => response.json())
			.then((data) => {
			  setKeyword(data.keywords);
			})
			.catch((err) => {
				console.error('Error fetching keywords:', err);
			});
		}, []);
		const context = useContext(ProductContext);
		
		if (!context) {
		  return <p>Chargement des données...</p>;
		}
const { content } = context;		
return <>
<header 
className='menu'
ref={menuRef}>

<ul> 
	<li><NavLink to='search'>Recherche</NavLink></li>
	<li><NavLink to='best-seller'>Top-vente</NavLink></li>
	<li><NavLink to='list'>Catalogue</NavLink></li>
		     {content.category.map((cat) => (
	<li key={cat.id}><NavLink to={cat.name.toLowerCase()}>{cat.name}</NavLink>
		<ul>
		{content.subCategory.map((sub) => (
			sub.category===cat.name && (<li key={sub.id}><NavLink to={`${cat.name.toLowerCase()}/${sub.name.toLowerCase()}`}>{sub.name}</NavLink></li>)
		))}
		</ul>
	</li>
	      ))}
	<li>En savoir plus
		<ul>
		{keyword.map((key) => (
			<li key={key.name}><NavLink to={`learn-more/${key.name}`}>{key.name}</NavLink></li>
		))}
		</ul>
	</li>
	<li><NavLink to='condition-of-sale' target='_blank'>Condition de vente</NavLink></li>
</ul>
</header>
</>;
};
export default Menu;
