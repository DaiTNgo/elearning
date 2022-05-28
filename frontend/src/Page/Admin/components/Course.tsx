import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function Course({ handleCourse, handleUpdateCourse }: any) {
  const [type, setType] = React.useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [url, setUrl] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  const handleSubmit = () => {
    const info = {
      courseName: name,
      courseType: type,
      price,
      description: desc,
      image: url,
    };
    handleCourse(info);
  };
  return (
    <Container maxWidth='xl'>
      <Box component='form' noValidate autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id='outlined-basic'
          label='Price'
          variant='outlined'
          name='price'
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          variant='outlined'
          name='desc'
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          id='outlined-basic'
          label='Link Image'
          variant='outlined'
          name='url'
          onChange={(e) => setUrl(e.target.value)}
        />

        <InputLabel id='demo-simple-select-label'>Type</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={type}
          label='Type'
          onChange={handleChange}
          name='type'
        >
          <MenuItem value={'react'}>React</MenuItem>
          <MenuItem value={'flutter'}>Flutter</MenuItem>
          <MenuItem value={'swift'}>Swift</MenuItem>
        </Select>
        <Button variant='outlined' onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default Course;
