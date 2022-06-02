import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { GetAllCourseResponse } from '../../../Types';

import { PATH_IMG } from '../../../utils/constant';
import Icon from '../../Icon';
import CardLayout from '../Layout';
import styles from './Course.module.scss';
const cx = classNames.bind(styles);

export default function CourseCard({
  course,
}: {
  course: {
    course_id: number;
    name: string;
    type: string;
    avatar: string;
    image: string;
    count: number;
  };
}) {
  const navigate = useNavigate();
  const handleNavigateCourse = (course: {
    course_id: number;
    name: string;
    type: string;
    avatar: string;
    image: string;
    count: number;
  }) => {
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
            <Icon url={course.avatar} alt='instructor' round hover />
          </div>
        </div>
        <img
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
