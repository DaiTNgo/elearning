import React from 'react';
import styles from './CardSection.module.scss';
import classNames from 'classnames/bind';

import CardDetail from '../CardDetail';
const cx = classNames.bind(styles);

function CardSection() {
  return (
    <div className=''>
      <div className={cx('card-section')}>
        <CardDetail />
        <CardDetail />
      </div>
    </div>
  );
}

export default CardSection;
