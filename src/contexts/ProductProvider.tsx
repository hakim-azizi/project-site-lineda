import React, { createContext, useEffect, useState, ReactNode } from 'react';

export type ItemProps = {
	id:string;
	name: string;
	price: number;
	description: string;
	category: string;
	subcategory: string;
	picture: string;
	url: string;
	color:string
};

export type SiteProps = {
	sitename: string;
	description: string;
	subtitle:string
};

export type CategoryProps = {
	id: string;
	name: string;
	description: string;
	category:string
};

export type subCategoryProps = {
	id:string;
	name: string;
	category: string;
	description: string
};

export type ProductContextType = {
	content: {
		items: ItemProps[];
		site: SiteProps[];
		category: CategoryProps[];
		subCategory: subCategoryProps[];
		keywords: ItemProps[];
		best_seller:ItemProps[];
	};
	isLoading: boolean;
	error: boolean

};

export type ProductProviderProps = {
	children: ReactNode;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
	const [error,setError]=useState<ProductContextType['error']>(false);
	const[isLoading, setIsLoading]=useState<ProductContextType['isLoading']>(false);
	const [content, setContent] = useState<ProductContextType['content']>({
		items: [],
		category: [],
		subCategory: [],
		site:[],
		keywords:[],
		best_seller:[]
	});

	useEffect(() => {
		fetch(`https://localhost:3000/api/contents.json`)
		.then((response) => response.json())
		.then((data) => {
			setContent(data);
			setIsLoading(false);
		})
		.catch((err) => {
			setError(err.message);
			setIsLoading(false);
		});
}, []);

	return (
		<ProductContext.Provider value={{ content, isLoading, error }}>
			{children}
		</ProductContext.Provider>
	);
};
