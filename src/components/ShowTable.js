import { Table } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // // specify the condition of filtering result
    // // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Email",
    dataIndex: "email",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.email.length - b.age.length,
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    // filters: [
    //   {
    //     text: "London",
    //     value: "London",
    //   },
    //   {
    //     text: "New York",
    //     value: "New York",
    //   },
    // ],
    // filterMultiple: false,
    // onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
];

// const data = ({state}) => ({
//   users: state.users
// })

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const ShowTable = ({ users }) => {
  console.log("users", users)
  return (
    <Table columns={columns} dataSource={users} onChange={onChange} />
  );
};



export default ShowTable;
