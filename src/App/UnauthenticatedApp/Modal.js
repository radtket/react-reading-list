import React, { useState, cloneElement } from "react";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import VisuallyHidden from "@reach/visually-hidden";
import { Dialog } from "@reach/dialog";
import CircleButton from "../../styles/CircleButton";

const Modal = ({ button, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {cloneElement(button, { onClick: () => setIsOpen(true) })}
      <Dialog isOpen={isOpen}>
        <div css={{ display: "flex", justifyContent: "flex-end" }}>
          <CircleButton onClick={() => setIsOpen(false)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </div>
        {children}
      </Dialog>
    </>
  );
};

export default Modal;
