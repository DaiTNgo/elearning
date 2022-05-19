import React from 'react';
import styles from './HandbookLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function HandbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cx('handbook')}>
      <div className={cx('first-bg')}>{children}</div>
      <div className={cx('second-bg')}></div>
    </div>
  );
}
