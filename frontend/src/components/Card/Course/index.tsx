import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_IMG } from '../../../utils/constant';
import { CourseResponse } from '../../CourseSection';
import Icon from '../../Icon';
import CardLayout from '../Layout';
import styles from './Course.module.scss';
const cx = classNames.bind(styles);

export default function CourseCard({ course }: { course: CourseResponse }) {
  const navigate = useNavigate();
  const handleNavigateCourse = (course: CourseResponse) => {
    navigate(`/courses/${course.name.toLowerCase().replace(/\s/g, '-')}`, {
      state: course,
    });
  };
  return (
    <CardLayout
      onClick={() => {
        handleNavigateCourse(course);
      }}
      hover
    >
      <div className={cx('course__top')}>
        <div className={cx('course-icons')}>
          <div className={cx('course-icon__wrapper')}>
            <Icon
              url={`${PATH_IMG}/${course.type}-logo.svg`}
              alt='type course'
              round
            />
            <Icon
              //   url='https://images.ctfassets.net/ooa29xqb8tix/7etVU3ZHNQuHvFaiaWxxhT/a8e7e316e574ee8959b4b54bfb956072/Dara.jpg?w=200&h=200&q=50?fm=jpg&q=50'
              url={course.avatar}
              alt='instructor'
              round
              hover
            />
          </div>
        </div>
        <img
          //   src='https://images.ctfassets.net/ooa29xqb8tix/4mwdTcJXn8LfpOAtykFI1X/6af85bceea51d36dfef54c1bf586a031/UI_and_animations_in_Swiftui_800x600.png?w=400&q=50'
          src={course.image}
          className={cx('course-img')}
          alt='image course'
        />
      </div>
      <div className={cx('course__bottom')}>
        <h3 className={cx('course__title')}>{course.name}</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p className={cx('course__desc')}>{course.count} videos</p>
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
