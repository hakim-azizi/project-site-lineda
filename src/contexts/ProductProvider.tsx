import React, { createContext, useEffect, useState, ReactNode } from "react";

export type ItemProps = {
  name: string;
  price: number;
  description: string;
  category: string;
  subcategory: string;
  picture: string;
  url: string;
};

export type CategoryProps = {
  id: string;
  name: string;
  description: string;
};

export type subCategoryProps = {
  id:string;
  name: string;
  category: string;
  description: string;
};

export type ProductContextType = {
  content: {
    items: ItemProps[];
    category: CategoryProps[];
    subCategory: subCategoryProps[];
  };
  isLoading: boolean;
  error: boolean
  
};

export type ProductProviderProps = {
  children: ReactNode;
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [error,setError]=useState<ProductContextType["error"]>(false);
  const[isLoading, setIsLoading]=useState<ProductContextType["isLoading"]>(false);
  const [content, setContent] = useState<ProductContextType["content"]>({
    items: [],
    category: [],
    subCategory: []
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/products.json")
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
