import React from 'react';
import styles from './CardInstructor.module.scss';
import classNames from 'classnames/bind';
import CardLayout from '../CardLayout';
import { pathImg } from '../Layout/Header';
import Icon from '../Icon';
const cx = classNames.bind(styles);

export default function CardInstructor() {
  return (
    <CardLayout>
      <img
        src='https://images.ctfassets.net/ooa29xqb8tix/4mwdTcJXn8LfpOAtykFI1X/6af85bceea51d36dfef54c1bf586a031/UI_and_animations_in_Swiftui_800x600.png?w=400&q=50'
        alt='image course'
      />
      <div
        style={{
          textAlign: 'center',
          lineHeight: '1.3',
        }}
      >
        <h3
          style={{
            fontSize: '24px',
            fontWeight: '800',
          }}
        >
          Name
        </h3>
        <p
          style={{
            fontWeight: '600',
            fontSize: '13px',
            margin: '10px 0 ',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          eveniet.
        </p>
        <p
          style={{
            fontSize: '13px',
          }}
        >
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 70px 0',
        }}
      >
        <Icon
          pathIcon={`${pathImg}/star.svg`}
          alt='type course'
          isCircle={true}
          isHover={true}
          isPadding={true}
          backgroundColor='rgba(0,0,0,0.2)'
        />
        <Icon
          pathIcon={`${pathImg}/twitter-grey.svg`}
          alt='instructor'
          isCircle={true}
          isHover={true}
          isPadding={true}
          backgroundColor='rgba(0,0,0,0.2)'
        />
      </div>
    </CardLayout>
  );
}
