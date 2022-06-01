import classNames from 'classnames/bind';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlayTopic from '../../PlayTopic';
import styles from './Topic.module.scss';

const cx = classNames.bind(styles);

export default function Topic(props: {
  title?: any;
  description?: any;
  icon?: any;
  course?: any;
  topic?: any;
}) {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
    setTopic('');
  };
  const handleClick = () => {
    if (props.topic) {
      setTopic(props.topic.link);
      setIsOpen(true);
    }
    if (props.course) {
      navigate(`/courses/${props.course.name.replace(/\s/g, '-')}`, {
        state: props.course,
      });
    }
  };
  return (
    <>
      <div className={cx('card-topic')} onClick={handleClick}>
        <div className={cx('card-topic__right')}>{props.icon}</div>
        <div className={cx('card-topic__left')}>
          <div className={cx('topic-left__wrapper')}>
            <div className={cx('topic-left__name')}>{props.title}</div>
            {/* <div className={cx('topic-left__timing')}>5:42</div> */}
          </div>
          <div className={cx('topic-left__desc')}>{props.description}</div>
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
