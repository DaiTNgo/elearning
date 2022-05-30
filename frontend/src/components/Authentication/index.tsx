import React, { useLayoutEffect, useState } from 'react';
import styles from './Authentication.module.scss';
import classNames from 'classnames/bind';
import CardLayout from '../CardLayout';
import { PATH_IMG } from '../../utils/constant';
import Icon from '../Icon';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser, login } from '../../redux/authenSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
const cx = classNames.bind(styles);

function Authentication({ handleLogin }: { handleLogin: () => void }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const user = useAppSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (user?.role === 'instructor') {
      navigate('/admin');
    }
    if (user?.role === 'user') {
      handleLogin();
    }
  }, [user]);
  const handleSubmit = async () => {
    dispatch(
      login({
        email,
        password,
      })
    );
    setEmail('');
    setPassword('');
  };
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
          <input
            name='email'
            placeholder='Email address'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className={cx('form')}>
          <div className={cx('icon')}>
            <Icon sm_2 url={`${PATH_IMG}/lock-blue.svg`} />
          </div>
          <input
            name='password'
            placeholder='Password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <button type='button' onClick={handleSubmit}>
          Sign in
        </button>
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
