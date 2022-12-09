import React from "react";
import { Divider, Radio, Table } from "antd";

import { columns, dataSource } from "./data";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const ITable = () => {
  const [selectionType, setSelectionType] = React.useState("checkbox");

  return (
    <div className="mtable">
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      ></Radio.Group>
      {/* <Divider /> */}
      <Table
        bordered
        pagination={{ position: ["bottomCenter"] }}
        rowSelection={{
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default ITable;
