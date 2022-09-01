import React, {useState} from 'react';
import {BasicModal} from "./components/BasicModal";
import Form from "./components/Form";
import TransitionAlerts from "./components/TransitionAlerts";

const App: React.FC = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [openAlert, setOpenAlert] = useState(true);


  return (
    <div>
      <BasicModal
        openButtonTitle='Place an order'
        openButtonVariant='contained'
        openButtonSize='large'
        open={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <Form handleClose={handleClose}/>
      </BasicModal>
    </div>
  );
};

export default App;