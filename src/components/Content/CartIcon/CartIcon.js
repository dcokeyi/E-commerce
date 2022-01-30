import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'
import CartContext from '../../../Context/cart-context'

import './cart-icon.styles.scss'

const CartIcon = () => {
    const ctx = useContext(CartContext);

    const numberOfCartItems = ctx.items.length

    return <div onClick={ctx.onShow} className='cart-icon'> 
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{numberOfCartItems}</span>
    </div>
}

export default CartIcon;