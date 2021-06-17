import React, { useEffect, useState } from "react";
import { RegisterWrapper } from "./LoginStyle";
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  notification,
  Typography,
  Select,
} from "antd";
import LoginService from "./LoginService";
import { useRouter } from "next/router";
import { setCookie, setSession } from "../../helpers/cookie";

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async (values) => {
    const loginData = {
      ...values,
      latlong: "000.000",
      device_token: "frontend-test",
      device_type: 2,
    };

    try {
      const loginResponse = await LoginService.login(loginData);
      if (loginResponse.status === 201) {
        setSession(loginResponse.data.data.user);
        router.push("/profile");
      }
    } catch (error) {
      console.log(error.response);
      notification.error({
        message: "Terjadi kesalahan saat login",
      });
    }
  };

  const handleFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <RegisterWrapper>
      <Card className="card">
        <Title level={4} className="title">
          Login
        </Title>
        <Form
          name="register"
          className="login-form"
          onFinish={handleSubmit}
          onFinishFailed={handleFinishFailed}
          form={form}
        >
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number" },
            ]}
          >
            <Input placeholder="Phone" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Divider />
          <Form.Item>
            <React.StrictMode>
              <Button type="primary" htmlType="submit" className="submit">
                Login
              </Button>
            </React.StrictMode>
          </Form.Item>
        </Form>
      </Card>
    </RegisterWrapper>
  );
};

export default Login;
