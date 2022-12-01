import img1 from '../assets/image-product-1.jpg'
import img1Thumbnail from '../assets/image-product-1-thumbnail.jpg'
import img2 from '../assets/image-product-2-thumbnail.jpg'
import img2Thumbnail from '../assets/image-product-2-thumbnail.jpg'
import img3 from '../assets/image-product-3-thumbnail.jpg'
import img3Thumbnail from '../assets/image-product-3-thumbnail.jpg'
import img4 from '../assets/image-product-4-thumbnail.jpg'
import img4Thumbnail from '../assets/image-product-4-thumbnail.jpg'

function ImagesCarousel() {
  return (
    <div className='w-full sm:max-w-[20rem] sm:flex flex-col gap-8'>
      <div>
        <img src={img1} alt="Sneakers banner" className='w-full h-[19rem] sm:rounded-md flex sm:hidden' />
        <img src={img1} alt="Sneakers banner" className='h-[20rem] sm:rounded-lg hidden sm:flex' />
        </div>

        <div className='hidden sm:flex flex-row sm:max-w-[20rem] sm:gap-8'>
        <img src={img1Thumbnail} alt="Sneaker Image 1" className='w-14 rounded-lg' />
        <img src={img2Thumbnail} alt="Sneaker Image 2" className='w-14 rounded-lg' />
        <img src={img3Thumbnail} alt="Sneaker Image 3" className='w-14 rounded-lg' />
        <img src={img4Thumbnail} alt="Sneaker Image 4" className='w-14 rounded-lg' />
        </div>
    </div>
  )
}

export default ImagesCarousel