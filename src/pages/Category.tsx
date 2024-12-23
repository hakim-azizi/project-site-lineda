import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { Item } from './Item';
import { CategoryItems ,ArticleProp, catProps } from '../component/CategoryItems';

export const Category: React.FC = () => {
	const context = useContext(ProductContext);
	const location = useLocation().pathname;
	const redirect=useNavigate();
	const verif = location.split('/').filter((e) => e);

		const navigate = useNavigate();

			if (!context) {
				return <p>Chargement des données...</p>;
		}

		const { content, isLoading, error } = context;

		if(error) return <p className='red-color'>Une Erreur c'est produite lors du chargement des données</p>

  if (isLoading || !content.items.length)  return <p>Chargement des données...</p>;
  
   // Récupération des données
  const articles: ArticleProp[] = content.items;
  const category: catProps[] = content.category
  const subCategory : catProps[] = content.subCategory;

  if(verif.length===1){
    const filteredCategory = category.filter(
      (cat) => cat.name.toLowerCase() === verif[0]
    );
  
    if (filteredCategory.length === 0) {
      // Rediriger vers la page 404 si aucune categorie n'est trouvé
			navigate('/404');
			return null; 
			}

			return <CategoryItems category={filteredCategory} articles={articles} />
		}
		else if(verif.length===2){
			const filteredsubCategory = subCategory.filter(
				(sub) =>sub.category.toLowerCase() === verif[0] && sub.name.toLowerCase() === verif[1]
			);

			if (filteredsubCategory.length === 0) {
				// Rediriger vers la page 404 si aucune categorie n'est trouvé
      navigate('/404');
      return null; 
    }

     return <CategoryItems category={filteredsubCategory} articles={articles} />
    }

  else if(verif.length===3){
    const filteredarticle = articles.filter(
      (article) =>article.category.toLowerCase() === verif[0] && article.subcategory.toLowerCase() === verif[1] && article.name.toLowerCase() === verif[2]
    );
  
    if (filteredarticle.length === 0) {
      // Rediriger vers la page 404 si aucune categorie n'est trouvé
				navigate('/404');
				return null; 
			}
			return <><Item articles={articles} /></>

}else{ 
	redirect('404');
		return null; 
	}

}
