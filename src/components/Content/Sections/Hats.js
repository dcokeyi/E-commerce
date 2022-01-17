import SHOP_DATA from '../ShopPage/shop.data';
import CollectionItem from '../Collection-item/collectionItem';
import '../Collection-item/collection-item.styles.scss'

const Hats = (items) => {
    return <div className="collection-preview">
        <h1 className="title">{items.title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4)
                .map(({ id, ...itemProps }) => (
                    <CollectionItem key={id} {...itemProps} />
                ))}
        </div>
    </div>
}

export default Hats;