import { NavLink } from 'react-router-dom';
import '../style/items.css';

export type ItemsProps = {
  name: string;
  picture: string;
  price:number;
  url:string;
};

export const Items: React.FC<ItemsProps> = ({ name,picture,price,url }) => {
    return <>
    <figure><figcaption>{name}<br /><span className='red-color'>{`${price}`} &euro;</span></figcaption><NavLink to={`../../${url}`}><img src={`../../${picture}`} alt='' /></NavLink></figure>
	</>;
};
