import React, { useEffect, useState } from "react";
import { RegisterWrapper } from "./RegisterStyle";
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
import RegisterService from "./RegisterService";
import { useRouter } from "next/router";
import { setUserCookie } from "../../helpers/cookie";

const { Title } = Typography;

const RegisterPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountriesData();
  }, []);

  const getCountriesData = async () => {
    try {
      const countriesResponse = await RegisterService.getCountries({
        active: false,
      });

      if (countriesResponse.status === 200) {
        setCountries(countriesResponse.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCountryChange = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values) => {
    const registerData = {
      ...values,
      latlong: "22.370396, 472.280122",
      device_token: "privy-test-fe",
      device_type: 2,
    };

    try {
      const registerResponse = await RegisterService.register(registerData);
      if (registerResponse.status === 201) {
        const user = registerResponse.data.data.user;
        setUserCookie(user);

        notification.success({
          message:
            "Registration success, please enter OTP sent to your phone number",
          duration: 2,
          onClose: () => router.push("/otp-verification"),
        });
      }
    } catch (error) {
      notification.error({
        message: "Error occured when trying to register",
        description: error.response.data.error.errors.join(", "),
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
          Registration
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
          <Form.Item
            name="country"
            rules={[{ required: true, message: "Please select your country" }]}
          >
            <Select placeholder="Country" onChange={handleCountryChange}>
              {countries.map((country, i) => (
                <Select.Option value={country.code} key={i}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Divider />
          <Form.Item>
            <React.StrictMode>
              <Button type="primary" htmlType="submit" className="submit">
                Register
              </Button>
            </React.StrictMode>
          </Form.Item>
        </Form>
      </Card>
    </RegisterWrapper>
  );
};

export default RegisterPage;
