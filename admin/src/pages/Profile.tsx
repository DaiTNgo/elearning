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

const Profile = () => {
  const { handleSubmit, control, reset, watch } = useForm({
    resolver: joiResolver(profileSchema),
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const accessToken = useAppSelector(getAccessToken);
  const status = useAppSelector((state) => state.authSlice.status);
  const error = useAppSelector((state) => state.authSlice.error);
  const [avatar, setAvatar] = useState('');
  const [title, setTitle] = useState('');

  const TextFieldArr = [
    {
      label: 'User Name',
      name: 'userName',
    },

    {
      label: 'Description',
      name: 'description',
    },
    {
      label: 'Website',
      name: 'website',
    },
    {
      label: 'Avatar',
      name: 'avatar',
    },
    {
      label: 'Twitter',
      name: 'twitter',
    },
  ];
  useEffect(() => {
    if (user) {
      reset({
        twitter: user.acc_twiter,
        website: user.my_website,
        avatar: user.avatar,
        description: user.description,
        userName: user.user_name,
      });
      setAvatar(user.avatar);
    }
  }, [user]);

  useLayoutEffect(() => {
    dispatch(setStatus());
  }, []);

  useEffect(() => {
    setAvatar(watch('avatar'));
  }, [watch('avatar')]);

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
        {TextFieldArr.map((item, index) => {
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
          src={avatar}
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
