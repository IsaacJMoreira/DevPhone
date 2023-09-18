import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Perfil from "./Perfil"

import { faBagShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import {  useContext, ReactNode, useState } from 'react';
import { LogadoContext } from '../../../Routes/Logado';
import { HeaderStyled } from './styled';
import { CardContext } from './Card/ItemCard/provider';
import Card from './Card'

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
    const {user} = useContext(LogadoContext);
    const {cardItem} = useContext(CardContext);
    const [modal, setModal] = useState(false);
    const [modalCard, setModalCard] = useState(false);


    let Logado = {} as ReactNode;

    if (user?.token) {
        Logado = <Link to='' onClick={() => setModal(true)} className='login'>{user?.name}</Link>
    } else {
        Logado = <Link to="/login" className='login'>Login</Link>
    }
    return <>
        <HeaderStyled>
            <Link to= '/'><h1>DevPhone</h1></Link>
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
               <li><Link to="" className='carinho' onClick={() => setModalCard(!modalCard)}>
                    <FontAwesomeIcon icon={faBagShopping}/> {cardItem.length}
                    </Link>
                    <Card isOpen={modalCard} closed={() => setModalCard(false)}/></li>
                <li>{Logado}
                  <div className='modal'>
                     <ul><Perfil isOpened={modal} closed={() => setModal(false)}/></ul>
                  </div>
                </li>
            </ul>
        </HeaderStyled>
        
    </>
};

export default HeaderMenu;

