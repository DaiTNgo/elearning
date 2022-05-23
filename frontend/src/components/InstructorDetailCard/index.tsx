import React from 'react';
import styles from './InstructorDetailCard.module.scss';
import classNames from 'classnames/bind';
import InstructorCard from './InstructorCard';
import TopicCard from '../CourseAndTopic/TopicCard';
import CourseAndTopic from '../CourseAndTopic';
const cx = classNames.bind(styles);
//TODO: không dùng
function InstructorDetailCard() {
  return (
    <div>
      <CourseAndTopic size='xs' left component={<InstructorCard />} />
      <div className={cx('card')}>
        {/* <div className={cx('card-right')}>
          <InstructorCard />
        </div>
        <div className={cx('card-left')}> */}
        {/* <p className={cx('card-title')}>FEATURED COURSE</p>
          <div className={cx('card-topic__wrapper')}>
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
          </div> */}
      </div>
    </div>
    // </div>
  );
}

export default InstructorDetailCard;
