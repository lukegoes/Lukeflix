import React, { useEffect, useState } from 'react'
import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGNkN2MzZDY2NzViYzcyODE3YjY4M2IyM2VmZDlhNSIsIm5iZiI6MTc0NTk2NjkwNS41MjMsInN1YiI6IjY4MTE1NzM5NDllNWJkNDdiMmVlYjk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IKaTo1gyVD_12MAaMI5Y9AjUPRheMyojKqHvZoBEJZI'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])
  

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-1)}} />
      <iframe width="90%" height="90%" 
      src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=1`}
      title='Trailer' frameBorder={0} allowFullScreen allow='autoplay'></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player