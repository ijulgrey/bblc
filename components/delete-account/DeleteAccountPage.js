import React from "react";
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  notification,
  Typography,
} from "antd";

import { FormWrapper } from "../../helpers/styled";
import DeleteAccountService from "./DeleteAccountService";

const { Title } = Typography;

const DeleteNumberPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const data = {
      ...values,
    };

    try {
      const deleteAccountResponse = await DeleteAccountService.removeAccount(
        data
      );
      if (deleteAccountResponse.status === 201) {
        notification.success({
          message: "Delete Account Success",
          duration: 2,
          onClose: () => form.resetFields(),
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
      <Card className="card">
        <Title level={4} className="title">
          Delete Account
        </Title>
        <Form
          name="delete-number"
          onFinish={handleSubmit}
          onFinishFailed={handleFinishFailed}
          form={form}
        >
          <Form.Item
            name="phone"
            rules={[{ required: true, message: "Please input phone number" }]}
          >
            <Input placeholder="Phone" />
          </Form.Item>

          <Divider />
          <Form.Item>
            <React.StrictMode>
              <Button type="primary" htmlType="submit" className="submit">
                Delete
              </Button>
            </React.StrictMode>
          </Form.Item>
        </Form>
      </Card>
    </FormWrapper>
  );
};

export default DeleteNumberPage;
