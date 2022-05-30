import React, { Children } from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Dropdown({ isActive, place, children }: any) {
  return (
    <aside
      className={cx(
        'dropdown',
        { isActive },
        {
          [place]: true,
        }
      )}
    >
      {children}
    </aside>
  );
}
