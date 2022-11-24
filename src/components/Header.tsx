import logo from '../assets/logo.svg'
import {BiMenu} from 'react-icons/bi'
import {SlBasket} from 'react-icons/sl'
import pfp from '../assets/image-avatar.png'

function Header() {
  return (
    <>
      <header className='flex flex-row px-4 py-5'>
        <span className='flex flex-row items-center gap-3'>
          <BiMenu className='text-2xl' />
          <img src={logo} alt="Logo" className='w-28 h-5' />
        </span>

        <span className='flex flex-row ml-auto items-center gap-5'>
          <SlBasket className='text-2xl' />
          <img src={pfp} alt="" className='w-7 h-7 rounded-full' />
        </span>
      </header>

      <div>
        
      </div>
      </>
  )
}

export default Header;
