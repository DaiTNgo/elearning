import classNames from 'classnames/bind';
import React from 'react';
import styles from './Layout.module.scss';
const cx = classNames.bind(styles);

export default function Layout({
  children,
  hover,
  onClick,
}: {
  children: React.ReactNode;
  hover?: boolean;
  onClick?: any;
}) {
  return (
    <div onClick={onClick} className={cx('card', { hover: hover })}>
      {children}
    </div>
  );
}
