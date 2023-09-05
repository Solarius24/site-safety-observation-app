import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import "./Modal.css";
import { Dispatch, SetStateAction} from "react";

interface modalProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  formType: string;
}

export function Modal({ setShowModal, formType }: modalProps) {
  const navigate = useNavigate();

  function yesBTNhandler() {
    setShowModal(false);
    navigate(`/${formType}`);
  }

  function noBTNhandler() {
    setShowModal(false);
    navigate("/");
  }
  return (
    <>
      {createPortal(
        <div className="modal-container">
          <div className="modal">
            <h1>Are you in a safe place?</h1>
            <h3>
              Please make sure that you are safe while recording your
              observation
            </h3>
            <button onClick={yesBTNhandler}>YES</button>
            <button onClick={noBTNhandler}>NO</button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
