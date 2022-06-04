import classNames from 'classnames/bind';
import { GetAllCourseResponse } from '../../Types';
import CourseCard from '../Card/Course';
import CourseAndTopic from '../Card/CourseAndTopic';
import styles from './CourseDetail.module.scss';
const cx = classNames.bind(styles);
const CourseDetail = ({ courses }: { courses: GetAllCourseResponse[] }) => {
  return (
    <div>
      <div className={cx('course-wrapper')}>
        <div className={cx('course-item')}>
          <CourseAndTopic
            courseId={courses[0].course_id}
            size='xs'
            right
            component={<CourseCard course={courses[0]} />}
          />
        </div>
        <div className={cx('course-item')}>
          <CourseAndTopic
            courseId={courses[1].course_id}
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
