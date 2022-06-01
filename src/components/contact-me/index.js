import React from "react";
import * as GlobalStyles from "../utils/globalStyles";
import { Form, Input } from "antd";

const ContactMe = () => {
  const [form] = Form.useForm();
  return (
    <GlobalStyles.Container id="contact">
      <GlobalStyles.HeadingOne>Contact Me</GlobalStyles.HeadingOne>
      <Form form={form} layout="horizontal" labelCol={10} wrapperCol={14}>
        <Form.Item
          name="name"
          label="Name: "
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email: "
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="contactNo"
          label="Contact No: "
          rules={[{ required: true, message: "Please enter your contact no" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message: "
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </GlobalStyles.Container>
  );
};

export default ContactMe;
