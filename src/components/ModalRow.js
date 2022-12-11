import React from "react";
import { HiMail, HiUser, HiKey, HiCube } from "react-icons/hi";
import { RiDeleteBin7Line } from "react-icons/ri";

const Row = ({
  number,
  firstElement,
  displayNumber,
  removeUserInputHandler,
}) => {
  return (
    <div>
      <div
        className="box-hline px-4"
        style={firstElement ? { display: "none" } : { display: "block" }}
      >
        <div className="hline mx-4"></div>
      </div>

      <div
        className="modal-table-row"
        style={firstElement ? { marginTop: "1rem" } : { marginTop: "0" }}
      >
        <div className="row-number my-0">{displayNumber}</div>
        <div className="cell flex mr-4">
          <span className="p-1">
            <HiMail className="cell-icon" />
          </span>
          <input
            type="text"
            className="px-2"
            placeholder="Example@example.com"
          />
        </div>
        <div className="cell flex mr-4">
          <span className="p-1">
            <HiUser className="cell-icon" />
          </span>
          <input
            type="text"
            className="px-2"
            placeholder="CFO, Accountant, etc"
          />
        </div>
        <div className="cell flex mr-4">
          <span className="p-1">
            <HiKey className="cell-icon" />
          </span>
          <input type="text" className="px-2" placeholder="#000000000" />
        </div>
        <div className="cell flex">
          <span className="p-1">
            <HiCube className="cell-icon" />
          </span>
          <input type="text" className="px-2" />
          <button
            className="delete-btn p-1 ml-2"
            onClick={() => removeUserInputHandler(number)}
          >
            <RiDeleteBin7Line className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Row;
