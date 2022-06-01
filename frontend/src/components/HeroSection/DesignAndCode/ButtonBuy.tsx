import React from 'react';
import styles from './DesignAndCode.module.scss';
import classNames from 'classnames/bind';
import { PATH_IMG } from '../../../utils/constant';
const cx = classNames.bind(styles);

function ButtonBuy({ content }: { content: string }) {
  return (
    <button className={cx('btn')}>
      <div className={cx('btn-wrapper')}>
        <div className={cx('wrapper-img')}>
          <img src={`${PATH_IMG}/pricing-large.svg`} alt='' />
          <img src={`${PATH_IMG}/rotate.svg`} alt='' />
        </div>
        <div className={cx('content')}>
          <p className={cx('text-caption')}>{content}</p>
          <p className={cx('text-small')}>$19 per month</p>
        </div>
      </div>
    </button>
  );
}

export default ButtonBuy;
