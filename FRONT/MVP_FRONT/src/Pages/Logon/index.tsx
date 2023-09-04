import { Link } from "react-router-dom"
import * as React from 'react'
import baseURL from '../../../baseURL'
import axios from "axios"

//components
import HeaderMenu from "../Components/HeaderMenu"
import Footer from "../Components/Footer"

//styleds 
import {FormStyled, MainStyled, BodyStyled} from "./styled"

export default function Logon() {
  const [error, setError] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isChecked, setIsChecked] = React.useState(false);
   
  const checkPassword = () => {
    if(password != confirmPassword){
      setError("senhas diferentes")
    } else {
      setError("")
    }
  };

  const handleRegister: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)

    if(password == confirmPassword){
      try {
        const response = await axios.post(`${baseURL}/logon`, {
          name: name,
          email: email,
          password: password,
        })
  
          if (response.status === 201){
            alert('Cadastro feito!')
            
            setName(''),
            setEmail(''),
            setPassword(''),
            setConfirmPassword('')
          }
        
      } catch (error) {
        alert('Erro!')
        console.log(error)
      }
    } else{
      console.log("senha diferente.")
    }
};

    return <BodyStyled>
        <HeaderMenu/>
         <MainStyled>
          <FormStyled onSubmit={handleRegister}>
            <h1>Registro</h1>
            <p>register in our store</p>
            <input type="name" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            <div><input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            <label>I agree to Terms of Service</label></div>
            <button type="submit" disabled={ email == '' || password.length < 6 || !confirmPassword || !isChecked} onClick={checkPassword}>logon</button>
            <div className="diverror">{error}</div>
            <Link to="/login" className='contajacriada'>Already have registration?</Link>
          </FormStyled>
         </MainStyled>
        <Footer/>
    </BodyStyled>
  }