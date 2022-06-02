import React, { useEffect, useState } from 'react';
import styles from './TutorialSection.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import Handbook from '../Handbook';
import {
  CourseResponse,
  ResponseAxiosType,
  TopicResponse,
  UserResponse,
} from '../../Types';
import { axiosCourse } from '../../utils/axios';
const cx = classNames.bind(styles);
type DataType = CourseResponse & {
  Topics: TopicResponse[];
  User: UserResponse;
};
function TutorialSection() {
  const [courses, setCourses] = useState<DataType[]>([]);
  console.log('>>> re-render : TutorialSection');

  useEffect(() => {
    let here = true;
    (() => {
      axiosCourse({
        method: 'get',
        url: '?istutorial=1',
      }).then((resp) => {
        if (!here) {
          return;
        }
        if (resp.data.success) {
          setCourses(resp.data.message);
        } else {
          throw new Error(resp.data.message);
        }
      });
    })();
    return () => {
      here = false;
    };
  }, []);
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const resp: ResponseAxiosType<DataType[] & string> = await axiosCourse({
  //           method: 'get',
  //           url: '?istutorial=1',
  //         });
  //         if (resp.data.success) {
  //           setCourses(resp.data.message);
  //         } else {
  //           throw new Error(resp.data.message);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }, []);
  return (
    <div className='container section'>
      <div className={cx('tutorial-wrapper')}>
        <Text
          title='Tutorials to guide you beyond'
          subTitle='Premium tutorials'
          icon='tutorials'
          desc='Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge'
          textIcon='More tutorials'
          path='/tutorials'
        />
        <div className={cx('tutorial-right')}>
          <div className={cx('handbook-wrapper')}>
            {courses.length > 0 &&
              courses.slice(0, 2).map((item, index) => {
                const { Topics, User, ...course } = item;
                return <Handbook key={course.course_id} course={course} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialSection;
