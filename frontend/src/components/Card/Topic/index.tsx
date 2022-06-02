import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { clickOpen } from '../../../redux/playSlice';
import { CourseResponse, TopicResponse } from '../../../Types';
import styles from './Topic.module.scss';

const cx = classNames.bind(styles);

export default function Topic(props: {
  icon?: any;
  course?: CourseResponse;
  topic?: TopicResponse;
}) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.topic) {
      setTitle(props.topic.name);
      setDescription(props.topic.description);
    }
    if (props.course) {
      setTitle(props.course.name);
      setDescription(props.course.description);
    }
  }, []);

  const handleClick = () => {
    if (props.topic) {
      dispatch(clickOpen(props.topic.link));
    }
    if (props.course) {
      navigate(
        `/courses/${props.course.name.toLowerCase().replace(/\s/g, '-')}`,
        {
          state: props.course,
        }
      );
    }
  };
  return (
    <>
      <div className={cx('card-topic')} onClick={handleClick}>
        <div className={cx('card-topic__right')}>{props.icon}</div>
        <div className={cx('card-topic__left')}>
          <div className={cx('topic-left__wrapper')}>
            <div className={cx('topic-left__name')}>{title}</div>
          </div>
          <div className={cx('topic-left__desc')}>{description}</div>
        </div>
      </div>
    </>
  );
}
