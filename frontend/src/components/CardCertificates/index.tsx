import React from 'react';
import styles from './CardCertificates.module.scss';
import classNames from 'classnames/bind';
import CardCertificate from '../CardCertificate';

const cx = classNames.bind(styles);

const CardCertificates = (props: {}) => {
  return (
    <div className={cx('certificates-wrapper')}>
      <div className={cx('certificate', 'certificate-1')}>
        <CardCertificate
          icon='ui-logo'
          background='radial-gradient(218.51% 281.09% at 100% 100%,rgba(253, 63, 51, 0.6) 0%,rgba(76, 0, 200, 0.6) 45.83%,rgba(76, 0, 200, 0.6) 100%)'
        />
      </div>
      <div className={cx('certificate', 'certificate-2')}>
        <CardCertificate
          icon='swiftui-logo'
          background=' radial-gradient(100% 128.38% at 100% 100%, rgba(51, 168, 253, 0.2) 0%, rgba(76, 0, 200, 0.2) 100%)'
        />
      </div>
      <div className={cx('certificate', 'certificate-3')}>
        <CardCertificate
          icon='figma-logo'
          background='radial-gradient(120% 154.37% at 100% 100%, rgba(51, 253, 241, 0.1) 0%, rgba(200, 96, 0, 0.1) 100%)'
        />
      </div>
      <div className={cx('certificate', 'certificate-4')}>
        <CardCertificate
          icon='flutter-logo'
          background='linear-gradient(rgb(117, 224, 230) 0%, rgb(57, 19, 184) 100%)'
        />
      </div>
    </div>
  );
};
export default CardCertificates;
