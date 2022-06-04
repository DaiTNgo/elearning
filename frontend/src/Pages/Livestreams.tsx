import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import CourseCard from '../components/Card/Course';
import CourseAndTopic from '../components/Card/CourseAndTopic';
import Text from '../components/Text';
import Layout from '../Layout';
import { GetTutorialResponse } from '../Types';
import { axiosCourse } from '../utils/axios';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

function Livestreams() {
  const [courses, setCourses] = useState<GetTutorialResponse[]>([]);

  useEffect(() => {
    let here = true;
    (() => {
      axiosCourse({
        method: 'get',
        url: '?islivestream=1',
      })
        .then((resp) => {
          if (!here) {
            return;
          }
          if (resp.data.success) {
            setCourses(resp.data.message);
          } else {
            throw new Error(resp.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })();
    return () => {
      here = false;
    };
  }, []);

  return (
    <>
      <div className={cx('bg-livestreams')}></div>
      <Layout>
        <div
          style={{
            textAlign: 'center',
            maxWidth: '40rem',
            margin: '0 auto',
            marginTop: '10rem',
          }}
        >
          <Text
            subTitle='Long unscripted content'
            title='Livestreams and online workshops'
            desc='Interact, ask questions and follow along with a live audience of hundreds'
            path=''
          />
        </div>
        <div className={cx('wrapper-livestream')}>
          {courses.map((item, index) => {
            const {
              course_id,
              name,
              type,
              image,
              User: { avatar },
            } = item;

            return (
              <CourseAndTopic
                key={item.course_id}
                left
                component={
                  <CourseCard
                    course={{
                      course_id,
                      name,
                      type,
                      image,
                      avatar,
                      count: item.Topics.length,
                    }}
                  />
                }
                courseId={item.course_id}
                size='md'
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
}

export default Livestreams;
