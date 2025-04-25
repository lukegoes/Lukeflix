import React from 'react'
import "./Footer.css"
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
        </div> 
        <ul>
          <li>Descrição em áudio</li>
          <li>Central de ajuda</li>
          <li>Vale Presentes</li>
          <li>Central de mídia</li>
          <li>Trabalhe conosco</li>
          <li>Termos de uso</li>
          <li>Privacidade</li>
          <li>Informações legais</li>
          <li>Preferências de cookies</li>
          <li>Fale conosco</li>
          </ul> 
          <p className='copyright'>© 1997-2025 Lukeflix, Inc.</p>
    </div>
  )
}

export default Footer