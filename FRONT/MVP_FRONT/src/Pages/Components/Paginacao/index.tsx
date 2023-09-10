import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { DivStyled } from "./styled"



export default function Paginacao() {
    return <DivStyled>
        <Link to="/" className='seguinte'><FontAwesomeIcon icon={faArrowLeft}/> voltar</Link>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
        <Link to="/" className='seguinte'>Seguinte <FontAwesomeIcon icon={faArrowRight}/></Link>
    </DivStyled>
}