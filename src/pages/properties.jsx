import Star from '../assets/img/star.png'
import { Filters } from '../components/filters'
import { FeaturedSlider } from '../components/featuredSlider'

export const Properties = () => {
    return (

        <>
            <section className='md:px-16 px-5  py-8 lg:py-16 bg-gray10'>
                <img src={Star} className=' w-20' />
                <h1 className="mb-8  font-bold text-AbsoluteWhite font-Font sm:text-5xl md:mb-12 md:text-6xl ">Find Your Dream Property</h1>
                <p className="mb-8 leading-relaxed font-Font text-base text-gray60 md:mb-12 lg:w-5/5 xl:text-lg">Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                <Filters />
            </section>
            <div className=' max-w-full p-5 mb-24 md:px-16 text-AbsoluteWhite font-Font flex flex-col gap-6'>
        <img src={Star} className=' w-16' />
        <h1 className=' font-bold tracking-wide'> Discover a World of Possibilities</h1>
        <div className=' w-full flex justify-between align-center gap-12' >
            <p className=' text-gray50'>Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.</p>
            
        </div>
        <FeaturedSlider />
       
    </div>
        </>
        
    )
}