import React from 'react';
import styles from './DesignAndCode.module.scss';
import classNames from 'classnames/bind';
import { pathImg } from '../Layout/Header';
const cx = classNames.bind(styles);

export default function DesignAndCode() {
  return (
    <section className={cx('design-code')}>
      <div className={cx('design-code__left')}>
        <h1>
          Design and code <span>Swift </span>
          apps
        </h1>
        <p className={cx('design-code__text')}>
          Don’t skip design. Learn design and code, by building real apps with
          React and Swift. Complete courses about the best tools.
        </p>
        <button className={cx('btn')}>
          <div className={cx('btn-wrapper')}>
            <div className={cx('wrapper-img')}>
              <img src={`${pathImg}/pricing-large.svg`} alt='' />
              <img src={`${pathImg}/rotate.svg`} alt='' />
            </div>
            <div className={cx('content')}>
              <p className={cx('text-caption')}>UPGRADE NOW</p>
              <p className={cx('text-small')}>$19 per month</p>
            </div>
          </div>
        </button>
        <span className={cx('design-code__purchase')}>
          Purchase includes access to 30+ courses, 240+ premium tutorials, 120+
          hours of videos, source files and certificates.
        </span>
      </div>
      <div className={cx('design-code__right')}>
        <div className={cx('mockup-wrapper')}>
          <img src={`${pathImg}/mockup-card2.svg`} alt='' />
          <img src={`${pathImg}/mockup-card2.svg`} alt='' />
          <img src={`${pathImg}/mockup-content.svg`} alt='' />
          <img src={`${pathImg}/mockup3-bg.svg`} alt='' />
          <img src={`${pathImg}/mockup2-bg.svg`} alt='' />
        </div>
      </div>
    </section>
  );
}
