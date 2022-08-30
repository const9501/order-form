import React from 'react';
import {BasicModal} from "./components/BasicModal";
import Form from "./components/Form";

const App: React.FC = () => {
  return (
    <div>
      <BasicModal
        openButtonTitle='Place an order'
        openButtonVariant='contained'
        openButtonSize='large'
      >
        <Form/>
      </BasicModal>
    </div>
  );
};

export default App;