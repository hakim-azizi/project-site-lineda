import React, { createContext, useEffect, useState, useRef, ReactNode } from 'react';
import { ItemProps } from '../pages/Item';
import { useNavigate } from 'react-router-dom';
import { Verif } from '../component/LibraryOfFunctions';

export type QuantityProps = {
	id: string;
	quantity: number;
};

export type ProductType = {
	id: string;
	name: string;
	price: number;
	quantity: number;
	color: string;
	picture: string;
	verif: string; // Ajout du champ "verif"
};

export type CartContextType = {
	cart: ProductType[];
	addToCart: (product: ProductType) => void;
	removeFromCart: (id: string) => void;
	updateQuantity: (id: string, quantity: number) => void;
	total: number;
	setTotal: React.Dispatch<React.SetStateAction<number>>;
	selectQuantity: (product: QuantityProps) => void;
	quantityRef: React.MutableRefObject<HTMLSelectElement | null>;
	validCartRef: React.MutableRefObject<HTMLDivElement | null>;
	addToCartHandler: (e: React.FormEvent, article: ItemProps) => void;
	val: (article: ItemProps) => void;
	singularPlural: string;
	price: number;
	options: JSX.Element[];
	closeAddCart: () => void;
	navigateToCart: () => void;
	objectDataUrl: string;
};

const defaultContext: CartContextType = {
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
	updateQuantity: () => {},
	total: 0,
	setTotal: () => {},
	selectQuantity: () => {},
	quantityRef: { current: null },
	validCartRef: { current: null },
	addToCartHandler: () => {},
	val: () => {},
	singularPlural: "de l'article",
	price: 0,
	options: [],
	closeAddCart: () => {},
	navigateToCart: () => {},
	objectDataUrl: '',
};

export const CartContext = createContext<CartContextType>(defaultContext);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const quantityRef = useRef<HTMLSelectElement | null>(null);
	const validCartRef = useRef<HTMLDivElement | null>(null);
	const [cart, setCart] = useState<ProductType[]>([]);
	const [total, setTotal] = useState(0);
	const [singularPlural, setSingularPlural] = useState<string>("de l'article");
	const [price, setPrice] = useState<number>(0);
	const [objectDataUrl, setObjectDataUrl] = useState<string>('');
	const navigate = useNavigate();

	useEffect(() => {
		const savedCart = localStorage.getItem('cart');
		if (savedCart) {
			const parsedCart = JSON.parse(savedCart);
			if (Array.isArray(parsedCart) && parsedCart.length > 0) {
				setCart(parsedCart);
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
		const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
		setTotal(newTotal);
	}, [cart]);

	const addToCart = (product: ProductType) => {
		const { value: verif } = Verif();
		setCart((prevCart) => {
			const existingProduct = prevCart.find((item) => item.id === product.id);
			if (existingProduct) {
				return prevCart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + product.quantity }
						: item
				);
			}
			return [...prevCart, { ...product, verif }];
		});
	};

	const removeFromCart = (id: string) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== id));
	};

	const updateQuantity = (id: string, quantity: number) => {
		setCart((prevCart) =>
			prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
		);
	};

	const selectQuantity = (product: QuantityProps) => {
		setCart((prevCart) =>
			prevCart.map((item) =>
				item.id === product.id ? { ...item, quantity: product.quantity } : item
			)
		);
	};

	const val = (article: ItemProps) => {
		if (quantityRef.current) {
			const quantity = parseInt(quantityRef.current.value);
			setSingularPlural(quantity > 1 ? 'des articles' : "de l'article");
			setPrice(article.price * quantity);
		}
	};

	const addToCartHandler = (e: React.FormEvent, article: ItemProps) => {
		e.preventDefault();
		if (!quantityRef.current) return;

		const quantity = Number(quantityRef.current.value);
		const { value: verif } = Verif();
		const product = {
			id: article.id,
			name: article.name,
			price: article.price,
			quantity,
			color: article.color || 'default',
			picture: article.picture,
			verif, // Ajout du champ "verif" ici aussi
		};

		addToCart(product);
		const url = `${process.env.REACT_APP_API_URL}/add-cart-object.php?name=${article.name}&price=${article.price}&quantity=${quantity}`;
		setObjectDataUrl(url);

		if (validCartRef.current) {
			validCartRef.current.style.display = 'flex';
		}
	};

	const closeAddCart = () => {
		if (validCartRef.current) {
			validCartRef.current.style.display = 'none';
		}
	};

	const navigateToCart = () => {
		navigate('../../cart');
	};

	const options = Array.from({ length: 10 }, (_, i) => (
		<option key={i} value={i + 1}>
			{i + 1}
		</option>
	));

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				updateQuantity,
				total,
				setTotal,
				selectQuantity,
				quantityRef,
				validCartRef,
				addToCartHandler,
				val,
				singularPlural,
				price,
				options,
				closeAddCart,
				navigateToCart,
				objectDataUrl,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
