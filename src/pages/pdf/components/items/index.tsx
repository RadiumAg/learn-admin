import React from 'react';
import classNames from 'classnames';
import Styles from './index.module.scss';

type ItemProps = {
  cover: string;
  name: string;
  url: string;
};

const Item: React.FC<ItemProps> = (props) => {
  const { cover, name, url } = props;

  const handleOpen = () => {
    window.open(url);
  };

  return (
    <div className={classNames(Styles.item, 'shadow-sm')} onClick={handleOpen}>
      <div className={Styles.cover}>
        <img src={cover} alt='cover' />
      </div>
      <div className={Styles.name}>{name}</div>
    </div>
  );
};

export default Item;
