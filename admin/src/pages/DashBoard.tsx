import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getAccessToken, getUser } from '../redux/authSlice';
import { resetCourse, resetTopics } from '../redux/courseSlice';
import { CourseType } from '../types';

function DashBoard() {
	const [courses, setCourses] = useState<CourseType[]>([]);
	const currentUser = useAppSelector(getUser);
	const accessToken = useAppSelector(getAccessToken);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(resetCourse());
		dispatch(resetTopics());
	}, []);
	useEffect(() => {
		const getCourse = async () => {
			const resp = await axios({
				method: 'get',
				url: `http://localhost:5000/course/instructor/${currentUser?.id}`,
				headers: {
					authorization: `Bearer ${accessToken} `,
				},
			});
			setCourses(resp.data.message);
		};
		getCourse();
	}, []);

	return (
		<Box
			sx={{
				display: 'grid',
				gap: '2rem',
				gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
			}}>
			{courses.length > 0 ? (
				courses.map((course, index) => {
					return <CourseCard key={course.course_id} />;
				})
			) : (
				<Typography component={'p'}>"You don't have any course!!"</Typography>
			)}

			<CourseCard />
		</Box>
	);
}

export default DashBoard;
