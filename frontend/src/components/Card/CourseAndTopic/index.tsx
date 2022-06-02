import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import {
  CourseResponse,
  ResponseAxiosType,
  TopicResponse,
  UserResponse,
} from '../../../Types';
import { axiosCourse } from '../../../utils/axios';
import TopicWrapper from '../TopicWrapper';
import styles from './CourseTopic.module.scss';
const cx = classNames.bind(styles);

type CourseCardType = {
  component?: any;
  left?: boolean;
  right?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  courseId?: number;
  instructorId?: number;
};
type GetCourseIdType = {
  Topics: TopicResponse[];
  User: UserResponse;
} & CourseResponse;

function CourseAndTopic({
  left,
  right,
  component,
  size = 'xs',
  courseId,
  instructorId,
}: CourseCardType) {
  const [topics, setTopics] = useState<TopicResponse[]>([]);
  const [courses, setCourses] = useState<CourseResponse[]>([]);
  const [title, setTitle] = useState<string>('');
  const CardTopic = (
    <TopicWrapper topics={topics} courses={courses} size={size} title={title} />
  );
  useEffect(() => {
    (async () => {
      if (courseId) {
        try {
          const resp: ResponseAxiosType<GetCourseIdType & string> =
            await axiosCourse({
              method: 'get',
              url: `/${courseId}`,
            });
          if (resp.data.success) {
            setTitle('FEATURED COURSE');
            setTopics(resp.data.message.Topics);
          } else {
            throw new Error(resp.data.message);
          }
        } catch (error) {
          console.log(
            'file:CourseAndTopic index.tsx >>> line 64 >>> error',
            error
          );
        }
      }
      if (instructorId) {
        try {
          const resp: ResponseAxiosType<CourseResponse[] & string> =
            await axiosCourse({
              method: 'get',
              url: `/instructor/${instructorId}`,
            });
          if (resp.data.success) {
            setTitle(`${courses.length} COURSES `);
            setCourses(resp.data.message);
          } else {
            throw new Error(resp.data.message);
          }
        } catch (error) {
          console.log(
            'file:CourseAndTopic index.tsx >>> line 83 >>> error',
            error
          );
        }
      }
    })();
  }, []);

  return (
    <>
      <div className={cx('card', { left }, { right }, { [size]: true })}>
        {left && (
          <>
            <div className={cx('card-left')}>{component}</div>
            <div className={cx('card-right')}>{CardTopic}</div>
          </>
        )}
        {right && (
          <>
            <div className={cx('card-left')}>{CardTopic}</div>
            <div className={cx('card-right')}>{component}</div>
          </>
        )}
        {!left && !right && CardTopic}
      </div>
    </>
  );
}

export default CourseAndTopic;
