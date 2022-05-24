import React from 'react';
import CourseCard from '../CourseCard';
import styles from './CourseWrapper.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function CourseWrapper() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('item')}>
        <CourseCard />
      </div>
      <div className={cx('item')}>
        <CourseCard />
      </div>
      <div className={cx('item')}>
        <CourseCard />
      </div>
      <div className={cx('item')}>
        <CourseCard />
      </div>
      <div className={cx('item')}>
        <CourseCard />
      </div>
    </div>
  );
}

export default CourseWrapper;
