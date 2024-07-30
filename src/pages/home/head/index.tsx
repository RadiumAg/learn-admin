import React from 'react';
import clasnames from 'classnames';
import Styles from './index.module.scss';
import backgroundImg from '@/assets/header-background.png';

const Head: React.FC = () => {
  return (
    <div className={clasnames(Styles.header)}>
      <div className={Styles.headerIcon}>
        <img
          src={backgroundImg}
          className={clasnames(
            'mb-2',
            'bg-white',
            'object-cover',
            'object-center'
          )}
          alt=''
        />

        <span className='text-white'>今日月阅读时长</span>
      </div>
      <img src={backgroundImg} className={Styles.background} alt='' />
    </div>
  );
};

export default Head;
