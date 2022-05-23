import React from 'react';
import styles from './SponsorSection.module.scss';
import classNames from 'classnames/bind';
import { PATH_IMG } from '../../utils/constant';
const cx = classNames.bind(styles);

function SponsorSection() {
  return (
    <div className='container'>
      <div className={cx('sponsor-wrapper')}>
        <img src={`${PATH_IMG}/square.svg`} alt='sponsor' />
        <img src={`${PATH_IMG}/apple.svg`} alt='sponsor' />
        <img src={`${PATH_IMG}/facebook.svg`} alt='sponsor' />
        <img src={`${PATH_IMG}/airbnb.svg`} alt='sponsor' />
        <img src={`${PATH_IMG}/google.svg`} alt='sponsor' />
        <img src={`${PATH_IMG}/amazon.svg`} alt='sponsor' />
      </div>
    </div>
  );
}

export default SponsorSection;
