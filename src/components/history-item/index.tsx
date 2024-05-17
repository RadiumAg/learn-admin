import React from 'react';
import Styles from './index.module.scss';
import classNames from 'classnames';
import { useNavigate } from 'react-router';

type HistoryItemProps = {
  name: string;
  path: string;
};

const HistoryItem: React.FC<HistoryItemProps> = (props) => {
  const nav = useNavigate();
  const { name, path } = props;

  const handleClick = () => {
    nav(path);
  };

  return (
    <div className={classNames(Styles.historyItem)} onClick={handleClick}>
      {name}
    </div>
  );
};

export default HistoryItem;
