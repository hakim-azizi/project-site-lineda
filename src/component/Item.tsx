import '../style/item.css';

export interface ItemProps {
  name: string;
  picture: string;
  price:number;
};

const Item: React.FC<ItemProps> = ({ picture,price,name }) => {
    return <>
    <figure><figcaption>{name}<br /><span className='red-color'>{`${price}`} &euro;</span></figcaption><a href='item.html'><img src={`asset/photo/${picture}`} alt='' /></a></figure>
	</>;
};
export default Item;