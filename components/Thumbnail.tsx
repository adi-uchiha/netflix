import Image from 'next/image'
import React, { useState } from 'react'
import { Movie } from '../typings'

interface Props{
    movie : Movie
}

function Thumbnail( {movie}:Props ) {
  const [thumbnailHover, setThumbnailHover] = useState(false)

  const handleMouseOver = ()=> {
    setThumbnailHover(true)
  }
  const handleMouseOut = ()=>{
    setThumbnailHover(false)
  }

  return (

    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[280px] md:hover:scale-105 '>
      <div className=''>

        <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path}`}
          className="-z rounded-sm object-cover md:rounded"
          layout="fill"
        />
          <div className='h-36 opacity-0 hover:opacity-70
          duration-300 delay-150 transition ease-in-out hover:-translate-y-0 hover:scale-100' 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          >
          
        <div className={`info bg-black h-1 min-w-full absolute bottom-0 overflow-clip
        transition-height ease-in-out duration-500 
        ${thumbnailHover && "h-20"}
        `}>
          <h1 className='z-50 realative'>{movie.title || movie.name || movie.original_name}</h1>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Thumbnail