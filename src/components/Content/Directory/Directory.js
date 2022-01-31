import { sections } from './directory.data'
import MenuItem from '../Menu-Item/MenuItem';


const Directory = ({ history }) => {

    return (
        <div className='directory-menu'>
            {sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))}
        </div>
    )
}

export default Directory;