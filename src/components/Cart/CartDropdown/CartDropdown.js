import CustomButton from '../../Layout/CustomButton/Button'
import './cart-dropdown.styles.scss'
import CartItem from '../Cart-item/CartItem'
import { useContext } from 'react'
import CartContext from '../../../Context/cart-context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const cartCtx = useContext(CartContext);

    const navigate = useNavigate()

    const changePage = () => {
        navigate('/checkout')
        cartCtx.onShowRemove()
    }

    // console.log(cartCtx.items)

    const list = cartCtx.items.map((item) => (<CartItem
        key={item.id}
        name={item.name}
        imageUrl={item.imageUrl}
        price={item.price}
    />
    ))
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartCtx.items.length ? {list} : (<span className='empty-message'>Your cart is empty</span>)}
        </div>
        <CustomButton onClick={changePage}>GO TO CHECKOUT</CustomButton>
    </div>
}

export default CartDropdown;