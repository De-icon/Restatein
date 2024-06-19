import HeroImage from '../assets/img/hero_image.png'
import FlatAbstract from '../assets/img/flat_Abstract.png'

export const Hero = () => {
    return (
      <div className="relative flex flex-col-reverse py-16 lg:flex-col ">
        
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 ">
            
                <h2 className="mb-5 font-Font text-3xl font-bold tracking-tight text-AbsoluteWhite sm:text-4xl sm:leading-none text-center  lg:text-left ">
                Discover Your Dream Property with Estatein
                </h2>
                <p className="pr-5 mb-5 font-Font text-base text-gray60 md:text-lg text-center  lg:text-left">
                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                </p>
                <div className="flex flex-col items-center lg:flex-row  justify-start space-y-5 space-x-5 ">
                <a
                    className="inline-flex items-center justify-center bg-gray15 h-12 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 rounded-md shadow-md font-Font cursor-pointer "
                >
                Learn more
                </a>
                <a
                    className="inline-flex items-center bg-purple60 h-12 px-6 font-semibold text-AbsoluteWhite transition-colors duration-200  font-Font rounded-md cursor-pointer"
                >
                    Browse Properties
                </a>
                </div>

                <div>
                    <h2></h2>
                    <p></p>
                </div>
          </div>
        </div>
        <div className=" inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute  xl:px-0">
          
          <img
            className="object-cover w-[90%] lg:w-full  h-100 rounded lg:rounded-none lg:shadow-none md:h-100 lg:h-full z-0"
            src={HeroImage}
            alt=""
          />
        </div>
      </div>
    );
  };
