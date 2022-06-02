import React from 'react';
import styles from './Handbook.module.scss';
import classNames from 'classnames/bind';
import Icon from '../Icon';
import { PATH_IMG } from '../../utils/constant';
import FanLayout from '../Fan';
import { CourseResponse } from '../../Types';
const cx = classNames.bind(styles);

function Handbook({ course }: { course: CourseResponse }) {
  return (
    <FanLayout size='sm' type='one'>
      <div className={cx('wrapper')}>
        <h3>{course.name}</h3>
        <p>{course.description}</p>
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
