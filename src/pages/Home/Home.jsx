import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from "../../assets/hero_banner.png"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="Poster da série A Roda do Tempo" className='banner-img'/>
        <div className="hero-caption">
            <img src={hero_title} alt="Texto escrito The Wheel of Time" className='caption-img' />
        <p>Acompanhe Moiraine, uma membro da Aes Sedai, 
          em uma jornada com cinco jovens de Dois Rios, 
          tentando encontrar o Dragão Renascido.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Assistir</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Mais Informações</button>
          </div>
        </div>
        </div>
        <div className="more-cards">
        <TitleCards title={"Populares"}/>
        <TitleCards title={"Exclusivos Lukeflix"}/>
        <TitleCards title={"Séries para assistir"}/>
        <TitleCards title={"Selecionados para você"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home