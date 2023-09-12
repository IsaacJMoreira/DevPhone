import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { DivCarrinho, HeaderStyled } from "./styled";
import { useState, useContext, ReactNode } from 'react';
import Carrinho from './Carrinho';
import { LogadoContext } from '../../../Routes/Logado';

export default function HeaderMenu() {
    const [modal, setModal] = useState(false)
    const {user} = useContext(LogadoContext)

    let Logado = {} as ReactNode;

    if (user?.token) {
        Logado = <Link to="/painelAdm" className='login'>{user?.name}</Link>
    } else {
        Logado = <Link to="/login" className='login'>Login</Link>
    }

    return <>
        <HeaderStyled>
        <h1>DevPhone</h1>
        <ul>
            <li><Link to="/shop" className='menu'>Shop</Link></li>
            <li><Link to="/" className='menu'>Stories</Link></li>
            <li><Link to="/" className='menu'>About</Link></li>
            <input type="text" placeholder="Search"></input>
            <li><Link to="" className='carinho' onClick={() => setModal(true)}><FontAwesomeIcon icon={faBagShopping}/></Link></li>
            <li>{Logado}</li>
        </ul>
        </HeaderStyled>
        <DivCarrinho>
               <Carrinho isOpened={modal} closed={() => setModal(false)}/>
        </DivCarrinho>
        </>
};