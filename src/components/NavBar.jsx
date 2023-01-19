import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

export const NavBar = () => {

  const [navColor, setNavColor] = React.useState('transparent');

  const navRef = React.useRef();
  navRef.current = navColor;

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 64;
      if (show) {
        setNavColor('primary')
      }else{
        setNavColor('transparent')
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color={navRef.current}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleClick}>
              El clima
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
