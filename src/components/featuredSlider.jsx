import { Properties } from '../constant/data'
// import Home1 from '../assets/img/home1.png'
import { MdBed } from "react-icons/md"
import { FaBath } from "react-icons/fa"
import { MdVilla } from "react-icons/md"
import Slider from "react-slick";


export const FeaturedSlider = () => {


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        
        responsive:[
        {
            breakpoint:1280,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint:890,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint:750,
            settings: {
                slidesToShow: 1,
            }
        }

      ]
      };
      


  return (
    <div className=' relative'>

        <Slider {...settings}>
        {Properties.map((property, i) => (
            <div key={i} className='w-[full] overflow-hidden font-Font'>
              <div className='p-5 w-[280px] sm:w-[300px] border-t-8 border-gray60 rounded-md bg-gray10 flex flex-col gap-6'>
                <div className=' w-[280px] sm:w-[300px]'>
                  <img className='object-contain  w-full' src={property.image} />
                </div>
                <div className='flex flex-col gap-3 w-[300px]'>
                  <h3>{property.title}</h3>
                  <p className='text-gray40'>{property.description}</p>
                </div>
                <div className='flex  gap-1 sm:gap-2'>
                  <div className='flex items-center justify-center p-2 bg-gray10 rounded-full'>
                    <MdBed className='w-8' />
                    <p className='text-[10px]'>{property.bedrooms}-Bedroom</p>
                  </div>
                  <div className='flex items-center justify-center p-2 bg-gray10 rounded-full'>
                    <FaBath className='w-10' />
                    <p className='text-[10px]'>{property.bathrooms}-Bathroom</p>
                  </div>
                  <div className='flex items-center justify-center p-2 bg-gray10 rounded-full'>
                    <MdVilla className='w-10' />
                    <p className='text-[10px]'>Villa</p>
                  </div>
                </div>
                <div className='flex w-full items-center gap-12'>
                  <div className='flex flex-col gap-3'>
                    <p className='text-gray40 text-[14px]'>Price</p>
                    <p className='font-semibold'>{property.price}</p>
                  </div>
                  <div className='font-Font text-[12px] sm:text[18px] inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 bg-purple60 hover:bg-purple65 rounded-md cursor-pointer w-48'>
                    View Property Details
                  </div>
                </div>
              </div>
            </div>
          ))}
        
        </Slider>

      
    </div>
  )
}
