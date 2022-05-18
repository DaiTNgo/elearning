import React from 'react';
import styles from './Dropdown.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export default function Dropdown({ isActive }: any) {
  return <aside className={cx('dropdown', { isActive })}>Dropdown</aside>;
}
