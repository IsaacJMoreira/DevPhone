import { Link } from "react-router-dom"
import { FormEventHandler, useState } from "react"
import { login } from "../Components/Login/login"
import axios from "axios"
import baseURL from '../../../baseURL'

//Styleds:
import { MainStyled, BodyStyled, FormStyled} from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"



export default function Login({}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isRequestng, setIsRequestng] = useState(false);

    const logar: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()

        try {
         const response = await axios.post(`${baseURL}/Login`, {
            email: email,
            password: password,
         })

         if (response.status === 201){
            alert('Login feito!')

            setEmail('')
            setPassword('')
         }
        } catch (error) {
            alert(error)
        }
    };

    const handleSubmit = () => {
        //voltar ao padrão
        setError(null);
        setIsRequestng(true);

        let values = {email: email, password: password}
         login(values).then(() => {alert("Login Efetuado!")}).catch((error) => {
            console.log(error);
            setError(error.message);
         }).finally(() => { // "finally" para rodar sempre;
            setIsRequestng(false);
         });
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
                <button type="submit" onClick={handleSubmit} disabled={email == '' || password.length < 6 || isRequestng}>logar</button>
                {error && <div className="error">{error}</div>}
                <Link to="/logon" className='posicao'>Or create an account</Link>
         </FormStyled>
        </MainStyled>
        <Footer/>
    </BodyStyled>
}
