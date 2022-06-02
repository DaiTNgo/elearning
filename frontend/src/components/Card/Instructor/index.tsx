import React from 'react';
import styles from './Instructor.module.scss';
import classNames from 'classnames/bind';
import CardLayout from '../Layout';
import { PATH_IMG } from '../../../utils/constant';
import Icon from '../../Icon';
import { useNavigate } from 'react-router-dom';
import { CourseResponse } from '../../../Pages';

const cx = classNames.bind(styles);
// { instructorId }: { instructorId: number }
export default function Instructor({ info }: { info: CourseResponse }) {
  const navigate = useNavigate();
  //   const handleNavigateCourse = (course: CourseResponse) => {
  //     navigate(`/courses/${course.name.replace(/\s/g, '-')}`, { state: course });
  //   };
  if (!info) {
    return <div>Loadding...</div>;
  }
  return (
    <CardLayout
      onClick={() => {
        // handleNavigateCourse();
      }}
    >
      <div className={cx('card-wrapper')}>
        <Icon url={info.avatar} size='lg' round />

        <h3 className={cx('card-title')}>{info.userName}</h3>

        <p className={cx('card-desc')}>{info.userDesc}</p>
        <div className={cx('wrapper-icon')}>
          <Icon
            url={`${PATH_IMG}/star.svg`}
            alt='type course'
            round={true}
            hover={true}
            padding={true}
            backgroundColor='rgba(0,0,0,0.2)'
          />
          <Icon
            url={`${PATH_IMG}/twitter-grey.svg`}
            alt='instructor'
            round={true}
            hover={true}
            padding={true}
            backgroundColor='rgba(0,0,0,0.2)'
          />
        </div>
      </div>
    </CardLayout>
  );
}
