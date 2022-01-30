import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from "../Content/CartIcon/CartIcon"
import CartDropdown from "../Cart/CartDropdown/CartDropdown";
import CartContext from "../../Context/cart-context";

const Header = () => {
    const ctx = useContext(CartContext);

    return (
        <div className="header">
            <NavLink className='logo-container' to="/">
                <Logo className="logo" />
            </NavLink>
            <div className="options">
                <NavLink className='option' to='/shop'>Shop</NavLink>
                <NavLink className='option' to='/contact'>Contact</NavLink>
                <NavLink className='option' to='/signin'>SignIn</NavLink>
                <CartIcon/>
            </div>
            {ctx.isShowing && <CartDropdown/>}
        </div>);
}

export default Header;