import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props{
  movie: Movie | null

}

function MovieLogo( {movie}: Props ) {
  const [data, setData] = useState<Movie|null>(null)

  
  
  
  
  //To get send l   ogo request to api of the required movie (Client side rendering)
  
  useEffect( () => {

    fetch(`https://api.themoviedb.org/3/tv/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    }) 
    return
  
  }, [movie?.id])   
  console.log(data)

  


  return (
    <div>
      <Image src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
      height={"20px"}
      width={"40px"} />
    </div>
  )
}



export default MovieLogo
