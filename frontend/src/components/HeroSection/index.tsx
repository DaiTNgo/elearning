import React from 'react';
import styles from './HeroSection.module.scss';
import classNames from 'classnames/bind';
import Header from '../Layout/Header';
import DesignAndCode from '../DesignAndCode';
const cx = classNames.bind(styles);

function HeroSection() {
  return (
    <section className={cx('hero-section')}>
      <Header />
      <DesignAndCode />
    </section>
  );
}

export default HeroSection;
