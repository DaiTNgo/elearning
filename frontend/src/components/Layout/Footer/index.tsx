import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import NavigatorButton from '../../NavigatorButton';
import { PATH_IMG } from '../../../utils/constant';

const cx = classNames.bind(styles);
const Footer = (props: {}) => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__wrapper')}>
        <div className={cx('footer__left')}>
          <div className={cx('footer-left__wrapper')}>
            <div className={cx('col')}>
              <NavigatorButton
                pathIcon={`${PATH_IMG}/home.svg`}
                text='Home'
                alt='home'
              />
              <NavigatorButton
                pathIcon={`${PATH_IMG}/courses.svg`}
                text='Courses'
                alt='courses'
              />
              <NavigatorButton
                pathIcon={`${PATH_IMG}/tutorials.svg`}
                text='Tutorials'
                alt='tutorials'
              />
              <NavigatorButton
                pathIcon={`${PATH_IMG}/pricing.svg`}
                text='Pricing'
                alt='pricing'
              />
              <NavigatorButton
                pathIcon={`${PATH_IMG}/calendar.svg`}
                text='Updates'
                alt='updates'
              />
            </div>
            <div className={cx('col')}>
              <NavigatorButton
                pathIcon={`${PATH_IMG}/downloads.svg`}
                text='Downloads'
                alt='downloads'
                isPadding
              />
              <NavigatorButton
                pathIcon={`${PATH_IMG}/search.svg`}
                text='Search'
                alt='search'
              />
              <NavigatorButton
                pathIcon={`${PATH_IMG}/account.svg`}
                text='Account'
                alt='account'
              />
              <NavigatorButton
                pathIcon={`${PATH_IMG}/gift.svg`}
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
