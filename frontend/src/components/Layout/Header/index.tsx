import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = (props: {}) => {
  return (
    <header>
      <div className={cx('wrapper')}>
        <Link to='/'>
          <img src='/src/assets/images/logo.svg' />
        </Link>
        <div className={cx('nav')}>
          <Link to='/courses'>
            <button className={cx('nav__item', 'btn')}>
              <img src='/src/assets/images/courses.svg' alt='courses' />
              <span className={cx('text-header')}>Courses</span>
            </button>
          </Link>

          <Link to='/tutorials'>
            <button className={cx('nav__item', 'btn')}>
              <img src='./src/assets/images/tutorials.svg' alt='tutorials' />
              <span className={cx('text-header')}>Tutorials</span>
            </button>
          </Link>
          <Link to='/livestreams'>
            <button className={cx('nav__item', 'btn')}>
              <img src='/src/assets/images/livestreams.svg' alt='livestreams' />
              <span className={cx('text-header')}>Livestreams</span>
            </button>
          </Link>
          <Link to='/pricing'>
            <button className={cx('nav__item', 'btn')}>
              <img src='/src/assets/images/pricing.svg' alt='pricing' />
              <span className={cx('text-header')}>Pricing</span>
            </button>
          </Link>
          <button className={cx('btn')}>
            <img src='/src/assets/images/more.svg' alt='more' />
          </button>
          <button className={cx('btn')}>
            <img src='/src/assets/images/pricing.svg' alt='more' />
          </button>
          <button className={cx('btn')}>
            <img src='/src/assets/images/account.svg' alt='account' />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
