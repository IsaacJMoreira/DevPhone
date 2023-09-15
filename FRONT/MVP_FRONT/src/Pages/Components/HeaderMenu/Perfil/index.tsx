import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { MainStyled } from "./styled"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

interface IPerfil {
    isOpened: boolean
    closed(): void 
}

export default function Perfil({isOpened, closed}: IPerfil) {

    if(!isOpened) return <div/>

    return <>
    <MainStyled>
    <li><FontAwesomeIcon icon={faArrowLeft} onClick={closed} color="#FFF"/></li>
        <ul>
            <li><Link className="menuPerfil" to={"/painelAdm"}>Perfil</Link></li>
            <li><Link className="menuPerfil" to={"/login"}>Logout</Link></li>
        </ul>
    </MainStyled>
    </>
}
