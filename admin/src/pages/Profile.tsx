import { useForm } from 'react-hook-form';
import { Avatar, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {
  getUser,
  updateUser,
  getAccessToken,
  setStatus,
} from '../redux/authSlice';
import { profileSchema } from '../utils/validations';
import { FormInputText } from '../components/FormInput';
import { PROFILE_TEXT_FIELDS } from '../utils/constant';

const Profile = () => {
  const { handleSubmit, control, reset, watch } = useForm({
    resolver: joiResolver(profileSchema),
    defaultValues: {
      twitter: '',
      website: '',
      avatar: '',
      description: '',
      userName: '',
    },
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const accessToken = useAppSelector(getAccessToken);
  const status = useAppSelector((state) => state.authSlice.status);
  const error = useAppSelector((state) => state.authSlice.error);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (user) {
      reset({
        twitter: user.acc_twiter,
        website: user.my_website,
        avatar: user.avatar,
        description: user.description,
        userName: user.user_name,
      });
    }
  }, [user]);

  useLayoutEffect(() => {
    dispatch(setStatus());
  }, []);

  useEffect(() => {
    {
      status === 'failed' && setTitle(`${error}`);
    }
    {
      status === 'succeeded' && setTitle('Succeeded');
    }
    {
      status === 'idle' && setTitle('');
    }
  }, [status]);

  useEffect(() => {
    const temp = setTimeout(() => {
      setTitle('');
    }, 3000);
    return () => {
      clearTimeout(temp);
    };
  }, [title]);

  const onSubmit = (data: any) => {
    if (accessToken) {
      dispatch(
        updateUser({
          accessToken,
          userUpdate: {
            my_website: data.website,
            acc_twiter: data.twitter,
            user_name: data.userName,
            description: data.description,
            avatar: data.avatar,
          },
        })
      );
    }
  };
  return (
    <Container maxWidth='lg'>
      {title && <h2>{title}</h2>}
      <Box
        component='form'
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 2,
          flexDirection: 'column',
        }}
      >
        {PROFILE_TEXT_FIELDS.map((item, index) => {
          return (
            <FormInputText
              key={index}
              label={item.label}
              control={control}
              name={item.name}
            />
          );
        })}

        <Avatar
          src={watch('avatar')}
          variant='rounded'
          sx={{
            width: 100,
            height: 100,
            boxShadow: '0 0 3px 3px rgba(0,0,0,0.2)',
          }}
        />
      </Box>
      <Button
        variant='contained'
        sx={{
          marginTop: 2,
        }}
        onClick={handleSubmit(onSubmit)}
      >
        Update
      </Button>
    </Container>
  );
};

export default Profile;
