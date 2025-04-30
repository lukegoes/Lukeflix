import React, { useEffect, useRef, useState} from 'react'
import "./TitleCards.css"
import { Link } from 'react-router-dom';


const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGNkN2MzZDY2NzViYzcyODE3YjY4M2IyM2VmZDlhNSIsIm5iZiI6MTc0NTk2NjkwNS41MjMsInN1YiI6IjY4MTE1NzM5NDllNWJkNDdiMmVlYjk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IKaTo1gyVD_12MAaMI5Y9AjUPRheMyojKqHvZoBEJZI'
    }
  };
  

  const handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, [])


  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular na Lukeflix"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default TitleCards