import React, { useEffect } from 'react';
import styles from './CourseTopic.module.scss';
import classNames from 'classnames/bind';
import TopicWrapperCard from './TopicWrapperCard';
const cx = classNames.bind(styles);

type CourseCardType = {
  component?: JSX.Element;
  left?: boolean;
  right?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};
function CourseAndTopic({
  left,
  right,
  component,
  size = 'xs',
}: CourseCardType) {
  const CardTopic = <TopicWrapperCard size={size} title='FEATURED COURSE' />;

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
