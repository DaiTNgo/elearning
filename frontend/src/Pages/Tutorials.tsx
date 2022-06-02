import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import TopicWrapper from '../components/Card/TopicWrapper';
import Handbook from '../components/Handbook';
import Layout from '../Layout';
import { GetTutorialResponse, ResponseAxiosType } from '../Types';
import { axiosCourse } from '../utils/axios';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

function Tutorials() {
  const [courses, setCourses] = useState<GetTutorialResponse[]>([]);
  console.log('>>> re-render : tutorials');
  useEffect(() => {
    let here = true;
    (() => {
      axiosCourse({
        method: 'get',
        url: '?istutorial=1',
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
  //   useEffect(() => {
  //     let here = true;
  //     (async () => {
  //       try {
  //         const resp: ResponseAxiosType<GetTutorialResponse[] & string> =
  //           await axiosCourse({
  //             method: 'get',
  //             url: '?istutorial=1',
  //           });
  //         if (!here) {
  //           return;
  //         }
  //         if (resp.data.success) {
  //           setCourses(resp.data.message);
  //         } else {
  //           throw new Error(resp.data.message);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //     return () => {
  //       here = false;
  //     };
  //   }, []);
  return (
    <>
      <div className={cx('bg-tutorials')}></div>
      <Layout>
        <div className='container'>
          {courses.length > 0 &&
            courses.map((item, index) => {
              const { Topics, User, ...course } = item;
              return (
                <div key={index} className={cx('tutorial')}>
                  <Handbook course={course} />
                  <div className={cx('topic-wrapper')}>
                    <TopicWrapper size='md' topics={item.Topics} />
                  </div>
                </div>
              );
            })}
        </div>
      </Layout>
    </>
  );
}

export default Tutorials;
