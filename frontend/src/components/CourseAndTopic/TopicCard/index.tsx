import React from 'react';
import styles from './TopicCard.module.scss';
import classNames from 'classnames/bind';
import { PATH_IMG } from '../../../utils/constant';
import Icon from '../../Icon';
const cx = classNames.bind(styles);

export default function TopicCard(props: any) {
  return (
    <div className={cx('card-topic')}>
      <div className={cx('card-topic__right')}>
        {/* <div className={cx('topic-right__type')}>1</div> */}
        {props.icon}
      </div>
      <div className={cx('card-topic__left')}>
        <div className={cx('topic-left__wrapper')}>
          <div className={cx('topic-left__name')}>
            Lorem ipsum dolor sit amet.
          </div>
          <div className={cx('topic-left__timing')}>5:42</div>
        </div>
        <div className={cx('topic-left__desc')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et
          reprehenderit quo veniam cumque! Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  );
}
