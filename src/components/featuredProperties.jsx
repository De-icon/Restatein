import Star from '../assets/img/star.png'
import { FeaturedSlider } from './featuredSlider'



export const FeaturedProperties = () => {
  return (
    <div className=' max-w-full p-5 mb-24 md:px-16 text-AbsoluteWhite font-Font flex flex-col gap-6'>
        <img src={Star} className=' w-16' />
        <h1 className=' font-bold tracking-wide'>Featured Properties</h1>
        <div className=' w-full flex justify-between align-center gap-12' >
            <p className=' text-gray50'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information.</p>
            <div className='font-Font text-[14px] lg:text[18px] md:inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-gray10 hover:bg-gray15  rounded-md hidden cursor-pointer w-48'>View All Properties</div>
        </div>
        <FeaturedSlider />
       
    </div>
  )
}
