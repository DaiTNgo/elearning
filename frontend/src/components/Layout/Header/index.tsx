import React, { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import NavigatorButton from '../../NavigatorButton';

const cx = classNames.bind(styles);
export const pathImg = '/src/assets/images';

const Header = (props: {}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <header className={cx('header')}>
      <div className={cx('wrapper')}>
        <Link to='/'>
          <img src={`${pathImg}/logo.svg`} />
        </Link>
        <div className={cx('nav')}>
          <NavLink
            to='/courses'
            className={({ isActive }) =>
              isActive ? cx('nav__link', 'active') : cx('nav__link')
            }
          >
            <NavigatorButton
              pathIcon={`${pathImg}/courses.svg`}
              text='Courses'
              alt='course'
              isTransition
              header
            />
          </NavLink>
          <NavLink
            to='/tutorials'
            className={({ isActive }) =>
              isActive ? cx('nav__link', 'active') : cx('nav__link')
            }
          >
            <NavigatorButton
              pathIcon={`${pathImg}/tutorials.svg`}
              text='Tutorials'
              alt='tutorials'
              isTransition
              header
            />
          </NavLink>
          <NavLink
            to='/livestreams'
            className={({ isActive }) =>
              isActive ? cx('nav__link', 'active') : cx('nav__link')
            }
          >
            <NavigatorButton
              pathIcon={`${pathImg}/livestreams.svg`}
              text='Livestreams'
              alt='livestreams'
              isTransition
              header
            />
          </NavLink>
          <NavLink
            to='/pricing'
            className={({ isActive }) =>
              isActive ? cx('nav__link', 'active') : cx('nav__link')
            }
          >
            <NavigatorButton
              pathIcon={`${pathImg}/pricing.svg`}
              text='Pricing'
              alt='pricing'
              isTransition
              header
            />
          </NavLink>

          <button
            className={cx('btn', 'nav__link')}
            onClick={() => {
              setIsDropdown((isDropdown) => !isDropdown);
            }}
          >
            <img src={`${pathImg}/more.svg`} alt='more' />
            <Dropdown isActive={isDropdown} />
          </button>
          <button className={cx('btn', 'nav__link')}>
            <img src={`${pathImg}/search.svg`} alt='search' />
          </button>
          <button className={cx('btn', 'nav__link')}>
            <img src={`${pathImg}/account.svg`} alt='account' />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
