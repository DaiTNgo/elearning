import React from 'react';
import './CardCertificate.scss';
import classNames from 'classnames';
import Icon from '../Icon';
import { PATH_IMG } from '../../utils/constant';
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
      className={classNames('certificate', {
        [`certificate-${order}`]: true,
      })}
      style={{
        background: `${background}`,
      }}
    >
      <div className={classNames('certificate-left')}>
        <div className={classNames('certificate-left-top')}>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Adipisicing elit. Veniam, omnis.</p>
        </div>
        <div className={classNames('certificate-left-bottom')}>
          <div className={classNames('line-1', 'line')}></div>
          <div className={classNames('line-2', 'line')}></div>
          <div className={classNames('line-3', 'line')}></div>
          <div className={classNames('line-4', 'line')}></div>
        </div>
      </div>
      <div className={classNames('certificate-right')}>
        <Icon pathIcon={`${PATH_IMG}/${icon}.svg`} size='md' />
      </div>
    </div>
  );
}
