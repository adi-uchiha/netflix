import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../atoms/modalAtoms';
import MoreInfo from './MoreInfo';
import Popup from 'reactjs-popup';
import MovieLogo from '../pages/MovieLogo';

interface Props {
  netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

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
      <div className="overviewAndButtons relative top-52 space-y-3 ml-2 md:ml-4 md:top-72">

          <MovieLogo movie={movie} />
        
        <p className='max-w-xs text-xs md:max-w-lg md:text-sm lg:max-w-2xl lg:text-base'>
          {movie?.overview}
        </p>
        <div className='flex space-x-4 '>
          <button className='bannerButton bg-white text-black'
          onClick={() => {
            setCurrentMovie(movie)
            setShowModal(true)
          }}>
            <FaPlay className='h-4 w-4 text-black md:h-4 md:w-4 ' />
            Play
          </button>
          <MoreInfo movie={movie} />
        </div>

      </div>
    </div>

  )
}

export default Banner