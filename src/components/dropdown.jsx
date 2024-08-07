import DropdownFilter from "./dropdownFilter";
import { useState } from "react";
export default function Dropdown() {
    const [selectedLocation, setSelectedLocation] = useState('Locations');
    const [selectedPropertyType, setSelectedPropertyType] = useState('Property Type');
    const [selectedPricingRange, setSelectedPricingRange] = useState('Pricing Range');
    const [selectedPropertySize, setSelectedPropertySize] = useState('Property Size');
    const [selectedBuildYear, setSelectedBuildYear] = useState('Build Year');

    // Options for each filter
    const locations = ['Locations', 'New York', 'California', 'Texas', 'Florida'];
    const propertyTypes = ['Property Type', 'Apartment', 'House', 'Villa', 'Townhouse'];
    const pricingRanges = ['Pricing Range', '$0 - $100K', '$100K - $500K', '$500K - $1M', '$1M+'];
    const propertySizes = ['Property Size', '0 - 1000 sqft', '1000 - 2000 sqft', '2000 - 3000 sqft', '3000+ sqft'];
    const buildYears = ['Build Year', '2020+', '2010-2019', '2000-2009', 'Before 2000'];

  return (
    <div className="bg-gray15 p-2 rounded-lg w-full sm:w-9/12  flex flex-col sm:flex-row items-center justify-center sm:space-x-2 space-y-2">
                <DropdownFilter
                options={locations}
                selectedOption={selectedLocation}
                onSelectOption={setSelectedLocation}
                />
                <DropdownFilter
                options={propertyTypes}
                selectedOption={selectedPropertyType}
                onSelectOption={setSelectedPropertyType}
                />
                <DropdownFilter
                options={pricingRanges}
                selectedOption={selectedPricingRange}
                onSelectOption={setSelectedPricingRange}
                />
                <DropdownFilter
                options={propertySizes}
                selectedOption={selectedPropertySize}
                onSelectOption={setSelectedPropertySize}
                />
                <DropdownFilter
                options={buildYears}
                selectedOption={selectedBuildYear}
                onSelectOption={setSelectedBuildYear}
                />
            </div>
  )
}
