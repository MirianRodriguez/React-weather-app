import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color={navRef.current}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            El clima
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
