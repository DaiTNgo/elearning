import React from 'react';
import { parsePath } from 'react-router-dom';
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
      <div className={cx('couse-wrapper')}>
        <CourseAndTopic size='xs' right component={<CourseCard />} />
        <CourseAndTopic size='xs' left component={<CourseCard />} />
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
