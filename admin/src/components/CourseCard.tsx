import React from 'react';
import {
	Card,
	CardContent,
	CardActions,
	CardMedia,
	Button,
	Typography,
} from '@mui/material';
import { CourseType } from '../types';
function CourseCard({
	course,
	handleDeleteCourse,
}: {
	course: CourseType;
	handleDeleteCourse: any;
}) {
	const handleEditCourse = (courseId: CourseType['course_id']) => {
		console.log(courseId);
	};
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					src={`${course.image}`}
					alt={`${course.name}`}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{course.name}
					</Typography>
					<Typography variant='body2' color='text.secondary' component={'p'}>
						{course.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='small'
						variant='contained'
						color='error'
						onClick={() => {
							handleDeleteCourse(course.course_id);
						}}>
						Delete
					</Button>
					<Button
						size='small'
						variant='contained'
						color='success'
						onClick={() => {
							handleEditCourse(course.course_id);
						}}>
						Edit
					</Button>
				</CardActions>
			</Card>
		</>
	);
}

export default CourseCard;
