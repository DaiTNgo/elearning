import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { axiosCourse } from '../../../utils/axios';
import TopicWrapper from '../TopicWrapper';
import styles from './CourseTopic.module.scss';
const cx = classNames.bind(styles);

type CourseCardType = {
  component?: JSX.Element;
  left?: boolean;
  right?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  courseId?: number;
};
function CourseAndTopic({
  left,
  right,
  component,
  size = 'xs',
  courseId,
}: CourseCardType) {
  const [topics, setTopics] = useState<any>([]);
  const CardTopic = (
    <TopicWrapper topics={topics} size={size} title='FEATURED COURSE' />
  );
  useEffect(() => {
    (async () => {
      if (courseId) {
        const resp = await axiosCourse({
          method: 'get',
          url: `/${courseId}`,
        });
        setTopics(resp.data.message.Topics);
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
