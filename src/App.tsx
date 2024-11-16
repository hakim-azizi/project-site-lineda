import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Menu from './component/Menu';

import './App.css';

function App() {
	// Référence pour accéder au bouton
	const [openMenu,setOpenMenu]=useState<number>(0);
	const [screenWidth,setScreenWidth]=useState<number>(0);
	const menuRef=useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const alignmentRef=useRef<HTMLDivElement>(null);

	const menu = (event: React.MouseEvent<HTMLButtonElement>) => { 
		const button = buttonRef.current; // Référence au bouton
		if (button) {
			// Bascule la classe et l'attribut `aria-expanded`
				button.classList.toggle('opened');
				button.setAttribute('aria-expanded', button.classList.contains('opened').toString());
			}
			if(menuRef.current){
			if (openMenu === 0) {
				setOpenMenu(1);
				menuRef.current.style.width = `${15.625}rem`;
			  } else {
				setOpenMenu(0);
				menuRef.current.style.width = "0";
		}
		}
	}
	
	useEffect(() => {
		
		function handleResize() {
			setScreenWidth(window.innerWidth);
			if (menuRef.current) {
				console.log(screenWidth)
		  if(screenWidth > 800) {
			
				menuRef.current.style.width = `${15.625}rem`;
			
		  } else {
			if (openMenu === 1) {
								menuRef.current.style.width = `${15.625}rem`;
			  } else {
								menuRef.current.style.width = "0";
		}
					  }
					}
		}
	  
		// Ajoute un écouteur de redimensionnement
		window.addEventListener('resize', handleResize);
	  
		// Nettoyage de l'écouteur d'événement
	
	  }, [openMenu, screenWidth]); // Ajout de dépendances

	return (
		<>
			<Navbar menu={menu} buttonRef={buttonRef} />
			<div className='alignment' ref={alignmentRef}>
				<Menu menuRef={menuRef} />
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;