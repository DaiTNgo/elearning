import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { useAppSelector } from '../hooks/redux';
import { getCourse, getTopics } from '../redux/courseSlice';

function Form({ handleEditTopic }: any) {
	const course = useAppSelector(getCourse);
	const topics = useAppSelector(getTopics);
	return (
		<Box
			bgcolor={'primary.main'}
			padding={3}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				wordBreak: 'break-all',
				borderRadius: 2,
			}}>
			<Typography>Name: {course.name}</Typography>
			<Typography>Type: {course.type}</Typography>
			<Typography>Price: {course.price}</Typography>
			<Typography>Description: {course.description}</Typography>
			<Typography>Image: {course.image}</Typography>
			<Typography>Watch: {course.watch}</Typography>
			<TableContainer component={Paper}>
				<Table
					sx={{
						overflowX: 'scroll',
					}}>
					<TableHead>
						<TableRow>
							<TableCell width={60}>Order</TableCell>
							<TableCell width={60}>Name</TableCell>
							<TableCell>Description</TableCell>
							<TableCell>Link</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{topics.length > 0 &&
							topics.map((topic) => (
								<TableRow
									key={`${topic.order} ${topic.course_id}`}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell>{topic.order}</TableCell>
									<TableCell>{topic.name}</TableCell>
									<TableCell>{topic.description}</TableCell>
									<TableCell>{topic.link}</TableCell>
									<TableCell>
										<Button
											onClick={() => {
												handleEditTopic(topic);
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
	);
}

export default Form;
