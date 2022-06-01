import React, { useEffect, useState } from 'react';
import CourseAndTopic from '../Card/CourseAndTopic';
import CourseCard from '../Card/Course';
import styles from './CourseDetail.module.scss';
import classNames from 'classnames/bind';
import { axiosCourse } from '../../utils/axios';
const cx = classNames.bind(styles);
//TODO:
const CourseDetail = ({ courses }: any) => {
  //   const [courses, setCourses] = useState([]);

  //   useEffect(() => {
  //     (async () => {
  //       await axiosCourse({
  //         method: 'get',
  //         url: `/{${props.courseId}}`,
  //       });
  //     })();
  //   }, []);

  return (
    <div>
      <div className={cx('course-wrapper')}>
        <div className={cx('course-item')}>
          <CourseAndTopic
            courseId={courses[0].courseId}
            size='xs'
            right
            component={<CourseCard course={courses[0]} />}
          />
        </div>
        <div className={cx('course-item')}>
          <CourseAndTopic
            courseId={courses[1].courseId}
            size='xs'
            left
            component={<CourseCard course={courses[1]} />}
          />
        </div>
      </div>
    </div>
  );
};
export default CourseDetail;
