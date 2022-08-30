import React from 'react';
import Typography from "@mui/material/Typography";
import {Variant} from "@mui/material/styles/createTypography";

interface IFormTitleProps {
  title: string,
  variant: Variant
}

const FormTitle: React.FC<IFormTitleProps> = ({title, variant}) => {
  return (
    <Typography variant={variant}>{title}</Typography>
  );
};

export default FormTitle;