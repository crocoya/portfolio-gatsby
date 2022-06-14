import React from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

const ContactSection = () => {
  return (
    <section className='contact container' id='contact'>
      <h2 className='contact--heading'>Contact</h2>
      <Container className='contact--grid'>
        <Typography variant='h6' color='white'>
          Say Hello !
        </Typography>
        <form
          method='post'
          subject='Vous avez reçu un message'
          netlify-honeypot='bot-field'
          data-netlify='true'
          action='https://getform.io/f/9d5b53e7-1b66-4ab6-9af4-72a8a529a284'
          name='contact'
        >
          <input type='hidden' name='bot-field' />
          <input type='hidden' name='form-name' value='contact' />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                className='text-input'
                variant='outlined'
                margin='normal'
                id='name'
                name='name'
                label='Name'
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                className='text-input'
                variant='outlined'
                margin='normal'
                id='email'
                name='email'
                label='Email'
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                className='text-input'
                variant='outlined'
                margin='normal'
                id='subject'
                name='subject'
                label='Subject'
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                className='text-input'
                variant='outlined'
                margin='normal'
                id='message'
                name='message'
                label='Message'
                fullWidth
                required
                multiline
                rows={5}
              />
            </Grid>
          </Grid>
          <Button type='submit' variant='contained' className='contact--button'>
            Submit
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default ContactSection;
