import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import "./Modal.css";

export function Modal({setShowModal,formType}:{setShowModal:any,formType:string}) {

  const navigate = useNavigate()

  function yesBTNhandler(){
    setShowModal(false)
    navigate(`/${formType}`)
  }

  function noBTNhandler(){
    setShowModal(false)
    navigate("/")
  }
  return (
    <>{ 
        createPortal(
          <div className="modal-container">
            <h1>Are you in a safe place?</h1>
            <h3>
              Please make sure that you are safe while recording your
              observation
            </h3>
            <button onClick={yesBTNhandler}>YES</button>
            <button onClick={noBTNhandler}>NO</button>
          </div>,
          document.body)}
      
    </>
  );
}

//   return createPortal(
//     <div>
//       <h1>Are you in a safe place?</h1>
//       <h3>
//         Please make sure that you are safe while recording your observation
//       </h3>
//       <button onClick={() => setShowModal(false)}>YES</button>
//       <button onClick={() => setShowModal(false)}>NO</button>
//     </div>,
//     document.body
//   );
// }
