import * as React from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getUser, login } from '../redux/authSlice';

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector(getUser);
  const status = useAppSelector((state) => state.authSlice.status);

  const [content, setContent] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      login({
        email: data.get('email') as string,
        password: data.get('password') as string,
      })
    );
  };

  React.useEffect(() => {
    if (status !== 'idle') {
      if (user && user.role === 'instructor') {
        navigate('/');
      } else if (status === 'failed') {
        setContent('Something is wrong!!!. Try again.');
      }
    }
  }, [status]);

  React.useEffect(() => {
    const temp = setTimeout(() => {
      setContent('');
    }, 3000);
    return () => {
      clearTimeout(temp);
    };
  }, [content]);

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        {content && <Typography color={'secondary.main'}>{content}</Typography>}
        <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
