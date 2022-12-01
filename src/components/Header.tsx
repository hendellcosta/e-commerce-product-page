import logo from '../assets/logo.svg'
import {BiMenu} from 'react-icons/bi'
import {SlBasket} from 'react-icons/sl'
import pfp from '../assets/image-avatar.png'

function Header() {
  return (
    <>
      <header className='flex flex-row px-4 py-5 sm:px-20 sm:py-10 max-w-full'>
        <span className='flex flex-row items-center gap-12'>
          <BiMenu className='text-2xl sm:hidden' />
          <img src={logo} alt="Logo" className='w-28 h-5' />
          <ul className='sm:flex flex-row gap-4 text-slate-500 font-thin hidden'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
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
