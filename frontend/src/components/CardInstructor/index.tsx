import React from 'react';
import styles from './CardInstructor.module.scss';
import classNames from 'classnames/bind';
import CardLayout from '../CardLayout';
import Icon from '../Icon';
import { PATH_IMG } from '../../utils/constant';
const cx = classNames.bind(styles);

export default function CardInstructor() {
  return (
    <CardLayout>
      <div className={cx('card-wrapper')}>
        <Icon pathIcon={`${PATH_IMG}/avatar.jpg`} size='lg' isCircle />

        <h3 className={cx('card-title')}>Name</h3>
        <p className={cx('card-info')}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          eveniet.
        </p>
        <p className={cx('card-desc')}>Lorem ipsum dolor sit amet.</p>
        <div className={cx('wrapper-icon')}>
          <Icon
            pathIcon={`${PATH_IMG}/star.svg`}
            alt='type course'
            isCircle={true}
            isHover={true}
            isPadding={true}
            backgroundColor='rgba(0,0,0,0.2)'
          />
          <Icon
            pathIcon={`${PATH_IMG}/twitter-grey.svg`}
            alt='instructor'
            isCircle={true}
            isHover={true}
            isPadding={true}
            backgroundColor='rgba(0,0,0,0.2)'
          />
        </div>
      </div>
    </CardLayout>
  );
}
