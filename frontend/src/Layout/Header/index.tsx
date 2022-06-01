import React, { MouseEventHandler, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import { useAppSelector } from '../../hooks/redux';
import { getUser } from '../../redux/authenSlice';
import { PATH_IMG } from '../../utils/constant';
import Authentication from '../../components/Authentication';
import NavigatorButton from '../../components/NavigatorButton';
import Icon from '../../components/Icon';

const cx = classNames.bind(styles);

const Header = (props: {}) => {
  const user = useAppSelector(getUser);
  const [isDropdown, setIsDropdown] = useState(false);
  const [showFormLogin, setShowFormLogin] = useState<boolean>(false);
  const [listHeader, setListHeader] = useState([
    {
      to: '/courses',
      url: `${PATH_IMG}/courses.svg`,
      text: 'Courses',
      alt: 'course',
      transition: true,
      header: true,
    },
    {
      to: '/tutorials',
      url: `${PATH_IMG}/tutorials.svg`,
      text: 'Tutorials',
      alt: 'tutorials',
      transition: true,
      header: true,
    },
    {
      to: '/livestreams',
      url: `${PATH_IMG}/livestreams.svg`,
      text: 'Livestreams',
      alt: 'livestreams',
      transition: true,
      header: true,
    },
    {
      to: '/pricing',
      url: `${PATH_IMG}/pricing.svg`,
      text: 'Pricing',
      alt: 'pricing',
      transition: true,
      header: true,
    },
  ]);
  const handleLogin = () => {
    setShowFormLogin(!showFormLogin);
  };
  return (
    <>
      {showFormLogin && (
        <div className={cx('overlay')}>
          <Authentication handleLogin={handleLogin} />
        </div>
      )}
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
                    url={item.url}
                    text={item.text}
                    alt={item.alt}
                    transition
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
            {user ? (
              <button className={cx('btn', 'nav__link')}>
                <img
                  src={`${PATH_IMG}/avatar.jpg`}
                  alt='account'
                  className={cx('avatar')}
                />
              </button>
            ) : (
              <button className={cx('btn', 'nav__link')} onClick={handleLogin}>
                <img
                  src={`${PATH_IMG}/account.svg`}
                  alt='account'
                  className={cx('avatar')}
                />
              </button>
            )}
          </nav>

          <button
            onClick={() => {
              setIsDropdown((isDropdown) => !isDropdown);
            }}
            className={cx('hamburger')}
          >
            <Icon url={`${PATH_IMG}/hamburger-menu.svg`} padding />
            <Dropdown isActive={isDropdown} place='right'>
              <NavigatorButton
                url={`${PATH_IMG}/downloads.svg`}
                text='Downloads'
                alt='Downloads'
              />
              <NavigatorButton
                url={`${PATH_IMG}/calendar.svg`}
                text='Updates'
                alt='updates'
              />
              <NavigatorButton
                url={`${PATH_IMG}/setting.svg`}
                text='Lite mode on'
                alt='settings'
              />

              <NavigatorButton
                url={`${PATH_IMG}/courses.svg`}
                text='Courses'
                alt='course'
              />

              <NavigatorButton
                url={`${PATH_IMG}/tutorials.svg`}
                text='Tutorials'
                alt='tutorials'
              />

              <NavigatorButton
                url={`${PATH_IMG}/livestreams.svg`}
                text='Livestreams'
                alt='livestreams'
              />

              <NavigatorButton
                url={`${PATH_IMG}/pricing.svg`}
                text='Pricing'
                alt='pricing'
              />
            </Dropdown>
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
