import {
  Card,
  CardActionArea,
  CardContent,
  Typography, Grid, Paper,
} from "@mui/material";
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { useFetchApi } from "../hooks/useFetchApi";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { alpha } from "@mui/material";


export const CurrentConditions = () => {
  const { city } = useContext(SearchContext);

  useFetchApi(city);

  const {data, isLoading} = useContext(SearchContext);

  console.log(data);

  return isLoading ? (
    <p>cargando</p>
  ) : (
    <Paper component={Card} variant='outlined' sx={{bgcolor: alpha('#ffffff', 0.25)}}>
        <CardActionArea>
            <CardContent>
                <Grid container justifyContent={'center'} >
                    <Grid item xs={12} textAlign={'center'}>
                        <WbSunnyIcon fontSize="large" /> 
                    </Grid>
                    <Grid item sx={{ typography: 'caption'}}>{data.currentConditions.conditions}</Grid>
                </Grid>
                <Typography gutterBottom variant="h5" component="div">
                    {data.resolvedAddress}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Temperatura actual: {data.currentConditions.temp} °C <br />
                    Máx: {data.days[0].tempmax} °C <br />
                    Mín: {data.days[0].tempmin} °C <br />
                </Typography>
            </CardContent>
        </CardActionArea>
    </Paper>
  );
};
