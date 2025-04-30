import React from 'react'
import "./BannerPlayer.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, } from 'react-router-dom'

const BannerPlayer = () => {

  const navigate = useNavigate(); 

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Voltar" onClick={() => navigate(-1)} />
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/Hbx4ljf4Bjs?si=LXVyVhNp67Ab8kJZ&autoplay=1&mute=1"
        title="Trailer Banner"
        frameBorder={0}
        allowFullScreen
        allow="autoplay"
      ></iframe>
    </div>
  )
}

export default BannerPlayer