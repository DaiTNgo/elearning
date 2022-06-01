import React from 'react';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
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
