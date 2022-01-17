import SHOP_DATA from '../ShopPage/shop.data';
import CollectionItem from '../Collection-item/collectionItem';
import '../Collection-item/collection-item.styles.scss'

const Hats = () => {
    const data = SHOP_DATA.filter( (i) => { return i.title == "Hats"});

    return <div className="collection-preview">
        {/* <h1 className="title">{data.toUpperCase()}</h1> */}
        <div className="preview">
            {data.map(({id, ...otherProps}) => (
                    <CollectionItem key={id} {...otherProps} />
                ))}
        </div>
    </div>
}

export default Hats;
