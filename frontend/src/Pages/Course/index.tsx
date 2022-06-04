import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopicWrapper from '../../components/Card/TopicWrapper';
import SponsorSection from '../../components/SponsorSection';
import TrustSection from '../../components/TrustSection';
import Footer from '../../Layout/Footer';
import Header from '../../Layout/Header';
import { axiosCourse } from '../../utils/axios';
import CourseCard from '../Course/components/CourseCard';
import CourseContent from './components/CourseContent';
import styles from './Course.module.scss';
const cx = classNames.bind(styles);

function Course() {
  const { state } = useLocation();
  const [topics, setTopics] = useState([]);
  const [course, setCourse] = useState({});
  useEffect(() => {
    let here = true;
    (() => {
      axiosCourse({
        method: 'get',
        //@ts-ignore
        url: `${state.course_id}`,
      }).then((resp) => {
        if (!here) {
          return;
        }
        const { description, image, name, type } = resp.data.message;
        setCourse({ description, image, name, type });
        setTopics(resp.data.message.Topics);
        setContent({
          type,
          name,
          description,
          avatar: resp.data.message.User.avatar,
          instructorName: resp.data.message.User.user_name,
        });
      });
    })();
    return () => {
      here = false;
    };
  }, []);

  const [content, setContent] = useState({});

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
        <p>{topics.length} topics</p>
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
