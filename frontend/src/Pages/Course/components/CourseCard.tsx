import React from 'react';
import styles from '../Course.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function CourseCard({ img }: { img: any }) {
  return (
    <div className={cx('card')}>
      {img && <img src={img} />}
      <div className={cx('circle-big')}></div>
      <div className={cx('circle-small')}></div>
    </div>
  );
}

export default CourseCard;
