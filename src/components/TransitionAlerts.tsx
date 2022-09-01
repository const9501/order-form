import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

interface ITransitionAlertsProps {
  open: boolean,
  text: string,
  setOpenAlert: (open: boolean) => void
}

const TransitionAlerts: React.FC<ITransitionAlertsProps> = ({open, setOpenAlert, text}) => {
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {text}
          </Alert>
        </Collapse>
      </Box>
    </div>
  );
};

export default TransitionAlerts;
