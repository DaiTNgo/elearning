import styles from './Icon.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import React from 'react';

export default function Icon({
  pathIcon,
  alt,
}: {
  pathIcon: string;
  alt: string;
}) {
  return <img src={pathIcon} className={cx('icon')} alt={alt} />;
}
