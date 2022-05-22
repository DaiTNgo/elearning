import React from 'react';
import styles from './CourseHero.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';
import { PATH_IMG } from '../../utils/constant';
import Search from '../Search';

const cx = classNames.bind(styles);

function CourseHero() {
  return (
    <section className={cx('course-hero')}>
      <div className={cx('hero-left')}>
        <p>120 HOURS OF COURSES</p>
        <h2>Learn the best tools and platforms</h2>
        <p>
          We focus on industry leading platforms so that you can be prepared for
          your next job. Then we teach all we can about them.
        </p>
      </div>
      <div className={cx('hero-right')}>
        <div className={cx('hero-icon')}>
          <Icon pathIcon={`${PATH_IMG}/swiftui-logo.svg`} />
          <Icon pathIcon={`${PATH_IMG}/react-logo.svg`} />
          <Icon pathIcon={`${PATH_IMG}/figma-logo.svg`} />
          <Icon pathIcon={`${PATH_IMG}/sketch-logo.svg`} />
          <Icon pathIcon={`${PATH_IMG}/framer-logo.svg`} />
          <Icon pathIcon={`${PATH_IMG}/webflow-logo.svg`} />
          <Icon pathIcon={`${PATH_IMG}/protopie-logo.svg`} />
        </div>
        <div className={cx('hero-search')}>
          <Search />
        </div>
      </div>
    </section>
  );
}

export default CourseHero;
