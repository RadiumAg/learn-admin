import React from 'react';
import Styles from './index.module.scss';
import { Layout, Menu, Button, theme } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import type { MenuItemType } from 'antd/es/menu/hooks/useItems';
import Sider from 'antd/es/layout/Sider';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { useNavigate, useOutlet } from 'react-router';

const AdminLayout: React.FC = () => {
  const nav = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const tabs: MenuItemType[] = [
    {
      key: 'home',
      label: '首页',
      icon: <UserOutlined />,
    },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const outlet = useOutlet();

  return (
    <Layout className={Styles.layout}>
      <Sider trigger={null} collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={tabs}
          onDeselect={(event) => {
            nav(event.key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {outlet}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
