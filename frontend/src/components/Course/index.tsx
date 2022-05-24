import React from 'react';
import { PATH_IMG } from '../../utils/constant';
import CourseAndTopic from '../CourseAndTopic';
import NavigatorButton from '../NavigatorButton';
import CourseCard from './CourseCard';
import CourseWrapper from './CourseWrapper';
import HeroCourse from './HeroCourse';

import styles from './Course.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function CourseSection() {
  return (
    <div className='container'>
      <HeroCourse />
      <div className={cx('course-wrapper')}>
        <div className={cx('course-item')}>
          <CourseAndTopic size='xs' right component={<CourseCard />} />
        </div>
        <div className={cx('course-item')}>
          <CourseAndTopic size='xs' left component={<CourseCard />} />
        </div>
      </div>
      <CourseWrapper />
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
