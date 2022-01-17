import { useNavigate } from 'react-router-dom';
import CollectionItem from '../Collection-item/collectionItem';

import './collection-preview.styles.scss'

const Preview = ({ title, items, routeName }) => {
    const navigate = useNavigate()

    const changePage = () => {
        navigate(`/${routeName}`)
    }

    return <div className="collection-preview">
        <h1 className="title" onClick={changePage}>{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4)
                .map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}/>
                ))}
        </div>
    </div>
}

export default Preview;