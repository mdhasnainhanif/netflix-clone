import React from 'react'

const MovieCard = (data) => {
  return (
    <>
        <div className='max-w-48 relative hover:scale-[1.05] transition_05 cursor-pointer'>
            <img className='w-100 rounded-[10px] min-w-[12rem]' src={data?.data?.image} alt="" />
            <p className='absolute bottom-1 left-[-1.33rem] text-stroke-sm text-stroke-white text-8xl font-bold'>{data?.data?.count}</p>
        </div>
    </>
  )
}

export default MovieCard