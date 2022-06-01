import React, { useEffect, useState } from 'react';
import { PATH_IMG } from '../../utils/constant';
import NavigatorButton from '../NavigatorButton';
import CourseCard from '../Card/Course';
import HeroCourse from './HeroCourse';
import CourseDetail from '../CourseDetail';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';
import { axiosCourse } from '../../utils/axios';
const cx = classNames.bind(styles);
export interface CourseResponse {
  count: number;
  courseId: number;
  avatar: string;
  description: string;
  image: string;
  name: string;
  price: string;
  type: string;
  userId: number;
  watch: string;
}
function CourseSection() {
  const [courses, setCourses] = useState<CourseResponse[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const resp = await axiosCourse({
          method: 'get',
          url: '/',
        });

        if (resp.data.success) {
          setCourses(resp.data.message);
        } else {
          throw new Error(resp.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className='container'>
      <HeroCourse />
      {courses.length > 0 && <CourseDetail courses={courses.slice(0, 2)} />}
      <div className={cx('wrapper')}>
        {courses.length > 0 &&
          courses.slice(0, 5).map((course) => {
            return (
              <div className={cx('item')} key={course.courseId}>
                <CourseCard course={course} />
              </div>
            );
          })}
      </div>

      <NavigatorButton
        transition
        more
        round
        center
        text='Browse courses'
        url={`${PATH_IMG}/courses.svg`}
      />
    </div>
  );
}

export default CourseSection;
