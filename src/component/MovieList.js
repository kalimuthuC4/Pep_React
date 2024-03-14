import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './MovieList.css'

export default function MovieList() {
    const [movie,setMovie] = useState([])
    const getMovies = () =>{
        fetch("https://65f16b93034bdbecc76271e3.mockapi.io/moviapi/movie",{
            method:"GET"
        })
        .then((data) => data.json())
        .then((mvs)=>setMovie(mvs))
    }

    useEffect(()=>{
        getMovies()
    },[])

  console.log(movie,"ix");
  return (
    <div className='movie-list'>
        {
            movie.map((list,index)=>(
                <div key={index}>
                    <Movie movieTake={list}/>
                </div>
            ))
        }
    </div>
  )
}
