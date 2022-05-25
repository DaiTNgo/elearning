import React from 'react';
import { PATH_IMG } from '../../utils/constant';
import CourseAndTopic from '../CourseAndTopic';
import NavigatorButton from '../NavigatorButton';
import CourseCard from './CourseCard';
import HeroCourse from './HeroCourse';
import CourseDetail from './CourseDetail';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function CourseSection() {
  return (
    <div className='container'>
      <HeroCourse />
      <CourseDetail />
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

      <NavigatorButton
        transition
        more
        round
        center
        text='Browse courses'
        url={`${PATH_IMG}/courses.svg`}
      />
    </div>
  );
}

export default CourseSection;
