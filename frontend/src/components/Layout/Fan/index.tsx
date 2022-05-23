import React from 'react';
import styles from './Fan.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Fan({
  children,
  size = 'sm',
  type = 'one',
}: {
  children: React.ReactNode;
  size?: 'lg' | 'md' | 'sm';
  type?: 'one' | 'two' | 'three';
}) {
  return (
    <div className={cx('fan', { [size]: true }, { [type]: true })}>
      <div className={cx('first-bg')}>{children}</div>
      <div className={cx('second-bg')}></div>
    </div>
  );
}
