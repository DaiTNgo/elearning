import React from 'react';
import styles from '../Course.module.scss';
import classNames from 'classnames/bind';
import Icon from '../../../components/Icon';
import { PATH_IMG } from '../../../utils/constant';
import ButtonBuy from '../../../components/HeroSection/DesignAndCode/ButtonBuy';
const cx = classNames.bind(styles);

function CourseContent({ content }: { content: any }) {
  return (
    <div className={cx('course-content')}>
      <Icon
        url={content.type && `${PATH_IMG}/${content.type}-logo.svg`}
        size='lg'
      />
      <h1 className={cx('title')}>{content.name}</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Icon
          url={`${PATH_IMG}/star.svg`}
          hover
          round
          padding
          backgroundColor='rgba(0,0,0,0.2)'
        />
        Add to favorites
      </div>
      <div className={cx('description')}>{content.description}</div>
      <div className={cx('instructor')}>
        <Icon url={content.avatar} round /> Taught by {content.instructorName}
      </div>
      <div>
        <ButtonBuy content='Buy Course' />
      </div>
      <p
        style={{
          maxWidth: '280px',
        }}
      >
        Purchase includes access to 30+ courses, 240+ premium tutorials, 120+
        hours of videos, source files and certificates.
      </p>
    </div>
  );
}

export default CourseContent;
