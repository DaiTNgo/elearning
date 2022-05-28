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

  const [topics, setTopics] = React.useState<any[]>([]);
  const [edit, setEdit] = useState<any>(null);
  const handleAddCourse = (info: any) => {
    setCourse(info);
  };
  const handleAddTopic = () => {
    if (edit !== null) {
      const newArr = [...topics];
      newArr.splice(edit, 1, topic);
      setTopics(newArr);
      setEdit(null);
    } else {
      setTopics((prev) => [...prev, topic]);
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
  const handleSubmit = () => {
    console.log({
      ...course,
      topics,
    });
    // axios.post('http://localhost:5000/instructor/create-course');
  };
  const handleDelete = (index: number) => {
    const newTopics = [...topics];
    newTopics.splice(index, 1);
    setTopics(newTopics);
  };
  const handleEdit = (index: number) => {
    setTopic(topics[index]);
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Course handleAddCourse={handleAddCourse} />
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
            topics={topics}
          />
          <Button onClick={handleSubmit}>Save</Button>
        </>
      )}
    </ThemeProvider>
  );
}

export default Admin;
