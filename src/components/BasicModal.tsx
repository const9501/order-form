import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';


interface IBasicModalProps {
  children: JSX.Element,
  openButtonVariant?: 'text' | 'outlined' | 'contained',
  openButtonSize?: 'small' | 'large' | 'medium',
  openButtonTitle: string,
  open: boolean,
  handleOpen: () => void,
  handleClose: () => void,
}


export const BasicModal: React.FC<IBasicModalProps> = (
  {
    children,
    openButtonVariant,
    openButtonSize,
    openButtonTitle,
    open,
    handleOpen,
    handleClose
  }
) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div className='modal'>
      <Button
        onClick={handleOpen}
        variant={openButtonVariant}
        size={openButtonSize}
      >
        {openButtonTitle}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
