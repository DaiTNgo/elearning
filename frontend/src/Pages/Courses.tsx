import React, { useEffect, useState } from 'react';
import CourseCard from '../components/Card/Course';
import CourseDetail from '../components/CourseDetail';
import HeroCourse from '../components/CourseSection/HeroCourse';
import MeetInstructor from '../components/MeetInstructor';
import Layout from '../Layout';
import Footer from '../Layout/Footer';
import { GetAllCourseResponse, ResponseAxiosType } from '../Types';
import { axiosCourse } from '../utils/axios';

function Courses() {
  const [courses, setCourses] = useState<GetAllCourseResponse[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const resp: ResponseAxiosType<GetAllCourseResponse[] & string> =
          await axiosCourse({
            method: 'get',
            url: '/',
          });

        if (resp.data.success) {
          setCourses(resp.data.message);
        } else {
          throw new Error(resp.data.message);
        }
      } catch (error) {
        console.log('file: Courses.tsx >>> line 28 >>> error', error);
      }
    })();
  }, []);
  return (
    <Layout>
      <div className='container'>
        <HeroCourse />
        {courses.length > 0 && <CourseDetail courses={courses.slice(0, 2)} />}
        <div className='course-wrapper-course-layout'>
          {courses.length > 0 &&
            courses.map((course) => {
              return <CourseCard course={course} key={course.course_id} />;
            })}
        </div>
      </div>
      <div className='section'>{/* <MeetInstructor /> */}</div>
    </Layout>
  );
}

export default Courses;
