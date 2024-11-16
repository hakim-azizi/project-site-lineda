import { NavLink } from "react-router-dom";

import '../style/menu.css';

export interface ElementProps {
	menuRef: React.RefObject<HTMLDivElement>;
	};

	function Menu( {menuRef }: ElementProps ){

return <>
<header 
className='menu'
ref={menuRef}>

<ul> 
	<li><NavLink to='best-seller'>Top-vente</NavLink></li>
	<li><NavLink to='list'>Catalogue</NavLink></li>
	<li><NavLink to='category'>Categorie</NavLink>
		<ul>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
		</ul>
	</li>
	<li><NavLink to='category'>Categorie</NavLink>
		<ul>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
		</ul>
	</li>
	<li><NavLink to='category'>Categorie</NavLink>
		<ul>
			<li><NavLink to='category/subcategory'>Sous-categorie</NavLink></li>
		</ul>
	</li>
	<li>En savoir plus
		<ul>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
			<li><NavLink to='learn-more/keyword'>Mot clé</NavLink></li>
		</ul>
	</li>
	<li>Condition de vente</li>
</ul>
</header>
</>;
};
export default Menu;
