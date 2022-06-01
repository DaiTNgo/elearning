import classNames from 'classnames/bind';
import React from 'react';
import { PATH_IMG } from '../../../utils/constant';
import Icon from '../../Icon';
import Search from '../../Search';
import Text from '../../Text';
import styles from './HeroCourse.module.scss';

const cx = classNames.bind(styles);

function HeroCourse() {
  return (
    <section className={cx('course-hero')}>
      <div className={cx('hero-left')}>
        <Text
          subTitle='120 HOURS OF COURSES'
          title='Learn the best tools and platforms'
          desc='   We focus on industry leading platforms so that you can be prepared for
          your next job. Then we teach all we can about them.'
        />
      </div>
      <div className={cx('hero-right')}>
        <div className={cx('hero-icon')}>
          <Icon url={`${PATH_IMG}/swift-logo.svg`} />
          <Icon url={`${PATH_IMG}/react-logo.svg`} />
          <Icon url={`${PATH_IMG}/figma-logo.svg`} />
          <Icon url={`${PATH_IMG}/sketch-logo.svg`} />
          <Icon url={`${PATH_IMG}/framer-logo.svg`} />
        </div>
        <div className={cx('hero-search')}>
          <Search />
        </div>
      </div>
    </section>
  );
}

export default HeroCourse;
