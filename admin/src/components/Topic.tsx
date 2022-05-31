import { Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getAccessToken } from '../redux/authSlice';
import {
	createOrUpdateTopic,
	getCourse,
	getTopics,
} from '../redux/courseSlice';
import { TopicType } from '../types';

function Topic({ topic }: { topic?: TopicType }) {
	const dispatch = useAppDispatch();
	const course = useAppSelector(getCourse);
	const topics = useAppSelector(getTopics);
	const accessToken = useAppSelector(getAccessToken);
	const [order, setOrder] = useState<number | undefined>(undefined);
	const [name, setName] = useState<string>('');
	const [link, setLink] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const handleTopic = () => {
		if (order) {
			dispatch(
				createOrUpdateTopic({
					info: {
						course_id: course.course_id,
						order,
						name,
						link,
						description,
					},
					accessToken,
					isUpdate: true,
				})
			);
		} else {
			dispatch(
				createOrUpdateTopic({
					info: {
						course_id: course.course_id,
						order: topics.length + 1,
						name,
						link,
						description,
					},
					accessToken,
					isUpdate: false,
				})
			);
		}
		setName('');
		setLink('');
		setDescription('');
		setOrder(undefined);
	};
	useEffect(() => {
		if (topic) {
			setOrder(topic.order);
			setName(topic.name);
			setDescription(topic.description);
			setLink(topic.link);
		}
	}, [topic]);

	return (
		<Paper
			elevation={3}
			sx={{
				padding: '2rem',
				boxShadow:
					'0px 3px 3px -2px rgb(91 128 159), 0px 3px 4px 0px rgb(91 128 159), 0px 1px 8px 0px rgb(91 128 159)',
				alignSelf: 'start',
			}}>
			<Box
				component='form'
				noValidate
				autoComplete='off'
				sx={{
					display: 'grid',
					gridTemplateColumns: '1fr',
					gap: '1rem 1rem',
				}}>
				<TextField
					id='outlined-basic'
					label='Name'
					variant='outlined'
					name='name'
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
					value={name}
				/>

				<TextField
					id='outlined-basic'
					label='Link'
					variant='outlined'
					name='link'
					value={link}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setLink(e.target.value)
					}
				/>
				<TextField
					id='outlined-basic'
					label='Description'
					variant='outlined'
					name='description'
					multiline
					rows={4}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setDescription(e.target.value)
					}
					value={description}
				/>
				<Button variant='contained' size='large' onClick={handleTopic}>
					Save
				</Button>
			</Box>
		</Paper>
	);
}

export default Topic;
