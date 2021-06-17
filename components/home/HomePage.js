import React from "react";
import { Menu, Layout } from "antd";
import { ContentWrapper } from "../../helpers/styled";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;

const HomePage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" onClick={() => router.push("/register")}>
            Register
          </Menu.Item>
          <Menu.Item key="2" onClick={() => router.push("/login")}>
            Login
          </Menu.Item>
          <Menu.Item key="3" onClick={() => router.push("/delete-account")}>
            Delete Account
          </Menu.Item>
        </Menu>
      </Header>
      <ContentWrapper>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "80vh" }}
          >
            Privy Frontend Engineer Test
          </div>
        </Content>
      </ContentWrapper>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomePage;
