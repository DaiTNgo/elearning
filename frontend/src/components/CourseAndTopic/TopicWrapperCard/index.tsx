import React from 'react';
import styles from './TopicWrapperCard.module.scss';
import classNames from 'classnames/bind';
import TopicCard from '../TopicCard';
import Icon from '../../Icon';
import { PATH_IMG } from '../../../utils/constant';
const cx = classNames.bind(styles);
type TopicWrapperType = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  title?: string;
};
function TopicWrapperCard({ size = 'xs', title }: TopicWrapperType) {
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
        {/* {topics.map((topic, index) => {
              //@ts-ignore
              return <CardTopic key={index} title={topic.title} />;
            })} */}
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
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
        <TopicCard />
      </div>
    </>
  );
}

export default TopicWrapperCard;
