import { useEffect, useState } from 'react';
import CourseCard from '../components/Card/Course';
import CourseDetail from '../components/CourseDetail';
import HeroCourse from '../components/CourseSection/HeroCourse';
import Layout from '../Layout';
import { GetAllCourseResponse, ResponseAxiosType } from '../Types';
import { axiosCourse } from '../utils/axios';
import MeetInstructor from '../components/MeetInstructor';
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
  if (courses.length == 0) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className='container'>
        <HeroCourse />
        {courses.length > 0 && <CourseDetail courses={courses.slice(0, 2)} />}
        <div className='course-wrapper-course-layout'>
          {courses.map((course) => {
            return <CourseCard course={course} key={course.course_id} />;
          })}
        </div>
      </div>
      <div className='section'>
        <MeetInstructor
          courses={[
            courses[1],
            courses.find((course) => course.id != courses[1].id)!,
          ]}
        />
      </div>
    </Layout>
  );
}

export default Courses;
