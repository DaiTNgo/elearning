import React from 'react';
import styles from './MeetInstructor.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import CardInstructor from '../CardInstructor';
import CardDetailInstructor from '../CardDetailInstructor';
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
        <CardDetailInstructor />
        <CardDetailInstructor />
      </div>
    </div>
  );
}

export default MeetInstructor;
