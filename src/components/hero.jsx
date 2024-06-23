import HeroImage from '../assets/img/hero_image.png'

export const Hero = () => {
    return (
      <div className="  py-8 lg:py-16  ">
        
        <div className=" flex flex-col-reverse md:flex-row lg:flex-row w-full px-16 items-center justify-center">
          <div className=" w-full lg:w-[50%] ">
            
                <h2 className="mb-5 font-Font text-3xl font-bold tracking-tight text-AbsoluteWhite sm:text-4xl sm:leading-none  ">
                Discover Your Dream Property with Estatein
                </h2>
                <p className="pr-5 mb-5 font-Font text-base text-gray60 md:text-lg">
                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                </p>
                <div className="flex flex-col items-center lg:flex-row gap-4  justify-start ">
                <a
                    className="inline-flex items-center justify-center bg-gray15 h-12 px-6 font-medium tracking-wide text-AbsoluteWhite transition duration-200 rounded-md  font-Font cursor-pointer w-full "
                >
                Learn more
                </a>
                <a
                    className="inline-flex items-center justify-center bg-purple60 h-12 px-6 font-semibold text-AbsoluteWhite transition-colors duration-200  font-Font rounded-md cursor-pointer w-full"
                >
                    Browse Properties
                </a>
                </div>

                <div className=" grid grid-flow-col-3 lg:grid-flow-col sm:grid-flow-col gap-4 mt-10  ">
                  <div className=" bg-gray10  font-Font p-4  rounded-xl flex flex-col gap items-center lg:items-start sm:items-start  ">
                    <h2 className=' text-AbsoluteWhite'>200+</h2>
                    <p className=' text-gray60 text-xs'>Happy Customers</p>
                  </div>
                  <div className="bg-gray10  font-Font p-4 rounded-xl flex flex-col gap items-center lg:items-start sm:items-start ">
                    <h2 className=' text-AbsoluteWhite'>10k+</h2>
                    <p className=' text-gray60 text-xs'>Properties For Clients</p>
                  </div>
                  <div className="bg-gray10  font-Font p-4 rounded-xl flex flex-col gap items-center lg:items-start sm:items-start  col-span-2 sm:col-span-1 lg:col-span-1  ">
                    <h2 className=' text-AbsoluteWhite'>16+</h2>
                    <p className=' text-gray60 text-xs'>Years Of Experience</p>
                  </div>
                  
                 </div>
                 </div>
        <div className=" w-[100%] lg:w-[50%] ">
          
          <img
            className="object-cover w-full"
            src={HeroImage}
            alt=""
          />
        </div>
        </div>
      </div>
    );
  };
