import { NavLink } from 'react-router-dom';

import '../style/navbar.css';

export interface MenuProps {
    menu: (event: React.MouseEvent<HTMLButtonElement>) => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
  };

const Navbar: React.FC<MenuProps> = ({ menu,buttonRef }) => {
 
	return <>
		<header className='navbar'>
		<button
                ref={buttonRef}
                className="show"
                onClick={menu}
                aria-label="Main Menu"
            >
			<svg width="2.5rem" height="2.5rem" viewBox="0 0 100 100">
				<path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
				<path className="line line2" d="M 20,50 H 80" />
				<path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
			</svg>
			</button>
	<NavLink to='./'><picture className='hidden'><img src='../asset/pictures/logo.jpg' alt='lien vers l&apos;Accueil' title='accueil' /></picture></NavLink>
	<ul>
		<li className='show'><NavLink to='./'><img src='../asset/pictures/home.png' alt='aller sur la page d&apos;accueil' title='Page d&apos;accueil' /></NavLink></li>
		<li><img src='../asset/pictures/account.png' alt='Se connecter' title='Connexion' /></li>
		<li><NavLink to='contact'><img src='../asset/pictures/contact.png' alt='Nous contacter' title='Contact' /></NavLink></li>
		<li><img src='../asset/pictures/cart.png' alt='Ouvrir le panier' title='panier' /></li>
	</ul>
	</header>
	{ /* <ul className='cart'>
		<li>Votre panier est vide</li>
	</ul> */}
	</>;
};
export default Navbar;
