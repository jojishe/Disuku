import React from "react";
import { Menu } from "antd";

const Header = () => {
  return (
    <header>
      <h5>Jo极社的 Header</h5>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <a href="#home">首页</a>
        </Menu.Item>
        <Menu.Item key="about">
          <a href="#about">关于我们</a>
        </Menu.Item>
        <Menu.Item key="services">
          <a href="#services">服务</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="#contact">联系我们</a>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default React.memo(Header);
