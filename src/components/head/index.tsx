import React from 'react';
import Styles from './index.module.scss';
import clasnames from 'classnames';

const Head: React.FC = () => {
  return (
    <div className={clasnames(Styles.header)}>
      <div className={Styles.headerIcon}>
        <img src="" className={clasnames('bg-white', '')} alt="" />
      </div>
    </div>
  );
};

export default Head;
