import styles from './MeetInstructor.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import CourseAndTopic from '../Card/CourseAndTopic';
import Instructor from '../Card/Instructor';
import { GetAllCourseResponse } from '../../Types';

const cx = classNames.bind(styles);

function MeetInstructor({ courses }: { courses: GetAllCourseResponse[] }) {
  if (!courses[0]) {
    return <div>Loadding...</div>;
  }

  return (
    <div className='container'>
      <div className={cx('meet-instructor__top')}>
        <Text
          title='Meet the instructors'
          subTitle='WHO’S BEHIND'
          desc='We all try to be consistent with our way of teaching step-by-step, providing source files and prioritizing design in our courses.'
        />
      </div>
      <div className={cx('meet-instructor__bottom')}>
        <CourseAndTopic
          instructorId={courses[0].id}
          size='xs'
          left
          component={
            <Instructor
              info={{
                avatar: courses[0].avatar,
                description: courses[0].user_desc,
                user_name: courses[0].user_name,
              }}
            />
          }
        />
        <CourseAndTopic
          instructorId={courses[1].id}
          size='xs'
          left
          component={
            <Instructor
              info={{
                avatar: courses[1].avatar,
                description: courses[1].user_desc,
                user_name: courses[1].user_name,
              }}
            />
          }
        />
      </div>
    </div>
  );
}

export default MeetInstructor;
