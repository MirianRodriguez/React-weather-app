import { Grid } from "@mui/material";
import { CurrentConditions } from "./components/CurrentConditions";
import { FutureConditionsCard } from "./components/FutureConditionsCard";
import { NavBar } from "./components/NavBar";
import { SearchCity } from "./components/SearchCity";
import { SearchProvider } from "./context/SearchProvider";
import "./styles.css";

function WeatherApp() {

  const today = new Date();
  const weekDay = today.getDay();

  return (
    <>
      <SearchProvider>
        <NavBar />
        <Grid container item spacing={3} mt={3} xs={4} sx={{ mx: "auto" }}>
          <Grid item xs={12}>
            <SearchCity />
          </Grid>
          <Grid item xs={12}>
            <CurrentConditions />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <FutureConditionsCard weekDay={weekDay+1}/>
            </Grid>
            <Grid item xs={4}>
              <FutureConditionsCard weekDay={weekDay+2}/>
            </Grid>
            <Grid item xs={4}>
              <FutureConditionsCard weekDay={weekDay+3}/>
            </Grid>
          </Grid>
        </Grid>
      </SearchProvider>
    </>
  );
}

export default WeatherApp;
