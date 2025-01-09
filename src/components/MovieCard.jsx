import React from 'react'
import CardImg from '../assets/images/home/bhool-bhalaiyaa.webp'

const MovieCard = () => {
  return (
    <>
        <div className='max-w-48 relative'>
            <img className='w-100 rounded-[10px]' src={CardImg} alt="" />
            <p className='absolute bottom-1 left-[-1.33rem] text-stroke-sm text-stroke-white text-8xl font-bold'>1</p>
        </div>
    </>
  )
}

export default MovieCard