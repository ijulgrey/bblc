import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/router";
import OtpInput from "react-otp-input";
import { request } from "../../utils/request";
import { FormWrapper } from "../../helpers/styled";
import OtpVerificationService from "./OtpVerificationService";
import { CardWrapper, OTPWrap, ResendWrap } from "./OtpVerificationStyle";
import { getPhone } from "../../helpers/cookie";

const { Title } = Typography;

const OtpVerificationPage = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleOTPChange = async (value) => {
    try {
      setOtp(value);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendOTP = async () => {
    let userPhone = getPhone();
    userPhone = `0${userPhone.slice(3)}`;

    const data = {
      phone: userPhone,
    };

    console.log(data);
    try {
      const response = await OtpVerificationService.resendOTP(data);
      if (response.status === 200 || response.status === 201) {
        notification.success({ message: "OTP sent to your phone number" });
      }
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
      const registerResponse = await request.post("/register", registerData);
      if (registerResponse.status === 201) {
        notification.success({
          message:
            "Registration success, please enter to your account by logging in",
          duration: 2,
          onClose: () => router.push("/login"),
        });
      }
    } catch (error) {
      notification.error({
        message: "Error occured when trying to registration",
      });
    }
  };

  const handleFinishFailed = (error) => {
    console.log(error);
  };

  return (
    <FormWrapper>
      <CardWrapper>
        <Card className="card">
          <h1 className="title">Percobaan OTP</h1>
          <Form
            name="otp"
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
              <OTPWrap>
                <OtpInput
                  value={otp}
                  onChange={handleOTPChange}
                  numInputs={4}
                  separator={<span>&nbsp;&nbsp;&nbsp;</span>}
                  isInputNum={true}
                  isInputSecure={true}
                />
              </OTPWrap>
            </Form.Item>

            <Form.Item>
              <React.StrictMode>
                <Button type="primary" htmlType="submit" className="submit">
                  Verifikasi
                </Button>
              </React.StrictMode>
            </Form.Item>
          </Form>
          <Divider />
          <ResendWrap onClick={handleResendOTP}>
            Kirim Ulang Kode OTP
          </ResendWrap>
        </Card>
      </CardWrapper>
    </FormWrapper>
  );
};

export default OtpVerificationPage;
