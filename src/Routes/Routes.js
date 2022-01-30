import {Routes, Route} from 'react-router-dom'

import SignIn from '../components/Content/SignPage/Signin'
import HomePage from "../components/Content/Homepage/HomePage";
import ShopPage from "../components/Content/ShopPage/ShopPage";
import Contact from '../components/Content/Contact/Contact'
import Hats from '../components/Content/Sections/Hats';
import Sneakers from '../components/Content/Sections/Sneaker';
import Jackets from '../components/Content/Sections/Jacket';
import Mens from '../components/Content/Sections/Mens';
import Checkout from '../components/Content/Checkout/checkout';


const AppRoutes = () => {
    return  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/shop" element={<ShopPage />} />
    <Route path="shop/hats"  element={<Hats/>}/>
    <Route path="shop/sneakers"  element={<Sneakers/>}/>
    <Route path="shop/jackets"  element={<Jackets/>}/>
    <Route path="shop/mens"  element={<Mens/>}/>
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/signin" element={<SignIn />} />
    <Route exact path="/checkout" element={<Checkout />} />
</Routes>
}

export default AppRoutes