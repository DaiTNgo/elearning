import React from 'react';
import styles from './Text.module.scss';
import classNames from 'classnames/bind';
import NavigatorButton from '../NavigatorButton';
import { PATH_IMG } from '../../utils/constant';
const cx = classNames.bind(styles);

function Text(props: any) {
  return (
    <div className={cx('text')}>
      <p>{props.subTitle}</p>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      {props.icon && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <NavigatorButton
            transition
            more
            round
            text={props.textIcon}
            url={`${PATH_IMG}/${props.icon}.svg`}
          />
        </div>
      )}
    </div>
  );
}

export default Text;
