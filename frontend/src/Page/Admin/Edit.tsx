import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import Course from './components/Course';
import Topic from './components/Topic';
import Navbar from './components/Navbar';
import { theme } from './material/theme';
import Form from './components/Form';
import { Button } from '@mui/material';
import axios from 'axios';
function Admin() {
  const [course, setCourse] = React.useState({
    courseName: '',
    courseType: '',
    price: '',
    description: '',
    image: '',
  });
  const [topic, setTopic] = useState<any>({
    name: '',
    description: '',
    link: '',
  });

  const [edit, setEdit] = useState<any>(null);
  const handleCourse = (info: any) => {
    // setCourse(info);
    // axios
  };
  const handleAddTopic = () => {
    if (edit !== null) {
      // call axios
      setEdit(null);
    } else {
      //call axios
    }
    setTopic({
      name: '',
      description: '',
      link: '',
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDelete = (index: number) => {};
  const handleEdit = (index: number, topic: any) => {
    // setTopic(topics[index]);
    //setTopic(topic)
    setEdit(index);
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Course handleCourse={handleCourse} />
      {course.courseName && (
        <>
          <Topic
            topic={topic}
            handleChange={handleChange}
            handleAddTopic={handleAddTopic}
          />
          <Form
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            setEdit={setEdit}
            course={course}
          />
        </>
      )}
    </ThemeProvider>
  );
}

export default Admin;
