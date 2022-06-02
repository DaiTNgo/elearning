import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CourseResponse, TopicResponse } from '../../../Types';
import PlayTopic from '../../PlayTopic';
import styles from './Topic.module.scss';

const cx = classNames.bind(styles);

export default function Topic(props: {
  icon?: any;
  course?: CourseResponse;
  topic?: TopicResponse;
}) {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleClose = () => {
    setIsOpen(false);
    setTopic('');
  };
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
      setTopic(props.topic.link);
      setIsOpen(true);
    }
    if (props.course) {
      navigate(
        `/courses/${props.course.name.toLowerCase().replace(/\s/g, '-')}`,
        {
          state: { courseId: props.course.course_id },
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
      <PlayTopic open={isOpen} handleClose={handleClose}>
        <iframe
          width='100%'
          height='100%'
          src={`${topic.replace('.com/', '.com/embed/')}`}
          title='YouTube video player'
          allowFullScreen={true}
        ></iframe>
      </PlayTopic>
    </>
  );
}
