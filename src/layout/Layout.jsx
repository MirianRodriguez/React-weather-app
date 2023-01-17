import React from 'react'
import { Box, Container } from "@mui/material";
import { NavBar } from '../components';

export const Layout = ({children}) => {
  return (
    <Box className="background">
      <NavBar />
      <Container >
        {children}
      </Container>
    </Box>
  )
}
