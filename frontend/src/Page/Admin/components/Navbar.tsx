import React from 'react';
import { PATH_IMG } from '../../../utils/constant';
import {
  Typography,
  MenuItem,
  Box,
  Button,
  Container,
  Stack,
  Menu,
  Avatar,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { display } from '@mui/system';

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
      }}
    >
      <Container maxWidth='xl' fixed>
        <NavWrapper>
          <Navigator>
            <Button
              variant='text'
              disableElevation
              sx={{
                fontSize: '2rem',
                color: 'white',
              }}
              onClick={() => {
                navigate('/');
              }}
            >
              Dashboard
            </Button>
            <Button
              variant='outlined'
              sx={{
                fontSize: '2rem',
                color: 'white',
              }}
              onClick={() => {
                navigate('/addcourse');
              }}
            >
              Add Course
            </Button>
          </Navigator>
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Typography variant='h4' component={'p'} color='primary'>
              Instructor
            </Typography>
            <Button id='basic-button' onClick={handleClick}>
              <Avatar
                alt='avatar'
                src={`${PATH_IMG}/avatar.jpg`}
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
            }}
          >
            <MenuItem
              onClick={() => {
                navigate('/profile');
                handleClose();
              }}
              sx={{
                fontSize: 20,
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/logout');
                handleClose();
              }}
              sx={{
                fontSize: 20,
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </NavWrapper>
      </Container>
    </Box>
  );
}

export default Navbar;
