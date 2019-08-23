import React, { useState, cloneElement } from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { Dialog } from "@reach/dialog";
import { Box } from "@material-ui/core";
import CircleButton from "../../styles/CircleButton";

const Modal = ({ button, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {cloneElement(button, { onClick: () => setIsOpen(true) })}
      <Dialog isOpen={isOpen}>
        <Box display="flex" justifyContent="flex-end">
          <CircleButton onClick={() => setIsOpen(false)}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </Box>
        {children}
      </Dialog>
    </>
  );
};

export default Modal;
