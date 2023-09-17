import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { MainStyled } from "./styled"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import home from "../../../Home"
import { useEffect, useState } from "react"


interface IPerfil {
    isOpened: boolean,
    closed(): void 
}

export default function Perfil({isOpened, closed}: IPerfil) {

    const deslogar = () => {
        const logoutStorage = localStorage.removeItem("userLogado");

        useEffect(() => {
            localStorage.setItem('userLogado', JSON.stringify(logoutStorage))
        }, [logoutStorage])  

        return logoutStorage
    }

    if(!isOpened) return <div/>

    return <>
    <MainStyled>
    <li><FontAwesomeIcon icon={faArrowLeft} onClick={closed} color="#FFF"/></li>
        <ul>
            <li><Link className="menuPerfil" to={"/painelAdm"}>Perfil</Link></li>
            <li><Link className="menuPerfil" to={"/login"} onClick={() => { deslogar() }} >Logout</Link></li>
        </ul>
    </MainStyled>
    </>
}
