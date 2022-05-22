import React from 'react';
import CardCertificates from '../CardCertificates';
import Text from '../Text';
import styles from './CertificateSection.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function CertificateSection() {
  return (
    <div className='container section'>
      <div className={cx('certificate-section__wrapper')}>
        <CardCertificates />
        <Text
          title='Get certificates'
          desc='After passing a test, we’ll award you with an online certificate. You can add them to your profile after completing the courses.'
          icon='account'
          subTitle='Create a profile'
          textIcon='Create account'
        />
      </div>
    </div>
  );
}

export default CertificateSection;
