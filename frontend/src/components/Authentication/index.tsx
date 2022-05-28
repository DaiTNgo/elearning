import React from 'react';
import styles from './Authentication.module.scss';
import classNames from 'classnames/bind';
import CardLayout from '../Layout/Card';
import { PATH_IMG } from '../../utils/constant';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Authentication({ handleLogin }: { handleLogin: () => void }) {
  return (
    <div className={cx('authen')}>
      <div className={cx('authen-left')}>
        <img src={`${PATH_IMG}/teamwork.svg`} className={cx('authen-img')} />
      </div>
      <div className={cx('authen-right')}>
        <h2>Sign in</h2>
        <p>Access to 120+ hours of courses, tutorials and livestreams</p>
        <div className={cx('form')}>
          <div className={cx('icon')}>
            <Icon sm_2 url={`${PATH_IMG}/envelope-blue.svg`} />
          </div>
          <input name='email' placeholder='Email address' />
        </div>
        <div className={cx('form')}>
          <div className={cx('icon')}>
            <Icon sm_2 url={`${PATH_IMG}/lock-blue.svg`} />
          </div>
          <input name='password' placeholder='Password' />
        </div>
        <button type='button'>Sign in</button>
        <p>
          Don't have an account?
          <Link to='/signup' className={cx('signup')}>
            {' '}
            Sign up
          </Link>
        </p>
      </div>
      <div className={cx('close')} onClick={handleLogin}>
        <img src={`${PATH_IMG}/x.svg`} alt='close icon' />
      </div>
    </div>
  );
}

export default Authentication;
