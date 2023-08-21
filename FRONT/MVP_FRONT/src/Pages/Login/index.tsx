import { Link } from "react-router-dom"

//Styleds:
import { MainStyled, BodyStyled, FormStyled} from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"


export default function Login() {
    return <BodyStyled>
        <HeaderMenu/>
        <MainStyled>
         <FormStyled>
                <h1>Welcome Back</h1>
                <p>Login with email</p>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <div><input type="checkbox" checked className="remember"></input>
                <label>Remember me</label></div>
                <Link to="/" className="forgetPass">Forgot Password?</Link>
                <Link to="/" className='posicao'>Or create an account</Link>
         </FormStyled>
        </MainStyled>
        <Footer/>
    </BodyStyled>
}
