import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { CourseType } from '../types';
import { useNavigate } from 'react-router-dom';
function CourseCard({
  course,
  handleDeleteCourse,
}: {
  course: CourseType;
  handleDeleteCourse: any;
}) {
  const navigate = useNavigate();

  const handleEditCourse = (courseId: CourseType['course_id']) => {
    navigate(`/edit/${courseId}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow:
          '1px 0px 20px 14px rgb(134 35 129 / 20%), 0px 1px 10px 3px rgb(176 15 221 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
      }}
    >
      <CardMedia
        component='img'
        height='250'
        src={`${course.image}`}
        alt={`${course.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {course.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' component={'p'}>
          {course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          color='error'
          onClick={() => {
            handleDeleteCourse(course.course_id);
          }}
        >
          Delete
        </Button>
        <Button
          size='small'
          variant='contained'
          color='success'
          onClick={() => {
            handleEditCourse(course.course_id);
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard;
