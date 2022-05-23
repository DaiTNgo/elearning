import React from 'react';
import styles from './Pricing.module.scss';
import classNames from 'classnames/bind';
import FanLayout from '../Layout/Fan';
import Icon from '../Icon';
import { PATH_IMG } from '../../utils/constant';
import NavigatorButton from '../NavigatorButton';

const cx = classNames.bind(styles);

function Pricing() {
  const [users, setUsers] = React.useState(5);
  return (
    <div className='container'>
      <div className={cx('wrapper-pricing')}>
        <FanLayout size='md' type='two'>
          <div className={cx('wrapper-content')}>
            <p>BASIC</p>
            <h3>Free</h3>
            <p>Trial</p>
            <div className={cx('wrapper-feature')}>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Free </b>
                  courses
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>5 Premium </b>
                  Videos
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Notify me</b>, Favorite
                </p>
              </div>
            </div>
            <button className={cx('btn-pricing')}>
              <Icon buy url={`${PATH_IMG}/pen-transparent.svg`} round />
              Start Now
            </button>
          </div>
        </FanLayout>
        <FanLayout size='lg' type='one'>
          <div className={cx('wrapper-content')}>
            <p>PRO</p>
            <h3>$19</h3>
            <p>per month, billed monthly</p>
            <div className={cx('wrapper-feature')}>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>All courses </b>
                  and videos
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Source files</b>, ePub
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Certificates</b>, Tests
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Premium</b> tutorials
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>UI</b>, icons, illustrations
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Commercial</b> use
                </p>
              </div>
            </div>
            <button className={cx('btn-pricing')}>
              <Icon buy url={`${PATH_IMG}/credit-transparent.svg`} round />
              Subscribe
            </button>
          </div>
        </FanLayout>
        <FanLayout size='md' type='three'>
          <div className={cx('wrapper-content')}>
            <p>TEAM</p>
            <h3>$25</h3>
            <p>per member, per month, billed monthly</p>
            <div className={cx('wrapper-feature')}>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <div className={cx('wrapper-btn')}>
                  <b>{users} users </b>
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                    }}
                  >
                    <Icon
                      backgroundColor='rgba(255, 255, 255, 0.5)'
                      round
                      padding
                      cursor
                      url={`${PATH_IMG}/remove.svg`}
                      onClick={() => {
                        setUsers((prev) => {
                          if (prev == 2) {
                            return 2;
                          }
                          return prev - 1;
                        });
                      }}
                    />

                    <Icon
                      backgroundColor='rgba(255, 255, 255, 0.5)'
                      padding
                      cursor
                      round
                      url={`${PATH_IMG}/add.svg`}
                      onClick={() => {
                        setUsers((prev) => prev + 1);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Manage</b> subscriptions
                </p>
              </div>
              <div className={cx('feature')}>
                <Icon padding url={`${PATH_IMG}/check-dark.svg`} invert />
                <p>
                  <b>Team </b> progress
                </p>
              </div>
            </div>
            <button className={cx('btn-pricing')}>
              <Icon buy url={`${PATH_IMG}/credit-transparent.svg`} round />
              Subscribe
            </button>
          </div>
        </FanLayout>
      </div>
    </div>
  );
}

export default Pricing;
