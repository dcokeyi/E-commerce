import { useContext } from 'react';
import CartContext from '../../../Context/cart-context';
import CustomButton from '../../Layout/CustomButton/Button';

import './collection-item.styles.scss'

const CollectionItem = (item) => {
    const cartCtx = useContext(CartContext);

    const { name, price, imageUrl } = item;
    // console.log(item);

    const add = () => {
        cartCtx.addItems(item)
        console.log(cartCtx.items)
    }

    return <div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={add} inverted> Add to Cart</CustomButton>
    </div>
}

export default CollectionItem;