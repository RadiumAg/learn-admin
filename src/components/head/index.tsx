import React from 'react';
import Styles from './index.module.scss';
import clasnames from 'classnames';
const backgroundImg = process.env.PUBLIC_URL + './header-background.png';

const Head: React.FC = () => {
  return (
    <div className={clasnames(Styles.header)}>
      <div className={Styles.headerIcon}>
        <img className={clasnames('bg-white', '')} alt="" />

        <span>今日月阅读时长</span>
      </div>
      <img src={backgroundImg} className={Styles.background} alt="" />
    </div>
  );
};

export default Head;
