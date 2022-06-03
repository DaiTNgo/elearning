import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  FormHelperText,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { ICourseTypes } from '../types';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { createOrUpdateCourse, getCourse } from '../redux/courseSlice';
import { CourseType } from '../types';
import { COURSE_TYPES, WATCH_TYPES } from '../utils/constant';
import { getAccessToken } from '../redux/authSlice';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { courseSchema } from '../utils/validations';
import { FormInputText } from '../components/FormInput';
import { FormInputDropdown } from './FormInputDropdown';
import FormInputRadio from './FormInputRadio';

function Course() {
  const { handleSubmit, reset, control, watch, register } = useForm({
    resolver: joiResolver(courseSchema),
  });
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState('');
  // const [description, setDesc] = useState('');
  // const [image, setImage] = useState('');
  const [type, setType] = React.useState('');
  const [watchType, setWatchType] = useState<string>('normal');

  const dispatch = useAppDispatch();
  const course = useAppSelector(getCourse);
  const accessToken = useAppSelector(getAccessToken);

  const TextFieldArr = [
    {
      label: 'Name',
      name: 'courseName',
    },
    {
      label: 'Price',
      name: 'price',
    },
    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Link Image',
      name: 'image',
    },
  ];
  // const handleCourse = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const info = {
  //     name,
  //     type,
  //     price,
  //     description,
  //     image,
  //     watch,
  //   } as CourseType;
  //   if (course.course_id) {
  //     dispatch(
  //       createOrUpdateCourse({
  //         courseId: course.course_id,
  //         info,
  //         accessToken,
  //       })
  //     );
  //   } else {
  //     dispatch(createOrUpdateCourse({ info, accessToken }));
  //   }
  // };

  useLayoutEffect(() => {
    reset({
      name: course.name,
      // type: course.type,
      price: course.price,
      description: course.description,
      image: course.image,
      // watch: course.watch,
    });
    setType(course.type);
    // setName(course.name);
    // setPrice(course.price);
    // setDesc(course.description);
    // setImage(course.image);
    setWatchType(course.watch);
  }, [course]);
  console.log(watch('type'));
  const onSubmit = (data: any) => {
    console.log(data);
    // const info = {
    //   name: data.courseName,
    //   type: data.type,
    //   price: data.price,
    //   description: data.description,
    //   image: data.image,
    //   watch: watchType,
    // } as CourseType;
    // if (course.course_id) {
    //   dispatch(
    //     createOrUpdateCourse({
    //       courseId: course.course_id,
    //       info,
    //       accessToken,
    //     })
    //   );
    // } else {
    //   dispatch(createOrUpdateCourse({ info, accessToken }));
    // }
  };
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '2rem',
        boxShadow:
          '0px 2px 1px -1px rgb(7 171 250), 0px 1px 1px 0px rgb(16 224 237 / 98%), 0px 1px 3px 0px rgb(3 198 246)',
      }}
    >
      <Box
        component='form'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '2rem',
        }}
      >
        {TextFieldArr.map((item, index) => {
          return (
            <FormInputText
              key={index}
              label={item.label}
              control={control}
              name={item.name}
            />
          );
        })}
        <FormInputDropdown
          name='type'
          label='Type'
          control={control}
          options={COURSE_TYPES}
        />
        <FormInputRadio options={WATCH_TYPES} name='watch' control={control} />
        {/* <FormControl> */}
        {/*   <RadioGroup */}
        {/*     defaultValue={watch} */}
        {/*     name='watch' */}
        {/*     value={watchType} */}
        {/*     onChange={(e: SelectChangeEvent) => setWatchType(e.target.value)} */}
        {/*   > */}
        {/*     <FormControlLabel */}
        {/*       value={'normal'} */}
        {/*       control={<Radio />} */}
        {/*       label='Normal' */}
        {/*     /> */}
        {/*     <FormControlLabel */}
        {/*       value={'tutorial'} */}
        {/*       control={<Radio />} */}
        {/*       label='Tutorial' */}
        {/*     /> */}
        {/*     <FormControlLabel */}
        {/*       value={'livestream'} */}
        {/*       control={<Radio />} */}
        {/*       label='Livestream' */}
        {/*     /> */}
        {/*   </RadioGroup> */}
        {/* </FormControl> */}
      </Box>
      <Button onClick={handleSubmit(onSubmit)} variant='contained'>
        Save
      </Button>
    </Paper>
  );
}

export default Course;
