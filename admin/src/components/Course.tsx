import {
	Button,
	Container,
	FormControlLabel,
	Paper,
	Radio,
	RadioGroup,
} from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useLayoutEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { createOrUpdateCourse, getCourse } from '../redux/courseSlice';
import { CourseType } from '../types';
import { getAccessToken } from '../redux/authSlice';

function Course(props: any) {
	const [type, setType] = React.useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDesc] = useState('');
	const [image, setImage] = useState('');
	const [watch, setWatch] = useState<string>('normal');

	const dispatch = useAppDispatch();
	const course = useAppSelector(getCourse);
	const accessToken = useAppSelector(getAccessToken);
	const handleCourse = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const info = {
			name,
			type,
			price,
			description,
			image,
			watch,
		} as CourseType;
		if (course.course_id) {
			dispatch(
				createOrUpdateCourse({
					courseId: course.course_id,
					info,
					accessToken,
				})
			);
		} else {
			dispatch(createOrUpdateCourse({ info, accessToken }));
		}
	};

	useLayoutEffect(() => {
		setType(course.type);
		setName(course.name);
		setPrice(course.price);
		setDesc(course.description);
		setImage(course.image);
		setWatch(course.watch);
	}, [course]);
	return (
		<Container maxWidth='lg'>
			<Paper
				elevation={3}
				sx={{
					padding: '2rem',
					boxShadow:
						'0px 2px 1px -1px rgb(7 171 250), 0px 1px 1px 0px rgb(16 224 237 / 98%), 0px 1px 3px 0px rgb(3 198 246)',
				}}>
				<Box
					component='form'
					noValidate
					autoComplete='off'
					sx={{
						display: 'grid',
						gridTemplateColumns: 'repeat(3,1fr)',
						gap: '2rem',
					}}
					onSubmit={handleCourse}>
					<TextField
						id='outlined-basic'
						label='Name'
						variant='outlined'
						name='name'
						value={name}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
					/>
					<TextField
						id='outlined-basic'
						label='Price'
						variant='outlined'
						name='price'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Description'
						variant='outlined'
						name='description'
						value={description}
						onChange={(e) => setDesc(e.target.value)}
					/>
					<TextField
						id='outlined-basic'
						label='Link Image'
						variant='outlined'
						name='image'
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
					<FormControl>
						<InputLabel id='select-typ'>Type</InputLabel>
						<Select
							labelId='select-typ'
							id='demo-simple-select'
							label='Type'
							value={type}
							onChange={(e: SelectChangeEvent) => setType(e.target.value)}
							name='type'>
							<MenuItem value={'react'}>React</MenuItem>
							<MenuItem value={'flutter'}>Flutter</MenuItem>
							<MenuItem value={'swift'}>Swift</MenuItem>
						</Select>
					</FormControl>

					<FormControl>
						<RadioGroup
							defaultValue={watch}
							name='watch'
							value={watch}
							onChange={(e: SelectChangeEvent) => setWatch(e.target.value)}>
							<FormControlLabel
								value={'normal'}
								control={<Radio />}
								label='Normal'
							/>
							<FormControlLabel
								value={'tutorial'}
								control={<Radio />}
								label='Tutorial'
							/>
							<FormControlLabel
								value={'livestream'}
								control={<Radio />}
								label='Livestream'
							/>
						</RadioGroup>
					</FormControl>
					<Button type='submit' variant='contained'>
						Save
					</Button>
				</Box>
			</Paper>
		</Container>
	);
}

export default Course;
