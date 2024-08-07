import Dropdown from "./dropdown"
import Vector from '../assets/img/icons/Vector.svg'


export const Filters = () => {

    return (
        <div className=' w-full flex flex-col items-center justify-center space-y-3'>
            <div className="bg-gray15 p-2 rounded-lg  sm:rounded-t-lg w-full sm:w-8/12  flex flex-row items-center justify-center">
                <div className=" w-full  bg-gray08 flex flex-row p-2 rounded-t-sm">
                <input type="text" placeholder="Search for a property"  className=" font-Font w-full  border-none bg-transparent px-3 py-2 placeholder:text-gray60 placeholder:font-Font  sm:text-xl text-AbsoluteWhite outline-none transition duration-100 focus:none" />
                <div className=" flex flex-row space-x-2 rounded-lg bg-purple60 hover:bg-purple65 px-4 py-3 text-center text-sm font-semibold text-AbsoluteWhite outline-none ring-indigo-300 transition duration-100  focus-visible:ring active:text-gray-700 md:text-base no-underline"> <img src={Vector} /> <p className=' hidden sm:block'>Search</p></div>
                </div>
            </div>
            <Dropdown />
        </div>

    )
}