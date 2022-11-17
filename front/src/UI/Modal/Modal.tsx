import React from 'react';

import "./Modal.scss"

interface ModalProps {
  visible: boolean
  setVisible: (state: boolean) => void
  children?: React.ReactNode | JSX.Element
  modalTitle?: string
  className?: string
};

export const Modal: React.FC<ModalProps> = ({
  visible,
  setVisible,
  children,
  modalTitle,
  className
}) => {

  return (
    <>
      {visible && (
        <div
          className={"modal" + ( className ? " "+className : "")}
          onMouseDown={() => {setVisible(false)}}
        >
          <div
            className="modal__body"
            onMouseDown={(e)=>{e.stopPropagation()}}
          >
            {modalTitle && (
              <div className="modal__header">
                {modalTitle}
              </div>
            )}
            <div className="modal__content">
              {children}
            </div>

          </div>
        </div>
      )}
    </>
  );
};
