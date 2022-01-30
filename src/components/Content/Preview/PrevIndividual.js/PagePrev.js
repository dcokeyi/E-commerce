import CollectionItem from '../../Collection-item/collectionItem';

// import '../collection-preview.styles.scss'

const PagePrev = ({ title, items}) => {
   
    return <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}/>
                ))}
        </div>
    </div>
}

export default PagePrev;