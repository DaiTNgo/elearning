import React from 'react';
import styles from './CourseCard.module.scss';
import classNames from 'classnames/bind';
import Icon from '../../Icon';
import { PATH_IMG } from '../../../utils/constant';
import CardLayout from '../../CardLayout';
const cx = classNames.bind(styles);

export default function CourseCard() {
  return (
    <CardLayout hover>
      <div className={cx('course__top')}>
        <div className={cx('course-icons')}>
          <div className={cx('course-icon__wrapper')}>
            <Icon
              url={`${PATH_IMG}/react-logo.svg`}
              // url={`${PATH_IMG}/${props.type}-logo.svg`}
              alt='type course'
              round
            />
            <Icon
              url='https://images.ctfassets.net/ooa29xqb8tix/7etVU3ZHNQuHvFaiaWxxhT/a8e7e316e574ee8959b4b54bfb956072/Dara.jpg?w=200&h=200&q=50?fm=jpg&q=50'
              //url={props.imgInstructor}
              alt='instructor'
              round
              hover
            />
          </div>
        </div>
        <img
          src='https://images.ctfassets.net/ooa29xqb8tix/4mwdTcJXn8LfpOAtykFI1X/6af85bceea51d36dfef54c1bf586a031/UI_and_animations_in_Swiftui_800x600.png?w=400&q=50'
          //src={props.imgCourse}
          className={cx('course-img')}
          alt='image course'
        />
      </div>
      <div className={cx('course__bottom')}>
        <h3 className={cx('course__title')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          {/* props.nameCourse */}
        </h3>
        <p className={cx('course__desc')}>
          4 videos - 1 hour
          {/* props.countTopic */}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Icon
            url={`${PATH_IMG}/star.svg`}
            alt='favourite'
            round={true}
            backgroundColor='rgba(0, 0, 0, 0.2)'
            hover={true}
            padding={true}
          />
        </div>
      </div>
    </CardLayout>
  );
}
