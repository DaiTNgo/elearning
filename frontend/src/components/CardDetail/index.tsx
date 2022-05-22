import React from 'react';
import styles from './CardDetail.module.scss';
import classNames from 'classnames/bind';
import CardTopic from '../CardTopic';
import CardCourse from '../CardCourse';
const cx = classNames.bind(styles);

function CardDetail() {
  return (
    <div>
      <div className={cx('card')}>
        <div className={cx('card-left')}>
          <p className={cx('card-title')}>FEATURED COURSE</p>
          <div className={cx('card-topic__wrapper')}>
            <CardTopic />
            <CardTopic />
            <CardTopic />
            <CardTopic />
            <CardTopic />
            <CardTopic />
            <CardTopic />
            <CardTopic />
            <CardTopic />
          </div>
        </div>
        <div className={cx('card-right')}>
          <CardCourse />
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
