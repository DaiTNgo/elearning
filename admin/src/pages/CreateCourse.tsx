import { Box, Container } from '@mui/system';
import Course from '../components/Course';
import Topic from '../components/Topic';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getCourse, resetCourse, resetTopics } from '../redux/courseSlice';
import { TopicType } from '../types';
function CreateCourse() {
  const dispatch = useAppDispatch();
  const course = useAppSelector(getCourse);
  const [topic, setTopic] = useState<TopicType | undefined>(undefined);
  useEffect(() => {
    dispatch(resetCourse());
    dispatch(resetTopics());
  }, []);

  const handleEditTopic = (info: any) => {
    setTopic(info);
  };

  return (
    <Box
      bgcolor={'white'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <Course />
      {course.course_id && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '320px auto',
            gap: 1,
          }}
        >
          <Topic topic={topic} />
          <Form handleEditTopic={handleEditTopic} />
        </Box>
      )}
    </Box>
  );
}

export default CreateCourse;
