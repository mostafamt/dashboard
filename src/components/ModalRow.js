import React from "react";
import { HiMail, HiUser, HiKey, HiCube } from "react-icons/hi";
import { RiDeleteBin7Line } from "react-icons/ri";

const Row = () => {
  return (
    <div>
      <div className="modal-table-row p-4">
        <div className="cell flex mr-4">
          <span className="p-1">
            <HiMail className="cell-icon" />
          </span>
          <input type="text" className="px-2" />
        </div>
        <div className="cell flex mr-4">
          <span className="p-1">
            <HiUser className="cell-icon" />
          </span>
          <input type="text" className="px-2" />
        </div>
        <div className="cell flex mr-4">
          <span className="p-1">
            <HiKey className="cell-icon" />
          </span>
          <input type="text" className="px-2" />
        </div>
        <div className="cell flex">
          <span className="p-1">
            <HiCube className="cell-icon" />
          </span>
          <input type="text" className="px-2" />
          <button className="delete-btn p-1 ml-2">
            <RiDeleteBin7Line className="delete-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Row;
