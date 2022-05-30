import { Box, Button, Container, Paper, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteTopic, getCourse, getTopics } from '../redux/courseSlice';

function Form(props: any) {
	const course = useAppSelector(getCourse);
	const topics = useAppSelector(getTopics);
	const dispatch = useAppDispatch();
	return (
		<Container maxWidth='xl'>
			<Box
				bgcolor={'primary.main'}
				padding={3}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1,
				}}>
				<Typography>Name: {course.name}</Typography>
				<Typography>Type: {course.type}</Typography>
				<Typography>Price: {course.price}</Typography>
				<Typography>Description: {course.description}</Typography>
				<Typography>Image: {course.image}</Typography>
				<Typography>Watch: {course.watch}</Typography>
				<TableContainer component={Paper}>
					<Table sx={{ minWidth: 650 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Order</TableCell>
								<TableCell>Name</TableCell>
								<TableCell align='right'>Description</TableCell>
								<TableCell align='right'>Link</TableCell>
								<TableCell align='right'></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{topics.length > 0 &&
								topics.map((topic, index: number) => (
									<TableRow
										key={`${topic.order} ${topic.course_id}`}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
										<TableCell scope='row'>{topic.order}</TableCell>
										<TableCell scope='row'>{topic.name}</TableCell>
										<TableCell align='right'>{topic.description}</TableCell>
										<TableCell align='right'>{topic.link}</TableCell>
										<TableCell align='right'>
											<Button
												onClick={() => {
													// handleEdit(index);
													// setEdit(index);
												}}>
												Edit
											</Button>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Container>
	);
}

export default Form;
