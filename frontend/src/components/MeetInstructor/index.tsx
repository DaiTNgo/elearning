import React from 'react';
import styles from './MeetInstructor.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import CourseAndTopic from '../CourseAndTopic';
import InstructorCard from '../InstructorCard';

const cx = classNames.bind(styles);

function MeetInstructor() {
  return (
    <div className='container'>
      <div className={cx('meet-instructor__top')}>
        <Text
          title='Meet the instructors'
          subTitle='WHO’S BEHIND'
          desc='We all try to be consistent with our way of teaching step-by-step, providing source files and prioritizing design in our courses.'
        />
      </div>
      <div className={cx('meet-instructor__bottom')}>
        <CourseAndTopic size='xs' left component={<InstructorCard />} />
        <CourseAndTopic size='xs' left component={<InstructorCard />} />
      </div>
    </div>
  );
}

export default MeetInstructor;
