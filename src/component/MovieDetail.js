import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {
    const {id} = useParams();
    const [movie,setMovie] = useState();

    useEffect(()=>{
        fetch(`https://65f16b93034bdbecc76271e3.mockapi.io/moviapi/movie/${id}`,{
            method: "GET"
        })
        .then((data) => data.json())
        .then((mvs) => setMovie(mvs))
    },[])
    console.log(movie)
  return (
    <div><iframe width="1280" height="720" src="https://www.youtube.com/embed/nyiJ3WHNrB4" title="Full Stack AI Web Development Guide For 2024 (30 Minutes)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  )
}

