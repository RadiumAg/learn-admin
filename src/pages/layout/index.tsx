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
} from '@ant-design/icons';
import { HistoryItem, KeepAlive } from '@/components';
import { useLocation, useNavigate, useOutlet } from 'react-router';
import { useHistoryStore } from '@/store';
import { findItem } from '@/utils';
import classNames from 'classnames';
import { ItemType } from 'antd/es/menu/interface';

const AdminLayout: React.FC = () => {
  const nav = useNavigate();
  const outlet = useOutlet();
  const location = useLocation();
  const selectKeys = location.pathname.split('/');
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
        },
      ],
    },
    {
      key: 'user',
      label: '用户管理',
      icon: <UserOutlined />,
      children: [
        {
          key: 'manage',
          label: '用户权限',
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

  const handleMenuSelect: MenuProps['onSelect'] = (event) => {
    const { keyPath } = event;
    const targetMenu = findItem(tabs, event.keyPath)!;
    if (!targetMenu || !targetMenu.label) return;
    const path = keyPath.toReversed().join('/');

    setHistory({ path, name: targetMenu.label.toString() });
    nav(path);
  };

  return (
    <Layout className={Styles.layout}>
      <Sider trigger={null} collapsed={collapsed}>
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          items={tabs}
          selectedKeys={selectKeys}
          onSelect={handleMenuSelect}
        />
      </Sider>
      <Layout>
        <Header
          style={{ background: colorBgContainer }}
          className={classNames('h-auto', Styles.header)}
        >
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div className={classNames('flex')}>{historyItem}</div>
        </Header>
        <Content
          style={{
            padding: 10,
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
