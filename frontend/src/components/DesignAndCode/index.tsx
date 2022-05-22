import React, { useEffect, useState } from 'react';
import styles from './DesignAndCode.module.scss';
import classNames from 'classnames/bind';
import { PATH_IMG } from '../../utils/constant';
const cx = classNames.bind(styles);

export default function DesignAndCode() {
  const [text, setText] = useState('Swift');
  //   useEffect(() => {
  //     const temp = setInterval(() => {
  //       setText((prev) => {
  //         if (prev === 'Swift') {
  //           console.log('>>> 1 :');
  //           return 'React';
  //         } else {
  //           console.log('>>> 2 :');
  //           return 'Swift';
  //         }
  //       });
  //     }, 2000);
  //     return () => {
  //       clearInterval(temp);
  //     };
  //   }, []);

  return (
    <section className={'container'}>
      <div className={cx('design-code__wrapper')}>
        <div className={cx('design-code__left')}>
          <div className={cx('wrapper-code__left')}>
            <h1 className={cx('design-code__title')}>
              Design and code{' '}
              <span className={cx('wrapper-span')}>
                {text.split('').map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </span>{' '}
              apps
            </h1>
            <p className={cx('design-code__text')}>
              Don’t skip design. Learn design and code, by building real apps
              with React and Swift. Complete courses about the best tools.
            </p>
            <button className={cx('btn')}>
              <div className={cx('btn-wrapper')}>
                <div className={cx('wrapper-img')}>
                  <img src={`${PATH_IMG}/pricing-large.svg`} alt='' />
                  <img src={`${PATH_IMG}/rotate.svg`} alt='' />
                </div>
                <div className={cx('content')}>
                  <p className={cx('text-caption')}>UPGRADE NOW</p>
                  <p className={cx('text-small')}>$19 per month</p>
                </div>
              </div>
            </button>
            <p className={cx('design-code__purchase')}>
              Purchase includes access to 30+ courses, 240+ premium tutorials,
              120+ hours of videos, source files and certificates.
            </p>
          </div>
        </div>
        <div className={cx('design-code__right')}>
          <div className={cx('mockup-wrapper')}>
            <img src={`${PATH_IMG}/mockup-card2.svg`} alt='' />
            <img src={`${PATH_IMG}/mockup-card2.svg`} alt='' />
            <img src={`${PATH_IMG}/mockup-content.svg`} alt='' />
            <img src={`${PATH_IMG}/mockup3-bg.svg`} alt='' />
            <img src={`${PATH_IMG}/mockup2-bg.svg`} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
