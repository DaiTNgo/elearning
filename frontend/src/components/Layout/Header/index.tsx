import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import NavigatorButton from '../../NavigatorButton';
import Icon from '../../Icon';
import { PATH_IMG } from '../../../utils/constant';

const cx = classNames.bind(styles);

const Header = (props: {}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [listHeader, setListHeader] = useState([
    {
      to: '/courses',
      pathIcon: `${PATH_IMG}/courses.svg`,
      text: 'Courses',
      alt: 'course',
      isTransition: true,
      header: true,
    },
    {
      to: '/tutorials',
      pathIcon: `${PATH_IMG}/tutorials.svg`,
      text: 'Tutorials',
      alt: 'tutorials',
      isTransition: true,
      header: true,
    },
    {
      to: '/livestreams',
      pathIcon: `${PATH_IMG}/livestreams.svg`,
      text: 'Livestreams',
      alt: 'livestreams',
      isTransition: true,
      header: true,
    },
    {
      to: '/pricing',
      pathIcon: `${PATH_IMG}/pricing.svg`,
      text: 'Pricing',
      alt: 'pricing',
      isTransition: true,
      header: true,
    },
  ]);
  return (
    <header className={cx('header')}>
      <div className={cx('header-wrapper') + ' container'}>
        <Link to='/'>
          <img src={`${PATH_IMG}/logo.svg`} />
        </Link>

        <nav className={cx('nav')}>
          {listHeader.map((item, index) => {
            return (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? cx('nav__link', 'active') : cx('nav__link')
                }
                key={index}
              >
                <NavigatorButton
                  pathIcon={item.pathIcon}
                  text={item.text}
                  alt={item.alt}
                  isTransition
                  hover
                  header
                  sm_2={true}
                />
              </NavLink>
            );
          })}

          <button className={cx('btn', 'nav__link')}>
            <img src={`${PATH_IMG}/more.svg`} alt='more' />
            {/* <Dropdown isActive={isDropdown} /> */}
          </button>
          <button className={cx('btn', 'nav__link')}>
            <img src={`${PATH_IMG}/search.svg`} alt='search' />
          </button>
          <button className={cx('btn', 'nav__link')}>
            <img src={`${PATH_IMG}/account.svg`} alt='account' />
          </button>
        </nav>

        <button
          onClick={() => {
            setIsDropdown((isDropdown) => !isDropdown);
          }}
          className={cx('hamburger')}
        >
          <Icon pathIcon={`${PATH_IMG}/hamburger-menu.svg`} isPadding />
          <Dropdown isActive={isDropdown} place='right'>
            <NavigatorButton
              pathIcon={`${PATH_IMG}/downloads.svg`}
              text='Downloads'
              alt='Downloads'
            />
            <NavigatorButton
              pathIcon={`${PATH_IMG}/calendar.svg`}
              text='Updates'
              alt='updates'
            />
            <NavigatorButton
              pathIcon={`${PATH_IMG}/setting.svg`}
              text='Lite mode on'
              alt='settings'
            />

            <NavigatorButton
              pathIcon={`${PATH_IMG}/courses.svg`}
              text='Courses'
              alt='course'
            />

            <NavigatorButton
              pathIcon={`${PATH_IMG}/tutorials.svg`}
              text='Tutorials'
              alt='tutorials'
            />

            <NavigatorButton
              pathIcon={`${PATH_IMG}/livestreams.svg`}
              text='Livestreams'
              alt='livestreams'
            />

            <NavigatorButton
              pathIcon={`${PATH_IMG}/pricing.svg`}
              text='Pricing'
              alt='pricing'
            />
          </Dropdown>
        </button>
      </div>
    </header>
  );
};
export default Header;
