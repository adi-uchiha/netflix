import Image from 'next/image'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtoms'
import { Movie } from '../typings'

interface Props{
    movie : Movie
}

function Thumbnail( {movie}:Props ) {
  const [thumbnailHover, setThumbnailHover] = useState(false) 
  
  //to track if the mouse is hovering over any thumbnail 
  // and then change the height of a div which is not being hovered
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  const handleMouseOver = ()=> {
    setThumbnailHover(true)
  }
  const handleMouseOut = ()=>{
    setThumbnailHover(false)
  }

  return (

    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[280px] md:hover:scale-105 
    '
    onClick={()=>{
      setCurrentMovie(movie)
      setShowModal(true)
    }}>
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
          {/* This div is a parent div for title div and covers the whole thumbnail and title is at the bottom of it */}
        <div className={`info bg-black h-1 min-w-full absolute bottom-0 overflow-clip
        transition-height ease-in-out duration-500 
        ${thumbnailHover && "h-20"} 
        `}> 
        {/* title will appear only on mouse hover otherwise height will be h-1 and opacity will be zero */}
          <h1 className='z-50 realative'>{movie.title || movie.name || movie.original_name}</h1>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Thumbnail