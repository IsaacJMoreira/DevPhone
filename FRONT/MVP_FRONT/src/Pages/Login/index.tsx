import { Link } from "react-router-dom"
import { FormEventHandler, useState } from "react"

//Styleds:
import { MainStyled, BodyStyled, FormStyled} from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logar: FormEventHandler<HTMLFormElement> = (event) => {
        // "preventDefault" pra tela não ser recarregada;
        event.preventDefault()
        console.log(email)
        console.log(password)

    };



    return <BodyStyled>
        <HeaderMenu/>
        <MainStyled>
         <FormStyled onSubmit={logar}>
                <h1>Welcome Back</h1>
                <p>Login with email</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <div><input type="checkbox" checked className="remember"></input>
                <label>Remember me</label></div>
                <Link to="/" className="forgetPass">Forgot Password?</Link>
                <button type="submit">logar</button>
                <Link to="/" className='posicao'>Or create an account</Link>
         </FormStyled>
        </MainStyled>
        <Footer/>
    </BodyStyled>
}
