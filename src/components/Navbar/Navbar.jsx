import React, { useEffect, useRef } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.png"
import bell_icon from "../../assets/bell_icon.png"
import profile_img from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.png"


const Navbar = () => {

    const navRef = useRef();
    
    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 400){
            navRef.current.classList.add("nav-dark");
            }else {
            navRef.current.classList.remove("nav-dark");
            }
        })
    },[])

  return (
    <div ref={navRef} className='navbar'>
        <div ref={navRef} className="navbar-esquerda">
            <img src={logo} alt="Logo da Lukeflix" />
            <ul>
                <li>Home</li>
                <li>Séries</li>
                <li>Filmes</li>
                <li>Novidades</li>
                <li>Minha lista</li>
                <li>Navegue por Gênero</li>
            </ul>
        </div>
        
        
        <div className="navbar-direita">
            <img src={search_icon} alt="Ícone de lupa" className="icons"/>
            <p>Crianças</p>
            <img src={bell_icon} alt="Ícone de notificação" className="icons"/>
            <div className="navbar-profile">
            <img src={profile_img} alt="Ícone do perfil" className="profile"/>
            <img src={caret_icon} alt="Ícone de seta para baixo" className="icons"/>
            <div className="dropdown">
                <p>Fazer Logout</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar