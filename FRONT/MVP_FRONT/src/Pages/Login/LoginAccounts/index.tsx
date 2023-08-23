import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



//Styleds:
import { MainStyled, BodyStyled, FormStyled} from "./styled"

//Components:
import HeaderMenu from "../../Components/HeaderMenu"
import Footer from "../../Components/Footer"
import { faEnvelope, faF, faG } from '@fortawesome/free-solid-svg-icons';

export default function LoginAccounts() {
    return <BodyStyled>
        <HeaderMenu/>
        <MainStyled>
            <FormStyled>
                <h1>Welcome Back</h1>
                <p>Login to continue</p>
                <li><Link to="/" className='Link'><FontAwesomeIcon icon={faF}/>ㅤContinue with Facebook</Link></li>
                <li><Link to="/" className='Link'><FontAwesomeIcon icon={faG}/>ㅤContinue with Google</Link></li>
                <li><Link to="/" className='Link'><FontAwesomeIcon icon={faEnvelope}/>ㅤContinue with Email</Link></li>
                <p className='posicao'><Link to="/" className='linkk'>Or create an account</Link></p>
            </FormStyled>
        </MainStyled>
        <Footer/>
    </BodyStyled>
}