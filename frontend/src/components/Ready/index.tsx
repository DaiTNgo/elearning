import React from 'react';
import styles from './Ready.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import HandbookLayout from '../HandbookLayout';
const cx = classNames.bind(styles);

function Ready() {
  return (
    <div className='container section'>
      <div className={cx('ready-top')}>
        <Text
          title='Ready to start?'
          desc='Get access to all our premium courses, tutorials, downloads, certificates and priority support.'
        />
      </div>
      <div className={cx('ready-middle')}>
        <div className={cx('wrapper-option')}>
          <input id='input' type='checkbox' />
          <label htmlFor='input'>
            <p>Monthly</p>
            <p>Annual</p>
          </label>
        </div>
        <div className={cx('handbook-wrapper')}>
          <HandbookLayout lg two>
            {' '}
            hello
          </HandbookLayout>
          <HandbookLayout lg one>
            {' '}
            hello
          </HandbookLayout>
          <HandbookLayout lg three>
            {' '}
            hello
          </HandbookLayout>
        </div>
      </div>
      <div className={cx('ready-bottom')}>
        <p>
          Save 47% on an annual plan. We support PayPal for an individual annual
          plan only. Any question?
          <a href='mailto:daingo@gmail.com'>contact us</a>
        </p>
      </div>
    </div>
  );
}

export default Ready;
