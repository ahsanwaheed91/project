import React from "react";
import { Layout, Menu, Button } from "antd";
import {
  DashboardOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logout from "../../auth/Logout";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <DashboardOutlined /> Dashboard
          </Menu.Item>
          <Menu.Item key="2">
            <ProfileOutlined /> Profile
          </Menu.Item>
          <Menu.Item key="3">
            <SettingOutlined /> Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <h2 style={{ margin: 0 }}>Dashboard Header</h2>
            <Logout />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <h2> Welcome to your dashboard!</h2>
            <div className="links">
              {/* <Link to="/login"> <Button type='primary' > Login In</Button></Link>
            <Link to="/signup"> <Button type='primary' >Sign Up</Button></Link> */}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
