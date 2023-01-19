import React from 'react'
import { Container, Paper } from "@mui/material";
import { NavBar } from '../components';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  background: {
    backgroundImage: `url('/sunset.jpg')`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'fixed',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '0',
  },
});

export const Layout = ({children}) => {

  const classes = useStyle();

  return (

    <Paper className={classes.background}>
      <NavBar />
      <Container >
        {children}
      </Container>
    </Paper>
  )
}
