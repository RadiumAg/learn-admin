import React from 'react';
import Styles from './index.module.scss';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router';
import { Tag, TagProps } from 'antd';
import useHistoryStore from '../../store/history';

type HistoryItemProps = {
  name: string;
  path: string;
};

const HistoryItem: React.FC<HistoryItemProps> = (props) => {
  const nav = useNavigate();
  const loaction = useLocation();
  const deleteHistory = useHistoryStore((state) => state.deleteHistory);
  const { name, path } = props;
  const isActive = loaction.pathname === `/${path}`;

  const handleClick = () => {
    nav(path);
  };

  const handleDelete: TagProps['onClose'] = () => {
    deleteHistory({ name, path });
  };

  return (
    <Tag
      color={isActive ? 'processing' : undefined}
      closable
      className={classNames(Styles.historyItem)}
      onClick={handleClick}
      onClose={handleDelete}
    >
      {name}
    </Tag>
  );
};

export default HistoryItem;
