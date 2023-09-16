import { Link } from "react-router-dom"
import { FormEventHandler, useState } from "react"
import axios from "axios"
import baseURL from '../../../baseURL'

//Styleds:
import { MainStyled, BodyStyled, FormStyled} from "./styled"

//Components:
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"

import { LogadoContext } from "../../Routes/Logado"
import Home from "../Home"


export default function Login({}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loogar, setLoogar] = useState('');
    const [loading, setLoading] = useState(0);

    const {setUser} = useContext(LogadoContext);


    const logar: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setLoading(1)

        try {
            const response = await axios.post(`${baseURL}/login`, {
                email: email,
                password: password,
             })
             // "response.data" token;
             console.log(response.data)
             if(response.status === 200){
                setLoogar("Login Feito!")

                const token = response.data;
                setEmail('')
                setPassword('')
                setLoading(0)


                const SlLogin = [response.data.name, response.data.credential, response.data.token]
                localStorage.setItem("userLogado", JSON.stringify(SlLogin))
               
                setUser({
                    name: response.data.name,
                    credential: response.data.credential,
                    token: response.data.token,
                })
             }
        } catch (error) {
            setLoading(0);
            setLoogar("password ou email invalido!")
            console.error(error);
        }};

        if(loogar == "Login Feito!") return <Home/>
        
    return <BodyStyled>
        <HeaderMenu/>
        <MainStyled>
         <FormStyled onSubmit={logar}>
                <h1>Welcome Back</h1>
                <p>Login with email</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <div><input type="checkbox" className="remember" checked></input>
                <label>Remember me</label></div>
                <Link to="/" className="forgetPass">Forgot Password?</Link>
                <button type="submit" disabled={email == '' || password.length < 6 || loading == 1}>logar</button>
                {loogar && <div className="error">{loogar}</div>}
                <Link to="/logon" className='posicao'>Or create an account</Link>
         </FormStyled>
        </MainStyled>
        <Footer/>
    </BodyStyled>
}
