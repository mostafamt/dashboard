import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import Row from "./ModalRow";

export default function Modal({ setOpenModal, open, transformValue }) {
  return (
    <>
      <div
        className="fixed inset-0 z-10 overflow-y-auto"
        style={
          open
            ? { width: `calc( 100% - ${transformValue}px)` }
            : { width: "100%" }
        }
      >
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-6xl mx-auto bg-white rounded-md shadow-lg">
            <div className="modal">
              <div className="modal-header flex items-center justify-between p-4">
                <div className="modal-header-title flex items-center">
                  <BsPlusSquare className="icon-plus mr-2" />
                  <h4>Add New User</h4>
                </div>
                <button onClick={() => setOpenModal(false)}>
                  <AiOutlineClose className="modal-close-icon" />
                </button>
              </div>
              <hr />
              <div className="modal-content p-4">
                <div className="modal-table-headers p-4">
                  <div>
                    <h5>Email</h5>
                    <p>Type this user's email, to add and contact later. </p>
                  </div>
                  <div>
                    <h5>Jobtitle</h5>
                    <p>What's this new user's jobtitle?</p>
                  </div>
                  <div>
                    <h5>Code</h5>
                    <p>Enter this user's code.</p>
                  </div>
                  <div>
                    <h5>Authorized module</h5>
                    <p>
                      Which information module this user's authorized to use?
                    </p>
                  </div>
                </div>
                <Row />
                <Row />
                <Row />
              </div>
              <hr />
              <div className="model-footer">
                <button className="btn add-user-btn">Add new user input</button>
                <div className="take-actions">
                  <button
                    className="btn cancel-btn"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                  <button className="btn add-btn">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
