export default function DropdownFilter({ options, selectedOption, onSelectOption }) {
    return (
      <div className="relative inline-block w-full sm:w-4/12">
        <select
          value={selectedOption}
          onChange={(e) => onSelectOption(e.target.value)}
          className="block appearance-none w-full bg-gray08 border text-gray60 font-Font  border-none hover:border-gray-400 px-4 py-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-AbsoluteWhite">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.3 7.3L10 12l4.7-4.7-1.4-1.4L10 9.2 6.7 5.9z" />
          </svg>
        </div>
      </div>
    )
  }