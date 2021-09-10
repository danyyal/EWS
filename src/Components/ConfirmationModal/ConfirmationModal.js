import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Cancel } from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/Check';
import './ConfirmationModal.css'


export default function ConfirmationModal({onClick, showModal, onRequestClose, title, text}) {

  return (
    <div>
      <Modal
        open={showModal}
        onClose={onRequestClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className='modalWrapper'>
          <h2 className="modalTitle" id="simple-modal-title">{title}</h2>
          
          <span className="modalText">{text}</span>

          <hr style={{
            padding:'3px 0rem',
            backgroundColor:'khaki',
            marginTop:'1.5rem'
          }}/>
          
          <div className="modalButtonsWrapper">
            <span onClick={()=>onRequestClose()} className="modalButton"  id="simple-modal-description">{<Cancel/>}Cancel</span>
            <span onClick={()=>{
              onClick();
              onRequestClose()
              }} className="modalButton" id="simple-modal-description">{<CheckIcon/>}Confirm</span>
          </div>

        </div>
      </Modal>
    </div>
  );
}
