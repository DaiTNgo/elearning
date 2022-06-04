import { joiResolver } from '@hookform/resolvers/joi';
import { Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInputText } from '../components/FormInput';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getAccessToken } from '../redux/authSlice';
import {
    createOrUpdateTopic,
    getCourse,
    getTopics
} from '../redux/courseSlice';
import { TopicType } from '../types';
import { TOPIC_TEXT_FIELDS } from '../utils/constant';
import { topicSchema } from '../utils/validations';

function Topic({ topic }: { topic?: TopicType }) {
  const { handleSubmit, reset, control, watch } = useForm({
    resolver: joiResolver(topicSchema),
    defaultValues: {
      topicName: '',
      description: '',
      link: '',
    },
  });
  const dispatch = useAppDispatch();
  const course = useAppSelector(getCourse);
  const topics = useAppSelector(getTopics);
  const accessToken = useAppSelector(getAccessToken);
  const [order, setOrder] = useState<number | undefined>(undefined);
  const onSubmit = (data: any) => {
    if (accessToken) {
      if (order) {
        dispatch(
          createOrUpdateTopic({
            info: {
              course_id: course.course_id,
              order,
              name: data.topicName,
              link: data.link,
              description: data.description,
            },
            accessToken,
            isUpdate: true,
          })
        );
      } else {
        dispatch(
          createOrUpdateTopic({
            info: {
              course_id: course.course_id,
              order: topics.length + 1,
              name: data.topicName,
              link: data.link,
              description: data.description,
            },
            accessToken,
            isUpdate: false,
          })
        );
      }
    }
    reset({
      topicName: '',
      description: '',
      link: '',
    });
    setOrder(undefined);
  };
  useEffect(() => {
    if (topic) {
      reset({
        topicName: topic.name,
        description: topic.description,
        link: topic.link,
      });
      setOrder(topic.order);
    }
  }, [topic]);
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '2rem',
        boxShadow:
          '0px 3px 3px -2px rgb(91 128 159), 0px 3px 4px 0px rgb(91 128 159), 0px 1px 8px 0px rgb(91 128 159)',
        alignSelf: 'start',
      }}
    >
      <Box
        component='form'
        noValidate
        autoComplete='off'
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '1rem 1rem',
        }}
      >
        {TOPIC_TEXT_FIELDS.map((item) => {
          return (
            <FormInputText
              key={item.name}
              label={item.label}
              control={control}
              name={item.name}
            />
          );
        })}

        <Button
          onClick={handleSubmit(onSubmit)}
          variant='contained'
          size='large'
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
}

export default Topic;
