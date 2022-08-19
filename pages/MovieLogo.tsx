import React from 'react'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props{
  movie: Movie | null
}



function MovieLogo( {movie}: Props ) {

  console.log(movie)

  return (
    <div>MovieLogo</div>
  )
}

export default MovieLogo
