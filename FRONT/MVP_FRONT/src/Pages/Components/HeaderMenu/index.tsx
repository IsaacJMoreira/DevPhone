import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { HeaderStyled } from "./styled";
import React from "react"

interface HeaderMenuProps {
    input?: string;
    searchDisabled?: boolean;
    searchHandler?: (e: any) => void
};


const HeaderMenu: React.FC<HeaderMenuProps> = ({
    input,
    searchDisabled = true,
    searchHandler,
}) => {
    return <>
        <HeaderStyled>
            <h1>DevPhone</h1>
            <ul>
                <li><Link to="/shop" className='menu'>Shop</Link></li>
                <li><Link to="/" className='menu'>Stories</Link></li>
                <li><Link to="/" className='menu'>About</Link></li>
                {
                    !searchDisabled && <>
                        <li><FontAwesomeIcon icon={faSearch} /></li>
                        <input
                            type="text"
                            placeholder="Search"
                            value={input}
                            onChange={searchHandler}
                            disabled={searchDisabled}>
                        </input>
                    </>
                }
                {
                    searchDisabled && <div style={{ width: "33vw" }}></div>
                }
                <li><Link to="/" className='carinho'><FontAwesomeIcon icon={faBagShopping} /></Link></li>
                <li><Link to="/Login" className='menu'>Login</Link></li>
            </ul>
        </HeaderStyled>
    </>
};

export default HeaderMenu;