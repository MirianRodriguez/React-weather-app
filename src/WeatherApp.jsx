import { Box, Container, Grid } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import { CurrentConditions } from "./components/CurrentConditions";
import { FutureConditionsCard } from "./components/FutureConditionsCard";
import { NavBar } from "./components/NavBar";
import { SearchCity } from "./components/SearchCity";
import { SearchProvider } from "./context/SearchProvider";
import "./styles.css";
import { theme } from "./theme/themeConfig";

function WeatherApp() {

  const myStyle={
    backgroundImage: "url(src/assets/images/sunset.jpg)",
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <Box style={myStyle}>
          <NavBar />
          <Container>
            <Grid container item spacing={3} mt={3} xs={12} sm={12} md={6} lg={6} xl={6} sx={{ mx: "auto" }}>
              <Grid item xs={12}>
                <SearchCity />
              </Grid>
              <Grid item xs={12}>
                <CurrentConditions />
              </Grid>
              <Grid container item xs={12} spacing={2} alignItems="stretch">
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <FutureConditionsCard order={1}/>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <FutureConditionsCard order={2}/>
                </Grid>
                <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
                  <FutureConditionsCard order={3}/>
                </Grid>
              </Grid>
            </Grid>  
          </Container>
        </Box>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default WeatherApp;
