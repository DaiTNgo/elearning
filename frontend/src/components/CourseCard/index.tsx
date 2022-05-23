import React from 'react';
import styles from './CourseCard.module.scss';
import classNames from 'classnames/bind';
import CardDetail from '../CardDetail';
import CardTopic from '../CardTopic';
import CardCourse from '../CardCourse';
const cx = classNames.bind(styles);
type CourseCardType = {
  leftComponent?: any;
  rightComponent?: any;
  component?: JSX.Element;
  left?: boolean;
  right?: boolean;
};
function CourseCard({
  leftComponent,
  rightComponent,
  left,
  right,
  component,
}: CourseCardType) {
  return (
    <div>
      <div className={cx('card', { left }, { right })}>
        {left && (
          <>
            <div className={cx('card-left')}>{component}</div>
            <div className={cx('card-right')}>
              <p className={cx('card-title')}>FEATURED COURSE</p>
              <div className={cx('card-topic__wrapper')}>
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
              </div>
            </div>
          </>
        )}
        {right && (
          <>
            <div className={cx('card-left')}>
              <p className={cx('card-title')}>FEATURED COURSE</p>
              <div className={cx('card-topic__wrapper')}>
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
                <CardTopic />
              </div>
            </div>
            <div className={cx('card-right')}>{component}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
