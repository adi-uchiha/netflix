import { InformationCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { Movie } from '../typings'
import Popup from 'reactjs-popup';
 

interface Props{
  movie : Movie | null
}

function MoreInfo( {movie}: Props ) {
  
  const overlayStyle = {background : "black", opacity : "0.7"}
  const arrowStyle = { color: 'red', padding: "0px" };
  return (
    <div>
      <Popup trigger={
            <button className='bannerButton bg-[gray]/70'>
              More Info
              <InformationCircleIcon className='h-5 w-5 md:h-8 md:w-8' />
            </button>
          }
          {...{overlayStyle, arrowStyle}}
            position="right center">
            <div>
              <ul>
                <li>Language: {movie?.original_language} </li>
                <li>Released: {movie?.first_air_date}</li>
                <li>Rating: {movie?.vote_average}</li>
                <li>Original: {movie?.original_name} </li>

              </ul>
            </div>
          </Popup>


    </div>
  )
}

export default MoreInfo