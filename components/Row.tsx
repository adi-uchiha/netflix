import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
  title: string
  movies: Movie[]
}

function Row({ title, movies }: Props) {
  const [isMoved, setIsMoved] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)
  const handleClick=( direction:string) =>{
    setIsMoved(true)
    if(rowRef.current){
      const {scrollLeft, clientWidth} = rowRef.current

      const scrollamt = 
      direction === "left" 
      ? scrollLeft - clientWidth
      : scrollLeft + clientWidth
      rowRef.current?.scrollTo( {left: scrollamt, behavior : 'smooth'} )
    }

  }

  return (
    <div className='h-30 md:h-40 relative md:top-96 lg:top-72 space-y-0.5 md:space-y-2 '>
      <h2 className='ml-1 w-56 md:ml-2.5 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl '>
        {title}
      </h2>
      <div className='group relative -md:ml-2'>
        <ChevronLeftIcon className= {`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer 
        opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved&& 'hidden'}`}
        onClick={()=>{handleClick("left")}} />

        <div 
        ref={rowRef}
        className="flex scrollbar-hide items-center space-x-0.5 overflow-auto md:space-x-2.5 md:p-2">
          {movies.map((movie =>
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer 
        opacity-0 transition hover:scale-125 group-hover:opacity-100' onClick={()=>{handleClick('right')}}/>
      </div>
    </div>
  )
}

export default Row