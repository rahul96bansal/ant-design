import { Form, Input, InputNumber, Button } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { connect } from "react-redux";
import { fieldType } from "../redux/actions";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const AddUser = ({ addUser, user, updateField }) => {
  const [form] = Form.useForm();
  let email;

  const onFinish = (values) => {
    console.log(values.user);
    addUser(values.user)
    form.resetFields();
  };

  return (
    <Form
      {...layout}
      form={form}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      className="test"
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          onChange={(e) => updateField(fieldType.UPDATE_NAME, e.target.value)}
          value={user.name}
          // ref={(value) => (name = value)}
        />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input
          // onChange={(e) => (email=e.target.value)}
          value={user.email}
          onChange={(e) => updateField(fieldType.UPDATE_EMAIL, e.target.value)}
          // ref={(value) => (email = value)}
        />
      </Form.Item>
      <Form.Item
        name={["user", "age"]}
        label="Age"
        rules={[
          {
            type: "number",
            required: true,
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber
          //  onChange={(e) => (age=e.target.value)}
          // value={user.age}
          // ref={(value) => (age = value)}
          onChange={(e) => updateField(fieldType.UPDATE_AGE, e)}
        />
      </Form.Item>
      <Form.Item
        name={["user", "address"]}
        label="Address"
        rules={[{ required: true }]}
      >
        <Input.TextArea
          //  onChange={(e) => (address=e.target.value)}
          value={user.address}
          // ref={(value) => (address = value)}
          onChange={(e) =>
            updateField(fieldType.UPDATE_ADDRESS, e.target.value)
          }
        />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// const MapStateToProps = (state) => ({
//   user: state.user,
// });

export default AddUser;
