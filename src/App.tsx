import { Outlet } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { ProductProvider } from "./contexts/ProductProvider"; // Importez le ProductProvider
import { CartProvider } from "./contexts/CartContext";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Menu from "./component/Menu";

import "./App.css";

export const App: React.FC = () => {
  // Référence pour accéder au bouton
  const [openMenu, setOpenMenu] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const alignmentRef = useRef<HTMLDivElement>(null);

  const menu = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current; // Référence au bouton
    if (button) {
      // Bascule la classe et l'attribut `aria-expanded`
      button.classList.toggle("opened");
      button.setAttribute("aria-expanded", button.classList.contains("opened").toString());
    }
    if (menuRef.current) {
      if (openMenu === 0) {
        setOpenMenu(1);
        menuRef.current.style.width = `${15.625}rem`;
      } else {
        setOpenMenu(0);
        menuRef.current.style.width = "0";
      }
    }
  };

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      if (menuRef.current) {
        if (screenWidth > 800) {
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
    window.addEventListener("resize", handleResize);

    return () => {
      // Nettoyage de l'écouteur d'événement
      window.removeEventListener("resize", handleResize);
    };
  }, [openMenu, screenWidth]); // Ajout de dépendances

  return (
    <>
    <CartProvider>
      <Navbar menu={menu} buttonRef={buttonRef} />
      <div className="alignment" ref={alignmentRef}>
      <ProductProvider>
        <Menu menuRef={menuRef} />
        {/* <div> */}
            <Outlet />
        {/* </div> */}
        </ProductProvider>
       </div>
       </CartProvider >
      <Footer />
    </>
  );
}

export default App;
