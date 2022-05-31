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
import { current } from '@reduxjs/toolkit';
import { axiosAuth } from '../axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getAccessToken, getUser, logout } from '../redux/authSlice';

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
	const currentUser = useAppSelector(getUser);
	const dispatch = useAppDispatch();
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const accessToken = useAppSelector(getAccessToken);
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleLogout = () => {
		dispatch(logout(accessToken));
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
							{currentUser?.user_name
								? currentUser.user_name
								: currentUser?.email}
						</Typography>
						<Button id='basic-button' onClick={handleClick}>
							<Avatar
								alt='avatar'
								src={`${currentUser && currentUser?.avatar}`}
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
							onClick={handleLogout}
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
