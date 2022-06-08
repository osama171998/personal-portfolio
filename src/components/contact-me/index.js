import React from "react";
import * as GlobalStyles from "../utils/globalStyles";
import * as Styles from "./style";
import { Form, Input, Button } from "antd";
import { StateContext } from "../../context/index";
// import { SMTPClient } from "emailjs";
const ContactMe = () => {
  // const client = new SMTPClient({
  //   user: "Osama Idrees",
  //   password: "Osam@12345",
  //   host: "smtp.rockharipur@gmail.com.com",
  //   ssl: true,
  // });
  const { state } = React.useContext(StateContext);
  const [form] = Form.useForm();

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <GlobalStyles.Container id="contact" data-aos="fade-in">
      <GlobalStyles.HeadingOne>Contact Me</GlobalStyles.HeadingOne>
      <Styles.FormContainer darkMode={state.darkMode}>
        <Form
          form={form}
          onFinish={submitForm}
          layout="horizontal"
          labelCol={10}
          wrapperCol={14}
        >
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
            rules={[
              { required: true, message: "Please enter your contact no" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message: "
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={10} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Styles.FormContainer>
    </GlobalStyles.Container>
  );
};

export default ContactMe;
