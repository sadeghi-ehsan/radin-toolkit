import { useState } from "react";
import { Layout as AntLayout, Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import routes from "../page-route.jsx";

const Layout = () => {
  const { Header, Content, Footer, Sider } = AntLayout;
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntLayout className="min-h-screen">
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="flex bg-coolGray-800 text-coolGray-400 h-8 justify-center items-center m-4 p-2 overflow-hidden text-xs">
          Radin Toolkit
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {routes.map(route => (
            <Menu.Item key={route.path}>
              <Link to={route.path}>{route.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <AntLayout className="site-layout">
        <Header className="p-0" />
        <Content className="bg-card-bg p-4">
          <Routes>
            {routes.map(route => (
              <Route key={route.title} path={route.path} element={route.component()} />
            ))}
          </Routes>
        </Content>
        <Footer className="flex items-center">Radin ©2021</Footer>
      </AntLayout>
    </AntLayout>
  );
};

export default Layout;
