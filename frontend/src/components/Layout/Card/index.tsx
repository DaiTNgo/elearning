import React from 'react';
import styles from './CardLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function CardLayout({
  children,
  hover,
}: {
  children: React.ReactNode;
  hover?: boolean;
}) {
  return <div className={cx('card', { hover: hover })}>{children}</div>;
}
