import React from 'react';
import {
	Card,
	CardContent,
	CardActions,
	CardMedia,
	Button,
	Typography,
} from '@mui/material';
function CourseCard() {
	const handleEdit = () => {};
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component='img'
					height='140'
					// image='/static/images/cards/contemplative-reptile.jpg'
					src='https://images.unsplash.com/photo-1653760538719-4721be6ad863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						Lizard
					</Typography>
					<Typography variant='body2' color='text.secondary' component={'p'}>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small' variant='contained' color='error'>
						Delete
					</Button>
					<Button size='small' variant='contained' color='success'>
						Edit
					</Button>
				</CardActions>
			</Card>
		</>
	);
}

export default CourseCard;
