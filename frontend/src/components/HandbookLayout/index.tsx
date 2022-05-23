import React from 'react';
import styles from './HandbookLayout.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function HandbookLayout({
  children,
  one,
  two,
  three,
  lg,
}: {
  children: React.ReactNode;
  one?: boolean;
  two?: boolean;
  three?: boolean;
  lg?: boolean;
}) {
  return (
    <div
      className={cx('handbook', {
        one,
        two,
        three,
        lg,
      })}
    >
      <div className={cx('first-bg')}>{children}</div>
      <div className={cx('second-bg')}></div>
    </div>
  );
}
