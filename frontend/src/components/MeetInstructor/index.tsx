import React from 'react';
import styles from './MeetInstructor.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import CourseAndTopic from '../Card/CourseAndTopic';
import Instructor from '../Card/Instructor';
import { CourseResponse } from '../../Pages';

const cx = classNames.bind(styles);

function MeetInstructor({ courses }: { courses: CourseResponse[] }) {
  if (!courses[0]) {
    return <div>Loadding...</div>;
  }

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
        <CourseAndTopic
          instructorId={courses && courses[0].userId}
          size='xs'
          left
          component={<Instructor info={courses && courses[0]} />}
        />
        <CourseAndTopic
          instructorId={courses && courses[1].userId}
          size='xs'
          left
          component={<Instructor info={courses && courses[1]} />}
        />
      </div>
    </div>
  );
}

export default MeetInstructor;
