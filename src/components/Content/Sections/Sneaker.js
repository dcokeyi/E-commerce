import SHOP_DATA from '../ShopPage/shop.data';
import PagePrev from '../Preview/PrevIndividual.js/PagePrev';


const Sneakers = () => {
    const data = SHOP_DATA.filter((i) => { return i.title === "Sneakers" });

    return data.map(({ id, ...otherProps }) => (
            <PagePrev key={id} {...otherProps} />
        ))
    


}

export default Sneakers;
