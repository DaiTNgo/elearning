import { joiResolver } from '@hookform/resolvers/joi';
import { Box, Button, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormInputText } from '../components/FormInput';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getAccessToken } from '../redux/authSlice';
import { createOrUpdateCourse, getCourse } from '../redux/courseSlice';
import { CourseType } from '../types';
import {
    COURSE_TEXT_FIELDS,
    COURSE_TYPES,
    WATCH_TYPES
} from '../utils/constant';
import { courseSchema } from '../utils/validations';
import FormInputDropdown from './FormInputDropdown';
import FormInputRadio from './FormInputRadio';

function Course() {
	const { handleSubmit, reset, control, watch } = useForm({
		resolver: joiResolver(courseSchema),
		defaultValues: {
			courseName: '',
			price: '',
			description: '',
			image: '',
			type: '',
			watchType: '',
		},
	});

	const dispatch = useAppDispatch();
	const course = useAppSelector(getCourse);
	const accessToken = useAppSelector(getAccessToken);

	useEffect(() => {
		reset({
			courseName: course.name,
			price: course.price,
			description: course.description,
			image: course.image,
			type: course.type,
			watchType: course.watch,
		});
	}, [course]);

	const onSubmit = (data: any) => {
		const info = {
			name: data.courseName,
			type: data.type,
			price: data.price,
			description: data.description,
			image: data.image,
			watch: data.watchType,
		} as CourseType;
		if (course.course_id) {
			dispatch(
				createOrUpdateCourse({
					courseId: course.course_id,
					info,
					accessToken,
				})
			);
		} else {
			dispatch(createOrUpdateCourse({ info, accessToken }));
		}
	};
	return (
		<Paper
			elevation={3}
			sx={{
				padding: '2rem',
				boxShadow:
					'0px 2px 1px -1px rgb(7 171 250), 0px 1px 1px 0px rgb(16 224 237 / 98%), 0px 1px 3px 0px rgb(3 198 246)',
			}}>
			<Box
				component='form'
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3,1fr)',
					gap: '2rem',
				}}>
				{COURSE_TEXT_FIELDS.map((item) => {
					return (
						<FormInputText
							key={item.name}
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
				<FormInputRadio
					options={WATCH_TYPES}
					name='watchType'
					control={control}
				/>
			</Box>
			<Button onClick={handleSubmit(onSubmit)} variant='contained'>
				Save
			</Button>
		</Paper>
	);
}

export default Course;
