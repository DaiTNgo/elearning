import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Form({ course, topics, handleDelete, handleEdit, setEdit }: any) {
    // course, topics
  return (
    <Container maxWidth='xl'>
      <Typography>Name: {course.courseName}</Typography>
      <Typography>Type: {course.courseType}</Typography>
      <Typography>Price: {course.price}</Typography>
      <Typography>Description: {course.description}</Typography>
      <Typography>Image: {course.image}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'>Link</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topics.map((topic: any, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell scope='row'>{index + 1}</TableCell>
                <TableCell scope='row'>{topic.name}</TableCell>
                <TableCell align='right'>{topic.description}</TableCell>
                <TableCell align='right'>{topic.link}</TableCell>
                <TableCell align='right'>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                  <Button
                    onClick={() => {
                      handleEdit(index);
                      setEdit(index);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Form;
