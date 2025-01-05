import LogoIcon from '../assets/logo.webp';
import MenuIcon from '../assets/icon-menu.svg';
import { Button } from '../components/Button';

export const Header = () => {
  return (
    <header className='py-4 border-b border-white/15 md:border-none sticky top-0 z-10'>
      <div className='absolute inset-0 backdrop-blur -z-10 md:hidden'></div>
      <div className='container'>
        <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative '>
        <div className='absolute inset-0 backdrop-blur -z-10 hidden md:block'></div>
          <div>
            {/* <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 shadow-[0_0_10px_rgba(147,197,253,0.3)] object-contain'> */}
            <img src={LogoIcon.src} alt="Logo" className="h-10 w-10 rounded-lg border border-white/15 shadow-[0_0_20px_rgba(147,197,253,0.5)] object-cover" />
            {/* </div> */}
          </div>
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href='#' className='text-white/70 hover:text-white transition'>Features</a>
              <a href='#' className='text-white/70 hover:text-white transition'>Product</a>
              <a href='#' className='text-white/70 hover:text-white transition'>Action</a>
              <a href='#' className='text-white/70 hover:text-white transition'>Pricing</a>
            </nav>
          </div>
          <div className='flex gap-4 items-center'>
            <Button>Book a Call</Button>
            <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  )
}