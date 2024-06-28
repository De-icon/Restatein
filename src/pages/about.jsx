import {HeroAbout} from '../components/heroAbout'
import Star from '../assets/img/star.png'
import TrustImg from '../assets/img/trustImg.png'
import ClientImg from '../assets/img/clientImg.png'
import commitmentImg from '../assets/img/commitmentImg.png'
import ExcellentImg from '../assets/img/excellentImg.png'

export const About = () => {
  return (
    <div>
      <HeroAbout />
      <div className="flex flex-col items-center justify-between md:px-16 px-5  py-8 lg:py-10 gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-5/12 xl:py-16">
        <img src={Star} className=' w-16' />
          <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Our Values</h1>
          <p className="mb-10 leading-relaxed font-Font text-base text-gray60  lg:w-5/5 xl:text-lg">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-gray10 p-5 rounded-md'>
          <div className=' flex flex-col items-start gap-3 p-6 ' >
            <div className='flex gap-3 items-center justify-center'>
              <img src={TrustImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Trust</p>
            </div>
            <p className="font-Font text-base text-gray60">Trust is the cornerstone of every successful real estate transaction.</p>
          </div>
          <div className=' flex flex-col items-start gap-3 p-6' >
            <div className='flex gap-3 items-center justify-center'>
              <img src={ExcellentImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Excellence</p>
            </div>
            <p className="font-Font text-base text-gray60">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
          </div>
          <div className=' flex flex-col items-start gap-3 p-6' >
            <div className='flex gap-3 items-center justify-center'>
              <img src={ClientImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Client-Centric</p>
            </div>
            <p className="font-Font text-base text-gray60">Your dreams and needs are at the center of our universe. We listen, understand..</p>
          </div>
          <div className=' flex flex-col items-start gap-3 p-6' >
            <div className='flex gap-3 items-center justify-center'>
              <img src={commitmentImg} className=' w-16' />
              <p className='font-Font font-bold text-xl text-AbsoluteWhite'>Our Commitment</p>
            </div>
            <p className="font-Font text-base text-gray60">We are dedicated to providing you with the highest level of service, professionalism.</p>
          </div>
        </div>
      </div>

      <div className=" md:px-16 px-5  py-8 lg:py">
        <div className="flex flex-col justify-center sm:text-center lg:text-left xl:w-full xl:py-16">
          <img src={Star} className=' w-16' />
            <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Our Achievements</h1>
            <p className="mb-10 leading-relaxed font-Font text-base text-gray60 lg:w-4/5 xl:text-lg">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          <div className=' flex flex-col items-start gap-5 bg-gray10 p-7 rounded-md '>
            <h1 className='font-Font font-bold text-lg text-AbsoluteWhite'>3+ Years of Excellence</h1>
            <p className="font-Font text-base text-gray60">With over 3 years in the industry, we have amassed a wealth of knowledge and experience.</p>
          </div>
          <div className=' flex flex-col items-start gap-5 bg-gray10 p-7 rounded-md '>
            <h1 className='font-Font font-bold text-lg text-AbsoluteWhite'>Happy Clients</h1>
            <p className="font-Font text-base text-gray60">Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
          </div>
          <div className=' flex flex-col items-start gap-5 bg-gray10 p-7 rounded-md '>
            <h1 className='font-Font font-bold text-lg text-AbsoluteWhite'>Industry Recognition</h1>
            <p className="font-Font text-base text-gray60">We have earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}
