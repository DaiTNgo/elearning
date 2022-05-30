import { Button, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addTopic, getCourse } from '../redux/courseSlice';
import { TopicType } from '../types';

function Topic({ topic, idx }: { topic: TopicType; idx: number }) {
	const dispatch = useAppDispatch();
	const course = useAppSelector(getCourse);
	const [index, setIndex] = useState<number | undefined>(undefined);
	const [name, setName] = useState<string>('');
	const [link, setLink] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const handleTopic = () => {
		// dispatch(addTopic({ name, link, description }));
		if (index) {
			// call axios update topic
		} else {
			// call axios create topic
		}
		setName('');
		setLink('');
		setDescription('');
		setIndex(undefined);
	};
	useEffect(() => {
		if (topic) {
			setIndex(idx);
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
