import { PATH_IMG } from '../../utils/constant';
import NavigatorButton from '../NavigatorButton';
import CourseCard from '../Card/Course';
import HeroCourse from './HeroCourse';
import CourseDetail from '../CourseDetail';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';
import { GetAllCourseResponse } from '../../Types';
import { useContext } from 'react';
import { HomeContext } from '../../context/HomeContext';
const cx = classNames.bind(styles);
function CourseSection({ courses }: { courses: GetAllCourseResponse[] }) {
  // const courses = useContext(HomeContext);
  return (
    <div className='container'>
      <HeroCourse />
      {courses.length > 0 && <CourseDetail courses={courses.slice(0, 2)} />}
      <div className={cx('wrapper')}>
        {courses.length > 0 &&
          courses.slice(0, 5).map((course) => {
            return (
              <div className={cx('item')} key={course.course_id}>
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
