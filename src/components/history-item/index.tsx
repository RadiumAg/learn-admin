import React from 'react'
import Styles from './index.module.scss'
import classNames from 'classnames';

const HistoryItem:React.FC = ()=>{
    return <div className={classNames(Styles.historyItem,'')}></div>
}

export default HistoryItem;