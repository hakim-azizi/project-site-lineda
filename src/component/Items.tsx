import { NavLink } from 'react-router-dom';
import '../style/item.css';

export interface ItemsProps {
  name: string;
  picture: string;
  price:number;
  url:string;
};

const Items: React.FC<ItemsProps> = ({ name,picture,price,url }) => {
    return <>
    <figure><figcaption>{name}<br /><span className='red-color'>{`${price}`} &euro;</span></figcaption><NavLink to={url}><img src={picture} alt='' /></NavLink></figure>
	</>;
};
export default Items;