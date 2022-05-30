import { Box, Container } from '@mui/system';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Topic from '../components/Topic';
import Form from '../components/Form';
function Admin() {
	return (
		<Box
			bgcolor={'white'}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}>
			<Course />
			<Container>
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 2fr',
					}}>
					<Topic />
					<Form />
				</Box>
			</Container>
		</Box>
	);
}

export default Admin;
