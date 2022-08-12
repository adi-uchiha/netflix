import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from '@heroicons/react/solid';
import MoreInfo from './MoreInfo';

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false)
  
 
  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])

  }, [netflixOriginals])

  return (
    <div>

      <div className='absolute top-0 left-0 h-[40vh] w-[100vw] md:h-[80vh] lg:h-[90vh] -z-10'>
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit='cover'
        // priority
        />
      </div>
      <div className="overviewAndButtons relative top-52 space-y-3 ml-2 md:ml-4 md:top-80">

      <h1 className='text-2xl lg:text-5xl md:text-4xl font-bold'>
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className='max-w-xs text-xs md:max-w-lg md:text-sm lg:max-w-2xl lg:text-base'>
        {movie?.overview}
      </p>


      <div className='flex space-x-4 '>
        <button className='bannerButton bg-white text-black'>
          <FaPlay className='h-4 w-4 text-black md:h-4 md:w-4' />
          Play
        </button>

        <button className='bannerButton bg-[gray]/70' onClick={()=>setShowMoreInfo(true)}>
          More Info
          <div className={`${!showMoreInfo && "hidden"}`}>

          <MoreInfo movie = {movie}/>
          </div>
          <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' />
        </button>
      </div>

      </div>
    </div>

  )
}

export default Banner