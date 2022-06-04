import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import CourseCard from '../components/Card/Course';
import CourseDetail from '../components/CourseDetail';
import HeroCourse from '../components/CourseSection/HeroCourse';
import MeetInstructor from '../components/MeetInstructor';
import { useAppSelector } from '../hooks/redux';
import Layout from '../Layout';
import { GetAllCourseResponse } from '../Types';
import { axiosCourse } from '../utils/axios';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

function Courses() {
  const [courses, setCourses] = useState<GetAllCourseResponse[]>([]);
  const [coursesSearch, setCoursesSearch] = useState<GetAllCourseResponse[]>(
    []
  );
  const search = useAppSelector((state) => state.search.keyword);
  useEffect(() => {
    let here = true;
    (() => {
      axiosCourse({
        method: 'get',
        url: '/',
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
  useEffect(() => {
    if (search != '') {
      const coursesSearch = courses.filter((course) => {
        return course.name.toLowerCase().includes(search);
      });
      setCoursesSearch(coursesSearch);
    } else if (courses.length > 0) {
      setCoursesSearch(courses);
    }
  }, [search, courses]);

  return (
    <>
      <div className={cx('bg-courses')}></div>
      <Layout>
        <div
          style={{
            marginTop: '10rem',
          }}
        ></div>
        <div className='container'>
          <HeroCourse isSearch={true} />
          {search.length > 0 ||
            (courses.length > 0 && (
              <CourseDetail courses={courses.slice(0, 2)} />
            ))}
          {/* {coursesSearch.length == 0 && (
            <h2>Sorry, no results were found for: {search}</h2>
          )} */}
          <div className={cx('course-wrapper-course-layout')}>
            {coursesSearch.length > 0 ? (
              coursesSearch.map((course) => {
                return <CourseCard course={course} key={course.course_id} />;
              })
            ) : (
              <h2>Sorry, no results were found for: {search}</h2>
            )}
          </div>
        </div>
        <div className='section'>
          {courses.length > 1 && (
            <MeetInstructor
              courses={[
                courses[1],
                courses.find((course) => course.id != courses[1].id)!,
              ]}
            />
          )}
        </div>
      </Layout>
    </>
  );
}

export default Courses;
