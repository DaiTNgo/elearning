import { Box, Container } from '@mui/system';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Topic from '../components/Topic';
import Form from '../components/Form';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
	editCourse,
	editTopics,
	getCourse,
	resetCourse,
	resetTopics,
} from '../redux/courseSlice';
import { getAccessToken } from '../redux/authSlice';
import { CourseType, TopicType } from '../types';
import { useParams } from 'react-router-dom';
import { axiosCourse } from '../axios';
function EditCourse() {
	const dispatch = useAppDispatch();
	const course = useAppSelector(getCourse);
	const [topic, setTopic] = useState<TopicType | undefined>(undefined);
	const accessToken = useAppSelector(getAccessToken);
	const { courseId } = useParams();
	useEffect(() => {
		if (courseId) {
			(async () => {
				const resp = await axiosCourse({
					method: 'get',
					url: `/${courseId}`,
					headers: {
						authorization: `Bearer ${accessToken}`,
					},
				});
				const {
					course_id,
					description,
					image,
					name,
					price,
					type,
					watch,
					Topics: topics,
				} = resp.data.message;

				dispatch(
					editCourse({
						course_id,
						description,
						image,
						name,
						price,
						type,
						watch,
					})
				);
				dispatch(editTopics(topics));
			})();
		}
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
			}}>
			<Course />
			{course.course_id && (
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '320px auto',
						gap: 1,
					}}>
					<Topic topic={topic} />
					<Form handleEditTopic={handleEditTopic} />
				</Box>
			)}
		</Box>
	);
}

export default EditCourse;
