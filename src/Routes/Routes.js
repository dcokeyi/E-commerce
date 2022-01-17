import {Routes, Route} from 'react-router-dom'

import SignIn from '../components/Content/SignPage/Signin'
import HomePage from "../components/Content/Homepage/HomePage";
import ShopPage from "../components/Content/ShopPage/ShopPage";
import Contact from '../components/Content/Contact/Contact'
import Hats from '../components/Content/Sections/Hats';


const AppRoutes = () => {
    return  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route exact path="/shop" element={<ShopPage />} />
    <Route exact path="/hats"  element={<Hats/>}/>
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/signin" element={<SignIn />} />
</Routes>
}

export default AppRoutes