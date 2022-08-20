import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface Props{
  movie: Movie | null

}

function MovieLogo( {movie}: Props ) {
  const [data, setData] = useState(movie)

  
  
  
  
  //To get send logo request to api of the required movie (Client side rendering)
  
  useEffect( () => {

    fetch(`https://api.themoviedb.org/3/tv/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=images&include_image_language=null,en`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
    return
  
  }, [movie?.id])   
  console.log(data)
//Get the png path of title log image
  const imgPath = data?.images?.logos[0].file_path
  
  return (
    <div>
      <Image src={`https://image.tmdb.org/t/p/original/${imgPath}`}
      height={"140px"}
      width={"350px"}/>
    </div>
  )
}



export default MovieLogo
