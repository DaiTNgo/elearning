import React, { useEffect, useState } from 'react';
import { CourseResponse } from '.';
import CourseCard from '../components/Card/Course';
import TopicWrapper from '../components/Card/TopicWrapper';
import CourseDetail from '../components/CourseDetail';
import HeroCourse from '../components/CourseSection/HeroCourse';
import Handbook from '../components/Handbook';
import MeetInstructor from '../components/MeetInstructor';
import Layout from '../Layout';
import Footer from '../Layout/Footer';
import { axiosCourse } from '../utils/axios';

function Tutorials() {
  const [courses, setCourses] = useState<CourseResponse[]>([]);
  const data = [
    {
      course_id: 29,
      instructor_id: 3,
      price: '0',
      description:
        'When it comes to writing code in Framer, sooner or later you’re going to get stuck on a tricky problem. In this video, you’ll learn how to get help through snippets: re-usable solutions to common problems.',
      name: 'Framer Tutorial',
      image:
        'https://images.ctfassets.net/ooa29xqb8tix/3NM5VhT1oXziOULEemEEzS/f164c43f91375abc9bb3d44defc9bea1/Design_and_Code_in_Framer_X_800x600_cover_new.png?w=400&q=50',
      type: 'framer',
      watch: 'tutorial',
      createdAt: '2022-05-31T08:28:37.000Z',
      updatedAt: '2022-05-31T08:28:37.000Z',
      deletedAt: null,
      Topics: [
        {
          course_id: 29,
          name: 'Lesson 1',
          description: 'Create a Date Picker',
          link: 'https://www.youtube.com/watch?v=dm1GjV-1x6E&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=1',
          order: 1,
          createdAt: '2022-05-31T08:28:56.000Z',
          updatedAt: '2022-05-31T08:28:56.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 2',
          description: 'Find Help with Snippets',
          link: 'https://www.youtube.com/watch?v=svfT0oaaUmU&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=2',
          order: 2,
          createdAt: '2022-05-31T08:29:09.000Z',
          updatedAt: '2022-05-31T08:29:09.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 3',
          description: 'Using the Framer CLI',
          link: 'https://www.youtube.com/watch?v=7j5BSpJHFmA&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=3',
          order: 3,
          createdAt: '2022-05-31T08:29:21.000Z',
          updatedAt: '2022-05-31T08:29:21.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 4',
          description: 'Use Git with Framer Projects',
          link: 'https://www.youtube.com/watch?v=YrrPU9ss_yw&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=4',
          order: 4,
          createdAt: '2022-05-31T08:29:34.000Z',
          updatedAt: '2022-05-31T08:29:34.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 5',
          description: 'Explore Fraction Units in Stacks',
          link: 'https://www.youtube.com/watch?v=4GiuKMdl6Pw&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=5',
          order: 5,
          createdAt: '2022-05-31T08:29:46.000Z',
          updatedAt: '2022-05-31T08:29:46.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 6',
          description: 'Build an Interactive List',
          link: 'https://www.youtube.com/watch?v=qWHSSkqANiQ&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=6',
          order: 6,
          createdAt: '2022-05-31T08:30:01.000Z',
          updatedAt: '2022-05-31T08:30:01.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 7',
          description: 'Build an Animated Accordion',
          link: 'https://www.youtube.com/watch?v=I1W_O7mYZBU&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=7',
          order: 7,
          createdAt: '2022-05-31T08:30:13.000Z',
          updatedAt: '2022-05-31T08:30:13.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 8',
          description: 'Code with Design Components',
          link: 'https://www.youtube.com/watch?v=HMT7GXaTvS8&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=8',
          order: 8,
          createdAt: '2022-05-31T08:30:24.000Z',
          updatedAt: '2022-05-31T08:30:24.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 9',
          description: 'Control a Page Component with Overrides',
          link: 'https://www.youtube.com/watch?v=G6uYZflYd1w&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=9',
          order: 9,
          createdAt: '2022-05-31T08:30:37.000Z',
          updatedAt: '2022-05-31T08:30:37.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 10',
          description: 'Build a Drag Handle',
          link: 'https://www.youtube.com/watch?v=UMGnYRJuJog&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=10',
          order: 10,
          createdAt: '2022-05-31T08:30:49.000Z',
          updatedAt: '2022-05-31T08:30:49.000Z',
        },
        {
          course_id: 29,
          name: 'Lesson 11',
          description: 'Installing Packages with Yarn',
          link: 'https://www.youtube.com/watch?v=vmn4UZzOuGw&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=11',
          order: 11,
          createdAt: '2022-05-31T08:31:04.000Z',
          updatedAt: '2022-05-31T08:31:04.000Z',
        },
      ],
      User: {
        id: 3,
        email: 'dai2@gmail.com',
        role: 'instructor',
        password:
          '$2b$10$b3n1DkyC4pSdkd0DijQqKeTcctdi0yXDLYAd5RKmlus03fM21wGeC',
        user_name: 'Dai Ngo',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Dev',
        acc_twiter: 'https://twitter.com/DaiNgo72',
        my_website: 'https://google.com',
        createdAt: '2022-05-15T12:44:14.000Z',
        updatedAt: '2022-05-15T13:27:23.000Z',
        deletedAt: null,
      },
    },
    {
      course_id: 31,
      instructor_id: 5,
      price: '0',
      description:
        'In this video I will give you a quick introduction to the most common functionalities of a UI/UX Design tool called Figma.',
      name: 'Figma IntroductionTutorial For UI/UX Designers',
      image:
        'https://images.ctfassets.net/ooa29xqb8tix/75irTnKFPIXtYaBinuiDAl/01f68a3d04fae66751595786e2154a7c/Prototyping_in_Figma_800x600.png?w=400&q=50',
      type: 'figma',
      watch: 'tutorial',
      createdAt: '2022-05-31T08:45:47.000Z',
      updatedAt: '2022-05-31T08:46:23.000Z',
      deletedAt: null,
      Topics: [
        {
          course_id: 31,
          name: 'Lesson 1',
          description: 'Learn Figma Under 1 Hour',
          link: 'https://www.youtube.com/watch?v=Qhg5NFs7ET4&list=PLAd6URyguzorMoQ4uUu6kWHNnGc8ePbPq&index=1',
          order: 1,
          createdAt: '2022-05-31T08:46:25.000Z',
          updatedAt: '2022-05-31T08:46:25.000Z',
        },
      ],
      User: {
        id: 5,
        email: 'dai3@gmail.com',
        role: 'instructor',
        password:
          '$2b$10$WTUftPd3kexELZoOsE0qze8LrqK2W1ML9PynkiN7FKAXw3o7baD1i',
        user_name: 'Dai Ngo',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        description: '',
        acc_twiter: '',
        my_website: '',
        createdAt: '2022-05-15T12:44:28.000Z',
        updatedAt: '2022-05-15T12:44:28.000Z',
        deletedAt: null,
      },
    },
    {
      course_id: 33,
      instructor_id: 5,
      price: '22',
      description: 'This is a Full redux course to learn about redux.',
      name: 'Full Redux Course Tutorial',
      image:
        'https://images.ctfassets.net/ooa29xqb8tix/J6KiaOqQyBtSa84hx6fuI/2cd1d475743a2a42c8643b2a69e88547/Advanced_React_Hooks_800x600_cover.png?w=400&q=50',
      type: 'react',
      watch: 'tutorial',
      createdAt: '2022-05-31T08:52:00.000Z',
      updatedAt: '2022-05-31T08:58:01.000Z',
      deletedAt: null,
      Topics: [
        {
          course_id: 33,
          name: 'Lesson 1',
          description:
            'If you are a Beginner who wants to learn redux then this course is for you or if you are professional who wants a refresher course, then this course is for you as well.\nWe will be using Redux with ReduxToolkit Library and will create an Application where ',
          link: 'https://www.youtube.com/watch?v=wQ463BeoIZc&list=PLlR2O33QQkfU81zWYlpjEWuB7fVopWIV4',
          order: 1,
          createdAt: '2022-05-31T08:52:27.000Z',
          updatedAt: '2022-05-31T08:52:27.000Z',
        },
      ],
      User: {
        id: 5,
        email: 'dai3@gmail.com',
        role: 'instructor',
        password:
          '$2b$10$WTUftPd3kexELZoOsE0qze8LrqK2W1ML9PynkiN7FKAXw3o7baD1i',
        user_name: 'Dai Ngo',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        description: '',
        acc_twiter: '',
        my_website: '',
        createdAt: '2022-05-15T12:44:28.000Z',
        updatedAt: '2022-05-15T12:44:28.000Z',
        deletedAt: null,
      },
    },
    {
      course_id: 34,
      instructor_id: 5,
      price: '23',
      description: 'Learn React JS with Typescript in one video.',
      name: 'React Typescript Tutorial',
      image:
        'https://images.ctfassets.net/ooa29xqb8tix/7MWFSk9hPe69mpKoQZrU8v/f699c21b34e3a1269faf7a84a7e76cc0/React_Hook_800x600_cover_new.png?w=400&q=50',
      type: 'react',
      watch: 'tutorial',
      createdAt: '2022-05-31T08:53:55.000Z',
      updatedAt: '2022-05-31T08:53:55.000Z',
      deletedAt: null,
      Topics: [
        {
          course_id: 34,
          name: 'Lesson 1',
          description: 'Learn React JS with Typescript',
          link: 'https://www.youtube.com/watch?v=knqz3_rPcKk&list=PLKhlp2qtUcSbZaGj7DGyZ7BLupZEZOkAw',
          order: 1,
          createdAt: '2022-05-31T08:54:16.000Z',
          updatedAt: '2022-05-31T08:54:16.000Z',
        },
      ],
      User: {
        id: 5,
        email: 'dai3@gmail.com',
        role: 'instructor',
        password:
          '$2b$10$WTUftPd3kexELZoOsE0qze8LrqK2W1ML9PynkiN7FKAXw3o7baD1i',
        user_name: 'Dai Ngo',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        description: '',
        acc_twiter: '',
        my_website: '',
        createdAt: '2022-05-15T12:44:28.000Z',
        updatedAt: '2022-05-15T12:44:28.000Z',
        deletedAt: null,
      },
    },
    {
      course_id: 37,
      instructor_id: 1,
      price: '0',
      description: 'Introduction to TypeScript',
      name: 'TypeScript Tutorial',
      image:
        'https://images.ctfassets.net/ooa29xqb8tix/4ZoOhVHDkMONJqv8g0aVYX/67d236ed77d33dbe4036b44fcf7f4b98/Build_an_Expense_Tracker_App_in_SwiftUI_800x600.png?w=400&q=50',
      type: 'react',
      watch: 'tutorial',
      createdAt: '2022-05-31T09:04:22.000Z',
      updatedAt: '2022-05-31T09:04:22.000Z',
      deletedAt: null,
      Topics: [
        {
          course_id: 37,
          name: 'Lesson 1',
          description: 'Introduction to TypeScript',
          link: 'https://www.youtube.com/watch?v=DypNdzjaPoM&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn',
          order: 1,
          createdAt: '2022-05-31T09:04:38.000Z',
          updatedAt: '2022-05-31T09:04:38.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 2',
          description: 'Your First TypeScript App',
          link: 'https://www.youtube.com/watch?v=ogGekEUr91U&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=2',
          order: 2,
          createdAt: '2022-05-31T09:04:50.000Z',
          updatedAt: '2022-05-31T09:04:50.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 3',
          description: 'Data Types in TypeScript',
          link: 'https://www.youtube.com/watch?v=wqJSXCWFVlE&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=3',
          order: 3,
          createdAt: '2022-05-31T09:05:01.000Z',
          updatedAt: '2022-05-31T09:05:01.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 4',
          description: 'Classes in TypeScript',
          link: 'https://www.youtube.com/watch?v=oq2Grv-Arsw&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=4',
          order: 4,
          createdAt: '2022-05-31T09:05:15.000Z',
          updatedAt: '2022-05-31T09:05:15.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 5',
          description: 'Constructors in TypeScript ',
          link: 'https://www.youtube.com/watch?v=HPvLNb6J_O4&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=5',
          order: 5,
          createdAt: '2022-05-31T09:05:27.000Z',
          updatedAt: '2022-05-31T09:05:27.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 6',
          description: 'Array of Objects in TypeScript',
          link: 'https://www.youtube.com/watch?v=YZZ6rVuu_Mk&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=6',
          order: 6,
          createdAt: '2022-05-31T09:05:38.000Z',
          updatedAt: '2022-05-31T09:05:38.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 7',
          description: 'Inheritance in TypeScript',
          link: 'https://www.youtube.com/watch?v=k6nRM2KQJ1M&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=7',
          order: 7,
          createdAt: '2022-05-31T09:05:52.000Z',
          updatedAt: '2022-05-31T09:05:52.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 8',
          description: 'Access Modifiers in TypeScript',
          link: 'https://www.youtube.com/watch?v=t0wAPOOrG6A&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=8',
          order: 8,
          createdAt: '2022-05-31T09:06:05.000Z',
          updatedAt: '2022-05-31T09:06:05.000Z',
        },
        {
          course_id: 37,
          name: 'Lesson 9',
          description: 'Interfaces in TypeScript',
          link: 'https://www.youtube.com/watch?v=2S7KtA6ONoY&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=9',
          order: 9,
          createdAt: '2022-05-31T09:06:20.000Z',
          updatedAt: '2022-05-31T09:06:20.000Z',
        },
      ],
      User: {
        id: 1,
        email: 'dai1@gmail.com',
        role: 'instructor',
        password:
          '$2b$10$0vDCF8UNvXa99mcKEcH3me93A7Mi0ugtT0NnR0jWotd38dv3rn8Lu',
        user_name: 'Dai Ngo',
        avatar:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
        description: '',
        acc_twiter: '',
        my_website: '',
        createdAt: '2022-05-15T12:41:31.000Z',
        updatedAt: '2022-05-15T12:41:31.000Z',
        deletedAt: null,
      },
    },
    {
      course_id: 39,
      instructor_id: 3,
      price: '0',
      description: 'Swift Tutorial',
      name: 'Swift Tutorial',
      image:
        'https://images.ctfassets.net/ooa29xqb8tix/2DXrdwlcykUGvn0zgdP9mM/882eac65279692ade4bb900ed5e658f3/CSS_Handbook_800x600_cover.png?w=400&q=50',
      type: 'swift',
      watch: 'tutorial',
      createdAt: '2022-05-31T09:24:53.000Z',
      updatedAt: '2022-05-31T09:24:53.000Z',
      deletedAt: null,
      Topics: [
        {
          course_id: 39,
          name: 'Lesson 1',
          description: 'Optionals & Unwrapping',
          link: 'https://www.youtube.com/watch?v=9K89xEuSiYA&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=7',
          order: 1,
          createdAt: '2022-05-31T09:25:06.000Z',
          updatedAt: '2022-05-31T09:25:06.000Z',
        },
        {
          course_id: 39,
          name: 'Lesson 2',
          description: 'If Else Conditionals',
          link: 'https://www.youtube.com/watch?v=rBotA3jwWkY&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=8',
          order: 2,
          createdAt: '2022-05-31T09:25:20.000Z',
          updatedAt: '2022-05-31T09:25:20.000Z',
        },
        {
          course_id: 39,
          name: 'Lesson 3',
          description: 'Guard Statements',
          link: 'https://www.youtube.com/watch?v=DTd7HHSAw-4&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=9',
          order: 3,
          createdAt: '2022-05-31T09:25:31.000Z',
          updatedAt: '2022-05-31T09:25:31.000Z',
        },
        {
          course_id: 39,
          name: 'Lesson 4',
          description: 'Enums & Switch Statements',
          link: 'https://www.youtube.com/watch?v=_qxm-MvRw_Y&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=10',
          order: 4,
          createdAt: '2022-05-31T09:25:44.000Z',
          updatedAt: '2022-05-31T09:25:44.000Z',
        },
      ],
      User: {
        id: 3,
        email: 'dai2@gmail.com',
        role: 'instructor',
        password:
          '$2b$10$b3n1DkyC4pSdkd0DijQqKeTcctdi0yXDLYAd5RKmlus03fM21wGeC',
        user_name: 'Dai Ngo',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        description: 'Dev',
        acc_twiter: 'https://twitter.com/DaiNgo72',
        my_website: 'https://google.com',
        createdAt: '2022-05-15T12:44:14.000Z',
        updatedAt: '2022-05-15T13:27:23.000Z',
        deletedAt: null,
      },
    },
  ];
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const resp = await axiosCourse({
  //           method: 'get',
  //           url: '/',
  //         });

  //         if (resp.data.success) {
  //           setCourses(resp.data.message);
  //         } else {
  //           throw new Error(resp.data.message);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     })();
  //   }, []);
  return (
    <Layout>
      <div className='container'>
        <HeroCourse />
        {/* {courses.length > 0 && <CourseDetail courses={courses.slice(0, 2)} />} */}
        {/* <div className='course-wrapper-course-layout'>
          {courses.length > 0 &&
            courses.map((course) => {
              return <CourseCard course={course} key={course.courseId} />;
            })}
        </div> */}
        {data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '4rem',
                marginTop: '10rem',
              }}
            >
              <Handbook />
              {/* @ts-ignore */}
              <TopicWrapper size='md' topics={item.Topics} />
            </div>
          );
        })}
      </div>
      Tutorials
    </Layout>
  );
}

export default Tutorials;
