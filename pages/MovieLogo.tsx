import React, { useEffect, useState } from 'react'
import { Movie } from '../typings'

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
  const imgPath = data?.images?.logos[0]?.file_path


//Get the png path of title log image

  return (
    <div className="parentDiv">

    <div className='w-[50vh]'>
    <img className={`${!imgPath && "hidden"}`}
    src={`https://image.tmdb.org/t/p/original/${imgPath}`} alt="" />
    </div>

    <div>
      <h1 className='text-2xl lg:text-5xl md:text-4xl font-bold'>
      {imgPath ? "" : movie?.title || movie?.name || movie?.original_name}
      </h1>
    </div>
    
    </div>
  )
}



export default MovieLogo
