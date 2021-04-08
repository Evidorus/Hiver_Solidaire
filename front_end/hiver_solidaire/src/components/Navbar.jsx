import React, {useState} from "react";
import {Link} from "react-router-dom"
import { Menu } from "antd";
import 'antd/dist/antd.css'
import {
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const rootSubmenuKeys = "sub1";

export default function Navbar() {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
    >
      <SubMenu key="sub1" icon={<MailOutlined />} title="Hiver Solidaire">
        <Menu.Item key="1"><Link to='/signup'>Signup</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/login'>Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/agenda'>Agenda</Link></Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
