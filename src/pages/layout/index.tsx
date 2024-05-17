import React from 'react';
import Styles from './index.module.scss';
import { Layout, Menu, Button, theme, MenuProps } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ReadFilled,
  FilePdfFilled,
} from '@ant-design/icons';
import { KeepAlive } from '../../components';
import { useNavigate, useOutlet } from 'react-router';

type MenuItem = Required<MenuProps>['items'][number];

const AdminLayout: React.FC = () => {
  const nav = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const tabs: MenuItem[] = [
    {
      key: 'home',
      label: '首页',
      icon: <UserOutlined />,
    },
    {
      key: 'read',
      label: '阅读',
      icon: <ReadFilled />,
      children: [
        {
          key: 'pdf',
          label: '免费Pdf',
          icon: <FilePdfFilled />,
        },
      ],
    },
  ];

  const {
    token: { colorBgContainer },
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
          onSelect={(event) => {
            nav(event.keyPath.reverse().join('/'));
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
          <KeepAlive>{outlet}</KeepAlive>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
