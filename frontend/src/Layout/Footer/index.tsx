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
      {/* <img src='/src/assets/images/bg1.svg' /> */}
      <div className={cx('footer__wrapper')}>
        <div className={cx('footer__left')}>
          <div className={cx('footer-left__wrapper')}>
            <div className={cx('col')}>
              <NavigatorButton
                hover
                url={`${PATH_IMG}/home.svg`}
                text='Home'
                alt='home'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/courses.svg`}
                text='Courses'
                alt='courses'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/tutorials.svg`}
                text='Tutorials'
                alt='tutorials'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/pricing.svg`}
                text='Pricing'
                alt='pricing'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/calendar.svg`}
                text='Updates'
                alt='updates'
              />
            </div>
            <div className={cx('col')}>
              <NavigatorButton
                hover
                url={`${PATH_IMG}/downloads.svg`}
                text='Downloads'
                alt='downloads'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/search.svg`}
                text='Search'
                alt='search'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/account.svg`}
                text='Account'
                alt='account'
              />
              <NavigatorButton
                hover
                url={`${PATH_IMG}/gift.svg`}
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
