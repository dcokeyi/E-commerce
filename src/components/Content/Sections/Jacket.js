import SHOP_DATA from '../ShopPage/shop.data';
import PagePrev from '../Preview/PrevIndividual.js/PagePrev';


const Jackets = () => {
    const data = SHOP_DATA.filter((i) => { return i.title === "Jackets" });

    return data.map(({ id, ...otherProps }) => (
            <PagePrev key={id} {...otherProps} />
        ))
    


}

export default Jackets;
