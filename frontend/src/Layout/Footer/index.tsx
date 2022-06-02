import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import NavigatorButton from '../../components/NavigatorButton';
import { PATH_IMG } from '../../utils/constant';

const cx = classNames.bind(styles);
const Footer = (props: {}) => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer__wrapper')}>
        <div className={cx('footer__left')}>
          <div className={cx('footer-left__wrapper')}>
            <div className={cx('col')}>
              <NavigatorButton
                hover
                url={`${PATH_IMG}/home.svg`}
                text='Home'
                alt='home'
                path='/'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/courses.svg`}
                text='Courses'
                alt='courses'
                path='/courses'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/tutorials.svg`}
                text='Tutorials'
                alt='tutorials'
                path='/tutorials'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/pricing.svg`}
                text='Pricing'
                alt='pricing'
                path='/pricing'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/calendar.svg`}
                text='Updates'
                alt='updates'
                path='/'
              />
            </div>
            <div className={cx('col')}>
              <NavigatorButton
                hover
                url={`${PATH_IMG}/downloads.svg`}
                text='Downloads'
                alt='downloads'
                path='/'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/search.svg`}
                text='Search'
                alt='search'
                path='/'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/account.svg`}
                text='Account'
                alt='account'
                path='/'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/gift.svg`}
                alt='gift'
                text='Licenses'
                path='/'
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
