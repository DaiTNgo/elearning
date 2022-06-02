import classNames from 'classnames/bind';
import { CourseResponse, TopicResponse } from '../../../Types';
import { PATH_IMG } from '../../../utils/constant';
import Icon from '../../Icon';
import TopicCard from '../Topic';
import styles from './TopicWrapper.module.scss';
const cx = classNames.bind(styles);
type TopicWrapperType = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  title?: string;
  topics?: TopicResponse[];
  courses?: CourseResponse[];
};
function TopicWrapper({
  size = 'xs',
  topics,
  courses,
  title,
}: TopicWrapperType) {
  return (
    <>
      {title && <p className={cx('title')}>{title}</p>}
      <div
        className={cx('card-topic__wrapper', {
          [size]: true,
        })}
      >
        {topics &&
          topics.length > 0 &&
          topics.map((topic, index) => {
            return (
              <TopicCard
                key={index}
                icon={
                  <Icon
                    order={topic.order}
                    round
                    padding
                    backgroundColor='rgba(255,255,255,0.1)'
                  />
                }
                topic={topic}
              />
            );
          })}

        {courses &&
          courses.length > 0 &&
          courses.map((course) => {
            return (
              <TopicCard
                key={course.course_id}
                icon={
                  course.type && (
                    <Icon url={`${PATH_IMG}/${course.type}-logo.svg`} round />
                  )
                }
                course={course}
              />
            );
          })}
      </div>
    </>
  );
}

export default TopicWrapper;
