import React from 'react';
import CourseAndTopic from '../../CourseAndTopic';
import CourseCard from '../CourseCard';
import styles from './CourseDetail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const CourseDetail = (props: {}) => {
  return (
    <div>
      <div className={cx('course-wrapper')}>
        <div className={cx('course-item')}>
          <CourseAndTopic size='xs' right component={<CourseCard />} />
        </div>
        <div className={cx('course-item')}>
          <CourseAndTopic size='xs' left component={<CourseCard />} />
        </div>
      </div>
    </div>
  );
};
export default CourseDetail;
