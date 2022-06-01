import classNames from 'classnames/bind';
import React from 'react';
import { PATH_IMG } from '../../../utils/constant';
import Icon from '../../Icon';
import TopicCard from '../Topic';
import styles from './TopicWrapper.module.scss';
const cx = classNames.bind(styles);
type TopicWrapperType = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  title?: string;
  topics?: any;
  courses?: any;
};
function TopicWrapper({
  size = 'xs',
  title,
  topics,
  courses,
}: TopicWrapperType) {
  const handlePlayTopic = (url: any) => {};
  return (
    <>
      {/* <p className={cx('title')}></p> */}
      {title && <p className={cx('title')}>{title}</p>}
      <div
        className={cx('card-topic__wrapper', {
          [size]: true,
        })}
      >
        {/* @ts-ignore */}
        {topics &&
          topics.length > 0 &&
          // @ts-ignore
          topics.map((topic, index) => {
            //@ts-ignore
            return (
              <TopicCard
                key={index}
                icon={
                  <Icon
                    order={topic.order}
                    round
                    padding
                    backgroundColor='rgba(255,255,255,0.1)'
                  />
                }
                topic={topic}
                title={topic.name}
                description={topic.description}
              />
            );
          })}

        {courses &&
          // @ts-ignore
          courses.map((course, index) => {
            //@ts-ignore
            return (
              <TopicCard
                key={index}
                icon={
                  course.type && (
                    <Icon url={`${PATH_IMG}/${course.type}-logo.svg`} round />
                  )
                }
                title={course.name}
                description={course.description}
              />
            );
          })}
        {/* 

        <TopicCard
          icon={
            <Icon
              order={1}
              round
              padding
              backgroundColor='rgba(255,255,255,0.5)'
            />
          }
        />
        <TopicCard icon={<Icon url={`${PATH_IMG}/react-logo.svg`} round />} />
         */}
      </div>
    </>
  );
}

export default TopicWrapper;
