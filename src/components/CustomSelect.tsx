import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import Box from "@mui/material/Box";
import {useFormContext} from "react-hook-form";

interface IMenuItem {
  value: string | number,
  label: string
}

interface ICustomSelectProps {
  className: string,
  title: string,
  titleWidth: string | number,
  selectLabel: string,
  selectWidth: string | number,
  menuItems: IMenuItem[],
  name: string,
  productPrice: number,
  setProductPrice: (productPrice: number) => void,
  error?: string
}

const CustomSelect: React.FC<ICustomSelectProps> = (
  {
    className,
    title,
    titleWidth,
    selectLabel,
    selectWidth,
    menuItems,
    name,
    productPrice,
    setProductPrice,
    error
  }
) => {

  const {
    register, formState: {errors}
  } = useFormContext()

  const handleChange = (event: SelectChangeEvent) => {
    setProductPrice(+event.target.value)
  }

  return (
    <div className={className}>
      <Typography sx={{width: titleWidth}}>{title}</Typography>

      <Box sx={{width: selectWidth}}>
        <FormControl fullWidth error={!!error}>
          <InputLabel>{selectLabel}</InputLabel>
          <Select
            className={error && 'error-field'}
            label={selectLabel}
            defaultValue=''
            {...register(name)}
            onChange={handleChange}
          >
            {menuItems.map((item, index) =>
              <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
            )}
          </Select>
          <Typography className='select-error-message'>{error}</Typography>
        </FormControl>
      </Box>
    </div>
  );
};

export default CustomSelect;