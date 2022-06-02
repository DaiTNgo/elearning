import classNames from 'classnames/bind';
import { GetAllCourseResponse } from '../../Types';
import { PATH_IMG } from '../../utils/constant';
import CourseCard from '../Card/Course';
import CourseDetail from '../CourseDetail';
import NavigatorButton from '../NavigatorButton';
import styles from './Course.module.scss';
import HeroCourse from './HeroCourse';

const cx = classNames.bind(styles);
function CourseSection({ courses }: { courses: GetAllCourseResponse[] }) {
  return (
    <div className='container'>
      <HeroCourse isSearch={false} />
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
        path='/courses'
      />
    </div>
  );
}

export default CourseSection;
