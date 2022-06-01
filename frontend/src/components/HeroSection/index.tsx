import React from 'react';
import styles from './HeroSection.module.scss';
import classNames from 'classnames/bind';
import DesignAndCode from './DesignAndCode';
import Header from '../../Layout/Header';
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
