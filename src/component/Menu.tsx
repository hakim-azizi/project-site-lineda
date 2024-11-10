import { NavLink } from "react-router-dom";

import '../style/menu.css';

function Menu(){
return <>
<header className='menu'>
<ul>
    <li><NavLink to='best-seller'>Top-vente</NavLink></li>
    <li><NavLink to='list'>Catalogue</NavLink></li>
    <li><NavLink to='category'>Categorie</NavLink>
        <ul>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
        </ul>
    </li>
    <li><NavLink to='category'>Categorie</NavLink>
        <ul>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
        </ul>
    </li>
    <li><NavLink to='category'>Categorie</NavLink>
        <ul>
            <li><NavLink to='subcategory'>Sous-categorie</NavLink></li>
        </ul>
    </li>
    <li>En savoir plus
        <ul>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
            <li><NavLink to='keyword'>Mot clé</NavLink></li>
        </ul>
    </li>
    <li>Condition de vente</li>
</ul>
</header>
</>;
};
export default Menu;