import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container } from '@mui/material';

function Topic({ handleAddTopic, topic, handleChange }: any) {
  return (
    <Container maxWidth='xl'>
      <Box component='form' noValidate autoComplete='off'>
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          name='name'
          onChange={handleChange}
          value={topic.name}
        />
        <TextField
          id='outlined-basic'
          label='Description'
          variant='outlined'
          name='description'
          onChange={handleChange}
          value={topic.description}
        />
        <TextField
          id='outlined-basic'
          label='Link'
          variant='outlined'
          name='link'
          value={topic.link}
          onChange={handleChange}
        />
        <Button variant='outlined' onClick={handleAddTopic}>
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default Topic;
