import {
	Avatar,
	Box,
	Button,
	Container,
	Menu,
	MenuItem,
	styled,
	Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigator = styled(Box)({
	display: 'flex',
	gap: 10,
});
const NavWrapper = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});
function Navbar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const navigate = useNavigate();
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Box
			sx={{
				backgroundColor: 'primary.light',
				padding: '2rem',
				marginBottom: '2rem',
			}}>
			<Container maxWidth='xl' fixed>
				<NavWrapper>
					<Navigator>
						<Button
							variant='text'
							disableElevation
							sx={{
								color: 'white',
							}}
							onClick={() => {
								navigate('/');
							}}>
							Dashboard
						</Button>
						<Button
							variant='outlined'
							sx={{
								color: 'white',
							}}
							onClick={() => {
								navigate('/create-course');
							}}>
							Add Course
						</Button>
					</Navigator>
					<Box
						sx={{
							display: 'flex',
							gap: 4,
							alignItems: 'center',
						}}>
						<Typography variant='h5' component={'p'} color='white'>
							Instructor
						</Typography>
						<Button id='basic-button' onClick={handleClick}>
							<Avatar
								alt='avatar'
								// src={`${PATH_IMG}/avatar.jpg`}
								sx={{ width: 56, height: 56 }}
							/>
						</Button>
					</Box>
					<Menu
						id='basic-menu'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						PaperProps={{
							style: {
								padding: '0.5rem 2rem',
							},
						}}>
						<MenuItem
							onClick={() => {
								navigate('/profile');
								handleClose();
							}}
							sx={{
								fontSize: 20,
							}}>
							Profile
						</MenuItem>
						<MenuItem
							onClick={() => {
								navigate('/logout');
								handleClose();
							}}
							sx={{
								fontSize: 20,
							}}>
							Logout
						</MenuItem>
					</Menu>
				</NavWrapper>
			</Container>
		</Box>
	);
}

export default Navbar;
