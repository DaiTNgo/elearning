import React from 'react';
import styles from './CardDetailInstructor.module.scss';
import classNames from 'classnames/bind';
import CardTopic from '../CardTopic';
import CardCourse from '../CardCourse';
import CardInstructor from '../CardInstructor';
const cx = classNames.bind(styles);

function CardDetailInstructor() {
  return (
    <div>
      <div className={cx('card')}>
        <div className={cx('card-right')}>
          <CardInstructor />
        </div>
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
      </div>
    </div>
  );
}

export default CardDetailInstructor;
