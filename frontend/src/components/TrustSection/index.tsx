import React from 'react';
import styles from './TrustSection.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import Icon from '../Icon';
const cx = classNames.bind(styles);

function TrustSection() {
  return (
    <div className='container'>
      <div className={cx('trust-wrapper')}>
        <div className={cx('trust-left')}>
          <div className={cx('card')}>
            <Icon url='/src/assets/images/avatar.jpg' size='md' round />
            <h3 className={cx('card__tilte')}>Thomas Wang</h3>
            <p className={cx('card__info')}>
              CREATOR OF DIGITAL PRODUCTS AND EXPERIENCES
            </p>
            <p className={cx('card__desc')}>
              So many great improvements and re-design. The quizzes and
              certificates are something that has been in the pipeline for a
              long time, awesome to see it in the platform for students to show
              their work!
            </p>
          </div>
          <div className={cx('card')}>
            <Icon url='/src/assets/images/avatar.jpg' size='md' round />
            <h3 className={cx('card__tilte')}>Roy van Rooijen</h3>
            <p className={cx('card__info')}>CREATOR OF SKETCH RUNNER</p>
            <p className={cx('card__desc')}>
              Design+Code 1 got me fully into using Sketch and I’m amped to
              {/* discover what’s new in this sequel. Thanks so much for creating it
              and keep up the great work! */}
            </p>
          </div>
        </div>
        <div className={cx('trust-right')}>
          <Text
            title='100,000 people'
            subTitle='TRUSTED BY TEAMS'
            desc='Many startups look for designers who code and developers who design. They use our courses to help train new hires and expand skill sets.'
            textIcon='More stories'
            icon='chat'
          />
        </div>
      </div>
    </div>
  );
}

export default TrustSection;
