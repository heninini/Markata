import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  width: "40%",
  height: "60%",
  overflow: "auto",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  borderRadius: "7px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const test = {
  width: "80%",
  height: "70%",
  overflow: "auto",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  borderRadius: "7px",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    // <>
    //   <div style={test}>
    //     {children}
    //     <br />
    //     <button className="btn-modal" onClick={onClose}>
    //       Close
    //     </button>
    //   </div>
    // </>,
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h2>Terms and Conditions</h2>
        {children}
        <br />
        <div style={{ textAlign: "center" }}>
          <button className="btn-modal" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>,

    // <>
    //   <div
    //     class="modal fade"
    //     id="exampleModalScrollable"
    //     tabindex="-1"
    //     role="dialog"
    //     aria-labelledby="exampleModalScrollableTitle"
    //     aria-hidden="true"
    //   >
    //     <div class="modal-dialog modal-dialog-scrollable" role="document">
    //       <div class="modal-content">
    //         <div class="modal-header">
    //           <h5 class="modal-title" id="exampleModalScrollableTitle">
    //             Terms and Conditions
    //           </h5>
    //         </div>
    //         {children}
    //         <br />
    //         <div style={{ textAlign: "center" }}>
    //           <button className="btn-modal" onClick={onClose}>
    //             Close
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>,
    document.getElementById("portal")
  );
}
