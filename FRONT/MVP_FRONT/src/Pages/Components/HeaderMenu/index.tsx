import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { DivCarrinho, HeaderStyled } from "./styled";
import { useState, useContext, ReactNode } from 'react';
import Carrinho from './Carrinho';
import { LogadoContext } from '../../../Routes/Logado';

export default function HeaderMenu() {
    const {user} = useContext(LogadoContext)

    let Logado = {} as ReactNode;

    if (user?.token) {
        Logado = <Link to="/painelAdm" className='login'>{user?.name}</Link>
    } else {
        Logado = <Link to="/login" className='login'>Login</Link>
    }
    return <>
        <HeaderStyled>            
            <Link to= '/Home'><h1>DevPhone</h1></Link>
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
                <li>{Logado}</li>
            </ul>
        </HeaderStyled>
    </>
};

export default HeaderMenu;

