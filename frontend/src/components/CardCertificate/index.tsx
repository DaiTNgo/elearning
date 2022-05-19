import React from 'react';
import styles from './CardCertificate.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';
import { pathImg } from '../Layout/Header';
const cx = classNames.bind(styles);

export default function CardCertificate({
  icon,
  background,
  order,
}: {
  icon: string;
  background: string;
  order: number;
}) {
  return (
    <div
      className={cx('ceritfi', {
        'certifi-order': order,
      })}
      style={{
        background: `${background}`,
      }}
    >
      <div className={cx('certifi-left')}>
        <div className={cx('certifi-left-top')}>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Adipisicing elit. Veniam, omnis.</p>
        </div>
        <div className={cx('certifi-left-bottom')}>
          <div className={cx('line-1', 'line')}></div>
          <div className={cx('line-2', 'line')}></div>
          <div className={cx('line-3', 'line')}></div>
          <div className={cx('line-4', 'line')}></div>
        </div>
      </div>
      <div className={cx('certifi-right')}>
        <Icon pathIcon={`${pathImg}/${icon}.svg`} size='md' />
      </div>
    </div>
  );
}
