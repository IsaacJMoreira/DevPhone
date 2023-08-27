import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyled } from "./styled";


export default function HeaderMenu() {
    return <>
        <HeaderStyled>
        <h1>DevPhone</h1>
        <ul>
            <li><Link to="/" className='menu'>Shop</Link></li>
            <li><Link to="/" className='menu'>Stories</Link></li>
            <li><Link to="/" className='menu'>About</Link></li>
            <input type="text" placeholder="Search"></input>
            <li><Link to="/" className='carinho'><FontAwesomeIcon icon={faBagShopping}/></Link></li>
            <li><Link to="/Login" className='menu'>Login</Link></li>
        </ul>
        </HeaderStyled>
        </>
};