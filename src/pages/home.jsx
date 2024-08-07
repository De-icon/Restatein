import {Hero2} from '../components/hero2'
import Value from '../assets/img/value.png'
import Homeimg from '../assets/img/home.png'
import Management from '../assets/img/management.png'
import Decision from '../assets/img/decision.png'
import Arow from '../assets/img/icons/arow.svg'
import { FeaturedProperties } from '../components/featuredProperties'
import { Testimonials } from '../components/testimonials'
import { Faq } from '../components/faq'
import {CallToAction} from '../components/callToAction'



export const Home = () => {
    return (
      <>
        <div className=' max-w-full mx-auto'>
        <Hero2 />
        <div className=' px-4 my-10 '>
          <div className='  grid grid-cols-2 w-full gap-10 gap-y-5  md:grid-cols-4'>
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
        <FeaturedProperties />
        <Testimonials />
        <Faq />
        <CallToAction />
        </div>
        
      </>
    );
  };
