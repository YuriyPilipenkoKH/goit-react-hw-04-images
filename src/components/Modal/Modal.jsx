import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onModalClose, picture }) => {
  useEffect(() => {
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
       return onModalClose();
      }
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 27) {
       return onModalClose();
      }
    };

    const body = document.body;
    body.style.overflow = 'hidden';

    window.addEventListener('click', handleBackdropClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      body.style.overflow = 'unset';
      window.removeEventListener('click', handleBackdropClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handlePictureClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <Overlay onClick={onModalClose} className="overlay">
      <ModalImg className="modal">
        <img src={picture} alt="#" onClick={handlePictureClick}/>
      </ModalImg>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Modal;