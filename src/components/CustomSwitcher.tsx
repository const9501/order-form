import React, {Dispatch, SetStateAction} from 'react';
import Typography from "@mui/material/Typography";
import {Switch} from "@mui/material";
import {useFormContext} from "react-hook-form";


interface ICustomSwitcherProps {
  label?: string,
  className?: string,
  name: string,
  value: number
  setFeaturePrice: Dispatch<SetStateAction<number>>,
}

const CustomSwitcher: React.FC<ICustomSwitcherProps> = (
  {
    label,
    className,
    name,
    value,
    setFeaturePrice,
  }
) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFeaturePrice((prev) => +prev + +event.target.value);
    } else setFeaturePrice((prev) => +prev - +event.target.value);

    console.log(typeof event.target.value);
  }


  const {register} = useFormContext()

  return (
    <div className={className}>
      <Typography>{label}</Typography>
      <Switch
        {...register(name)}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default CustomSwitcher;