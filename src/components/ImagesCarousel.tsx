import img1 from '../assets/image-product-1.jpg'
import im2 from '../assets/image-product-2-thumbnail.jpg'
import img3 from '../assets/image-product-3-thumbnail.jpg'
import img4 from '../assets/image-product-4-thumbnail.jpg'

function ImagesCarousel() {
  return (
    <div className='w-full'>
        <img src={img1} alt="Sneakers banner" className='w-full h-[19rem]' />
    </div>
  )
}

export default ImagesCarousel