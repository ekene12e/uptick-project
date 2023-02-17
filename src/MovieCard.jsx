import React from 'react'
import './MovieCard.scss'

const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieCard = ({title, release_date, overview, poster_path}) => {
  return (
    <div className='moviecard'>
      <img src={`${API_IMG}${poster_path}`}></img>
      <h3>{title}</h3>
      <h5>{release_date}</h5>
      <p>{overview}</p>

    </div>
  )
}

export default MovieCard