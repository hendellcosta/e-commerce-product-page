import React from 'react'
import Main from './Main'
import ImagesCarousel from './ImagesCarousel'

function Body() {
  return (
    <div className='sm:flex flex-row sm:px-80 sm:pt-16 justify-between'>
        <ImagesCarousel />
        <Main />
    </div>
  )
}

export default Body