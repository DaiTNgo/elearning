import React from 'react';
import './CardCertificates.scss';
import classNames from 'classnames';
import CardCertificate from '../CertificateCard';

const CardCertificates = (props: {}) => {
  return (
    <div className={classNames('certificates-wrapper')}>
      <CardCertificate
        icon='ui-logo'
        order={1}
        background='radial-gradient(218.51% 281.09% at 100% 100%,rgba(253, 63, 51, 0.6) 0%,rgba(76, 0, 200, 0.6) 45.83%,rgba(76, 0, 200, 0.6) 100%)'
      />

      <CardCertificate
        icon='swift-logo'
        order={2}
        background=' radial-gradient(100% 128.38% at 100% 100%, rgba(51, 168, 253, 0.2) 0%, rgba(76, 0, 200, 0.2) 100%)'
      />

      <CardCertificate
        order={3}
        icon='figma-logo'
        background='radial-gradient(120% 154.37% at 100% 100%, rgba(51, 253, 241, 0.1) 0%, rgba(200, 96, 0, 0.1) 100%)'
      />

      <CardCertificate
        icon='flutter-logo'
        order={4}
        background='linear-gradient(rgb(117, 224, 230) 0%, rgb(57, 19, 184) 100%)'
      />
    </div>
  );
};
export default CardCertificates;
