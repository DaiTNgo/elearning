import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
import { pathImg } from '../Header';
import NavigatorButton from '../../NavigatorButton';

const Footer = (props: {}) => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__wrapper')}>
        <div className={cx('footer__left')}>
          <div className={cx('footer-left__wrapper')}>
            <div className={cx('col')}>
              <NavigatorButton
                pathIcon={`${pathImg}/home.svg`}
                text='Home'
                alt='home'
              />
              <NavigatorButton
                pathIcon={`${pathImg}/courses.svg`}
                text='Courses'
                alt='courses'
              />
              <NavigatorButton
                pathIcon={`${pathImg}/tutorials.svg`}
                text='Tutorials'
                alt='tutorials'
              />
              <NavigatorButton
                pathIcon={`${pathImg}/pricing.svg`}
                text='Pricing'
                alt='pricing'
              />
              <NavigatorButton
                pathIcon={`${pathImg}/calendar.svg`}
                text='Updates'
                alt='updates'
              />
            </div>
            <div className={cx('col')}>
              <NavigatorButton
                pathIcon={`${pathImg}/downloads.svg`}
                text='Downloads'
                alt='downloads'
              />
              <NavigatorButton
                pathIcon={`${pathImg}/search.svg`}
                text='Search'
                alt='search'
              />
              <NavigatorButton
                pathIcon={`${pathImg}/account.svg`}
                text='Account'
                alt='account'
              />
              <NavigatorButton
                pathIcon={`${pathImg}/gift.svg`}
                alt='gift'
                text='Licenses'
              />
            </div>
          </div>
        </div>
        <div className={cx('footer__right')}>
          <p>
            Site made with React, Gatsby, Netlify and Contentful. Learn{' '}
            <Link to='' style={{ fontWeight: '700' }}>
              how
            </Link>
            .
          </p>
          <p>Design+Code © 2022</p>
          <b>
            <Link to=''>Terms of Service - Privacy Policy</Link>
          </b>
          <p>
            Need help?{' '}
            <b>
              <Link to=''>Contact Us</Link>
            </b>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
