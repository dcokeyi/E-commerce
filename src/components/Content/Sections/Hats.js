import SHOP_DATA from '../ShopPage/shop.data';
import PagePrev from '../Preview/PrevIndividual.js/PagePrev';


const Hats = () => {
    const data = SHOP_DATA.filter((i) => { return i.title === "Hats" });

    return data.map(({ id, ...otherProps }) => (
        <PagePrev key={id} {...otherProps} />
    ))



}

export default Hats;
