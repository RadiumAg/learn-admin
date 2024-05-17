import React from 'react';
import Styles from './index.module.scss';
import { Layout, Menu, Button, theme } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ReadFilled,
  FilePdfFilled,
} from '@ant-design/icons';
import { HistoryItem, KeepAlive } from '../../components';
import { useNavigate, useOutlet } from 'react-router';
import useHistoryStore from '../../store/history';
import { findItem } from '../../utils';
import { ItemType } from 'antd/es/menu/hooks/useItems';

const AdminLayout: React.FC = () => {
  const nav = useNavigate();
  const outlet = useOutlet();
  const [history, setHistory] = useHistoryStore((state) => [
    state.history,
    state.setHistory,
  ]);
  const [collapsed, setCollapsed] = React.useState(false);
  const tabs: ItemType[] = [
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
  const historyItem = React.useMemo(() => {
    return history.map((item) => {
      return <HistoryItem key={item.path} {...item} />;
    });
  }, [history]);

  return (
    <Layout className={Styles.layout}>
      <Sider trigger={null} collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={tabs}
          onSelect={(event) => {
            const { keyPath } = event;
            const targetMenu = findItem(tabs, event.keyPath) as any;
            const path = keyPath.reverse().join('/');
            setHistory({ path, name: targetMenu.label, active: false });
            nav(path);
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

          <div>{historyItem}</div>
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
