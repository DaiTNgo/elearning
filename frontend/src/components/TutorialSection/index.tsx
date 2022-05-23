import React from 'react';
import styles from './TutorialSection.module.scss';
import classNames from 'classnames/bind';
import Text from '../Text';
import Handbook from '../Handbook';
const cx = classNames.bind(styles);

function TutorialSection() {
  return (
    <div className='container section'>
      <div className={cx('tutorial-wrapper')}>
        <div className={cx('tutorial-left')}>
          <Text
            title='Tutorials to guide you beyond'
            subTitle='Premium tutorials'
            icon='tutorials'
            desc='Once you’ve completed the courses, learn from our quick design and code tutorials to strengthen your knowledge'
            textIcon='More tutorials'
          />
        </div>
        <div className={cx('tutorial-right')}>
          <div className={cx('handbook-wrapper')}>
            <Handbook />
            <Handbook />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TutorialSection;
