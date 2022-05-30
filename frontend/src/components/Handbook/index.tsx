import React from 'react';
import styles from './Handbook.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';
import { PATH_IMG } from '../../utils/constant';
import FanLayout from '../Fan';
const cx = classNames.bind(styles);

function Handbook() {
  return (
    <FanLayout size='sm' type='one'>
      <div className={cx('wrapper')}>
        <h3>SwiftUI Handbook</h3>
        <p>
          A comprehensive series of tutorials covering Xcode, SwiftUI and all
          the layout and development techniques
        </p>
        <div className={cx('info')}>
          <Icon
            url={`${PATH_IMG}/file.svg`}
            backgroundColor='rgba(0, 0, 0, 0.2)'
            padding
            round
          />
          <p>80 free tutorials</p>
        </div>
        <div className={cx('info')}>
          <Icon
            url={`${PATH_IMG}/code.svg`}
            backgroundColor='rgba(0, 0, 0, 0.2)'
            padding
            round
          />
          <p>Videos, PDF, files</p>
          <p className={cx('pro')}>PRO</p>
        </div>
      </div>
    </FanLayout>
  );
}

export default Handbook;
