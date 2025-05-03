"use client";

import useCountries from "@/app/hooks/useCountries";
import Select from "react-select";

export type TSelectCountryValue = {
  value: string;
  label: string;
};

interface ISelectCountryProps {
  value?: TSelectCountryValue;
  onChange: (value: TSelectCountryValue) => void;
}

const SelectCountry:React.FC<ISelectCountryProps> = ({value,onChange}) => {
    const {getAll} = useCountries();
  return (
    <>
    <Select
    options={getAll()}
    placeholder="AnyWhere"
    isClearable
    value={value}
    onChange={(value)=> onChange(value as TSelectCountryValue)}
    />
    </>
  )
};

export default SelectCountry;
