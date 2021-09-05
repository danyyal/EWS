import React from 'react';
import './AddUserModal.css';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="usermodalOverlay" onClick={() => toggleModal()} />,
    <div className="usermodalWrap">
      <div className="userModal">
        {children}
      </div>
    </div>
  ];
}

export default Modal;