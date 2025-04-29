import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"

const Login = () => {

  const[signState, setSignState] = useState("Fazer Login");

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
     <div className="login-form">
      <h1>{signState}</h1>
      <form>
        {signState === "Cadastre-se"?<input type="text" 
        placeholder='Seu nome'/>:<></>}
        
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Senha'/>
        <button>{signState}</button>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Manter-me conectado</label>
          </div>
          <p>Precisa de ajuda?</p>
        </div>
      </form>
      <div className="form-switch">
        {signState === "Fazer Login"?<p>Novo na Lukeflix? 
          <span onClick={()=>setSignState("Cadastre-se")}>Cadastre-se</span></p>:<p>Já possui uma conta? 
            <span onClick={()=>setSignState("Fazer Login")}>Fazer Login</span></p>}
      </div>
     </div>
    </div>
  )
}

export default Login