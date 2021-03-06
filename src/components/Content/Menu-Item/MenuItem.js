import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate()

    const changePage = () => {
        navigate(linkUrl)
    }
    return <div className={`${size} menu-item`} onClick={changePage}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
}

export default MenuItem;