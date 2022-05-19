import React from 'react';
import styles from './CardLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function CardLayout({
  children,
  isHover,
}: {
  children: React.ReactNode;
  isHover?: boolean;
}) {
  return <div className={cx('card', { hover: isHover })}>{children}</div>;
}
