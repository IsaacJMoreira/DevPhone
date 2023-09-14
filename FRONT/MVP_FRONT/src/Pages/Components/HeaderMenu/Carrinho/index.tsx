import { CarrinhoStyled } from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faX } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

interface ModalCarrinho {
    isOpened: boolean
    closed(): void
}

export default function Carrinho({ isOpened, closed }: ModalCarrinho) {

    if (!isOpened) return <div/>
    return <CarrinhoStyled>
        <main>
           <Link to="" onClick={closed} className="fecha"><FontAwesomeIcon icon={faX}/></Link>
           <h1>Carrinho</h1>
        </main>
    </CarrinhoStyled>
}