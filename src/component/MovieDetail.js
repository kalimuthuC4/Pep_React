// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// export default function MovieDetail() {
//     const {id} = useParams();
//     const [movie,setMovie] = useState();

//     useEffect(()=>{
//         fetch(`https://65f16b93034bdbecc76271e3.mockapi.io/moviapi/movie/${id}`,{
//             method: "GET"
//         })
//         .then((data) => data.json())
//         .then((mvs) => setMovie(mvs))
//     },)
//     console.log(movie)
//   return (
//     <div>
//     <iframe 
//     width="1280" 
//     height="720" 
//     src={movie.trailer} 
//     title={movie.name}
//     frameborder="0" 
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//     allowfullscreen>
//         </iframe>

//         <div>
//             <div>
//                 <h2>{movie.name}</h2>
//                 <h3>{movie.rating}</h3>
//             </div>
//             <p>{movie.summary}</p>
//         </div>
//         </div>
//   )
// }

import { Button } from '@mui/material';
import React, { useEffect,useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function MovieDetail() {
  const {id} = useParams();
  const navigate = useNavigate();
//   console.log(id);
const [movie, setMovie] = useState([]);
        
    useEffect(() => {
        fetch(`https://65f16b93034bdbecc76271e3.mockapi.io/moviapi/movie/${id}`, {method: "GET"})
        .then((data) => data.json())
        .then((mv) => setMovie(mv));
    },[]);
    console.log(movie);
    const ratingStyles ={
        color: movie.rating >=8.5 ? "green" : "red",
    };
    return (
    <div className='movie-detail'>
    <iframe width="100%" height="900px" src={movie.trailer} 
    title={movie.name} frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='movie-detail-container'>
                <div className='movie-spec'>
                    <h2 className='movie-name'>{movie.name}</h2>
                    <h3 style={ratingStyles} className="movie-rating">⭐{movie.rating}</h3>
                </div>
                <p className='movie-summary'>{movie.summary}</p>
            </div>
            <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={()=> navigate(-1)}>Back </Button>
    </div>
  )
}
