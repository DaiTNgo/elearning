import React, { useEffect, useState } from 'react';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import Instructor from '../../components/Card/Instructor';
import Header from '../../Layout/Header';
import CourseCard from '../Course/components/CourseCard';
import CourseContent from './components/CourseContent';
import TopicWrapper from '../../components/Card/TopicWrapper';
import { axiosCourse } from '../../utils/axios';
import Footer from '../../Layout/Footer';
import TrustSection from '../../components/TrustSection';
import SponsorSection from '../../components/SponsorSection';
const cx = classNames.bind(styles);

function Course() {
  const { state } = useLocation();
  const [topics, setTopics] = useState([]);
  const [course, setCourse] = useState({});
  const [instructor, setInstructor] = useState({});
  useEffect(() => {
    console.log('state', state);
    (async () => {
      const resp = await axiosCourse({
        method: 'get',
        //@ts-ignore
        url: `${state.courseId}`,
      });
      const { description, image, name, type } = resp.data.message;
      setCourse({ description, image, name, type });
      setInstructor(resp.data.message.User);
      setTopics(resp.data.message.Topics);
      setContent({
        type,
        name,
        description,
        avatar: resp.data.message.User.avatar,
        instructorName: resp.data.message.User.user_name,
      });
    })();
  }, []);
  const [content, setContent] = useState({});
  //   const topics = [
  //     {
  //       course_id: 26,
  //       name: 'Lesson 1',
  //       description: 'Variables (Swift 5 compatible)',
  //       link: 'https://www.youtube.com/watch?v=2OZ07fklur8&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX',
  //       order: 1,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 2',
  //       description: 'Data Types',
  //       link: 'https://www.youtube.com/watch?v=BlXrMgmvNBI&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=2',
  //       order: 2,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 3',
  //       description: 'If Statements',
  //       link: 'https://www.youtube.com/watch?v=z_4JuCD0mz8&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=3',
  //       order: 3,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 4',
  //       description: 'Switch Statements',
  //       link: 'https://www.youtube.com/watch?v=PZEWRDbSn6c&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=4',
  //       order: 4,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 5',
  //       description: 'Loops Part 1',
  //       link: 'https://www.youtube.com/watch?v=vxyrLbmm9Oo&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=5',
  //       order: 5,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 6',
  //       description: 'Loops Part 2',
  //       link: 'https://www.youtube.com/watch?v=XDJXLw0Y3Hs&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=6',
  //       order: 6,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 7',
  //       description: 'Functions Part 1',
  //       link: 'https://www.youtube.com/watch?v=2kwyQ5w00Uc&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=7',
  //       order: 7,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 8',
  //       description: 'Functions Part 2',
  //       link: 'https://www.youtube.com/watch?v=jNiBS0bxVQQ&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=8',
  //       order: 8,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 9',
  //       description: 'Classes Part 1',
  //       link: 'https://www.youtube.com/watch?v=ZDzdz52tex4&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=9',
  //       order: 9,
  //     },
  //     {
  //       course_id: 26,
  //       name: 'Lesson 10',
  //       description: 'Classes Part 2 - Inheritance',
  //       link: 'https://www.youtube.com/watch?v=CnvlxNC6FlQ&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=10',
  //       order: 10,
  //     },
  //   ];
  //   @ts-ignore
  return (
    <div>
      <Header />
      <div className={cx('wrapper-content')}>
        {/* @ts-ignore */}
        <CourseCard img={course.image} />
        <CourseContent content={content} />
      </div>
      <div className={cx('wrapper-text')}>
        <hr />
        <p>4 topics</p>
        <p>
          All techniques are explained step-by-step, in a beginner-friendly
          format so that you can easily follow in a cohesive way.
        </p>
      </div>
      <div className={cx('wrapper-topic') + ' container'}>
        <TopicWrapper size='lg' topics={topics} />
      </div>
      <div className='section'></div>

      <TrustSection />
      <SponsorSection />
      <Footer />
    </div>
  );
}

export default Course;
