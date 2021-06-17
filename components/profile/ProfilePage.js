import React, { useEffect } from "react";
import Image from "next/image";
import { Menu, Layout, Row, Col } from "antd";
import { ContentWrapper, MenuWrapper } from "../../helpers/styled";
import router, { useRouter } from "next/router";
import ProfileService from "./ProfileService";
import { getToken, removeCookie } from "../../helpers/cookie";

const { Header, Content, Footer } = Layout;

const ProfilePage = () => {
  const router = useRouter();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const response = await ProfileService.getProfile();
      if (response.status === 200 || response.status === 201) {
        console.log(response.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await ProfileService.logout({
        access_token: getToken(),
        confirm: 1,
      });
      if (response.status === 201 || response.status === 200) {
        removeCookie();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <MenuWrapper>
          <Menu theme="dark" className="menu" mode="horizontal">
            <Menu.Item key="1" onClick={handleLogout}>
              Logout
            </Menu.Item>
          </Menu>
        </MenuWrapper>
      </Header>
      <ContentWrapper>
        <Content className="site-layout">
          <div className="site-layout-background">
            <Row>
              <Col xs="12">
                {/* <Image
                  src="https://via.placeholder.com/400x200"
                  alt="Picture of the author"
                  width="400"
                  height="200"
                  layout="responsive"
                /> */}
              </Col>
            </Row>
          </div>
        </Content>
      </ContentWrapper>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default ProfilePage;
