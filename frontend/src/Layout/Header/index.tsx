import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Authentication from '../../components/Authentication';
import Icon from '../../components/Icon';
import NavigatorButton from '../../components/NavigatorButton';
import { useAppSelector } from '../../hooks/redux';
import { getUser } from '../../redux/authenSlice';
import { LIST_HEADER, PATH_IMG } from '../../utils/constant';
import Dropdown from '../components/Dropdown';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const user = useAppSelector(getUser);
  const [isDropdown, setIsDropdown] = useState(false);
  const [showFormLogin, setShowFormLogin] = useState<boolean>(false);
  const [listDropdown, setListDropdown] = useState(LIST_HEADER.slice(4));

  const handleLogin = () => {
    setShowFormLogin(!showFormLogin);
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setListDropdown(LIST_HEADER.slice(1));
      } else if (window.innerWidth < 900) {
        setListDropdown(LIST_HEADER.slice(2));
      } else if (window.innerWidth < 1024) {
        setListDropdown(LIST_HEADER.slice(3));
      } else {
        setListDropdown(LIST_HEADER.slice(4));
      }
    });
  }, []);
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
            {LIST_HEADER.slice(0, 4).map((item, index) => {
              return (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? cx('nav__link', 'active') : cx('nav__link')
                  }
                  key={index}
                >
                  <NavigatorButton
                    url={item.pathIcon}
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

            <button
              className={cx('btn', 'nav__link')}
              onClick={() => {
                setIsDropdown((isDropdown) => !isDropdown);
              }}
            >
              <img src={`${PATH_IMG}/more.svg`} alt='more' />
              <Dropdown isActive={isDropdown} place='right'>
                {listDropdown.map((item, index) => {
                  return (
                    <NavLink to={item.to} key={item.text}>
                      <NavigatorButton
                        url={item.pathIcon}
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
              </Dropdown>
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
            // onClick={() => {
            //   setIsDropdown((isDropdown) => !isDropdown);
            // }}
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
