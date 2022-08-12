import React from 'react'
import { Movie } from '../typings'

interface Props{
  movie : Movie | null
}

function MoreInfo( {movie}: Props ) {
  console.log(movie)
  return (
    <div><p>heeeeee</p></div>
  )
}

export default MoreInfo