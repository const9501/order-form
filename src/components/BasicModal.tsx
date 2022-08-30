import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {useState} from "react";

interface IBasicModalProps {
  children: JSX.Element,
  openButtonVariant?: 'text' | 'outlined' | 'contained',
  openButtonSize?: 'small' | 'large' | 'medium',
  openButtonTitle: string
}


export const BasicModal: React.FC<IBasicModalProps> = (
  {
    children,
    openButtonVariant,
    openButtonSize,
    openButtonTitle
  }
) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
