import React from "react";

import { FaUsers } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import Table from "./Table";
import Modal from "./Modal";

const Content = ({ open, transformValue }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div
      className="dashboard-content p-8"
      style={
        open
          ? { width: `calc( 100% - ${transformValue}px)` }
          : { width: "100%" }
      }
    >
      <h2 className="users-heading flex items-center gap-[1rem]">
        <FaUsers className="users-icon" />
        Users
      </h2>
      <div className="controls flex  justify-between mt-8 mb-4">
        <form className="controls-form flex ">
          <input type="text" className="py-2 px-4" />
          <button type="submit" className="btn flex items-center py-2 px-4">
            <span className="mr-2">Code</span>
            <RiArrowDownSLine />
          </button>
        </form>
        <div className="actions flex items-center gap-2">
          <button className="outline-btn py-2 px-4">Filters</button>
          <button className="dotted-btn flex items-center justify-center">
            <span className="-mt-2">...</span>
          </button>
          <div className="vertical"></div>
          <button
            className="fill-btn py-2 px-4"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add New Brand
          </button>
        </div>
      </div>
      <div>
        <Table />
      </div>
      <div>
        {showModal && (
          <Modal
            setOpenModal={setShowModal}
            open={open}
            transformValue={transformValue}
          />
        )}
      </div>
    </div>
  );
};

export default Content;
