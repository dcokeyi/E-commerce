import Preview from "../Preview/Preview";
import SHOP_DATA from "./shop.data";


const ShopPage = () => {
    return <div className="shop-page">
        {SHOP_DATA.map(({ id, ...otherProps }) => (
        <Preview key={id} {...otherProps} />))
       }
    </div>
}

export default ShopPage;