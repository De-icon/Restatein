import {Hero} from '../components/hero'
import Value from '../assets/img/value.png'
import Homeimg from '../assets/img/home.png'
import Management from '../assets/img/management.png'
import Decision from '../assets/img/decision.png'
import Arow from '../assets/img/icons/arow.svg'



export const Home = () => {
    return (
      <>
        <Hero />
        <div className=' shadow-gray15 shadow-2xl p-4 w-full mx-2 my-10 '>
          <div className='  grid grid-cols-2 w-full justify-between gap-12 gap-y-5 auto-cols-[300px] md:grid-cols-4'>
            <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
                <img src={Arow} className=' w-6 absolute right-2 top-2' />
                <img src={Homeimg} className=' w-14' />
                <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
            </div>
            <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
              <img src={Arow} className=' w-6 absolute right-2 top-2' />
              <img src={Value} className=' w-14' />
              <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
            </div>
            <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
              <img src={Arow} className=' w-6 absolute right-2 top-2' />
              <img src={Management} className=' w-14' />
              <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
            </div>
            <div className=' relative p-4 flex flex-col items-center justify-center rounded-md bg-gray10 gap-2 w-full'>
              <img src={Arow} className=' w-6 absolute right-2 top-2' />
              <img src={Decision} className=' w-14' />
              <p className=' font-Font text-AbsoluteWhite font-semibold text-[12px] md:text-[14px]'>Find Your Dream Place</p>
            </div>
          </div>
        </div>
      </>
    );
  };
