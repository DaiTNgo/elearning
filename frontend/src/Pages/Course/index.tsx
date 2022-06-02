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
