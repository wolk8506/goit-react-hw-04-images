import { createPortal } from 'react-dom';
import s from 'components/Modal/Modal.module.css';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ toggleModal, imgModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={imgModal} alt="" />
      </div>
    </div>,
    modalRoot
  );
}
