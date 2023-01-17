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
import { Link, useNavigate } from "react-router-dom";


export const CurrentConditions = () => {
  const { city } = useContext(SearchContext);

  useFetchApi(city);

  const {data, isLoading} = useContext(SearchContext);

  //console.log(data);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${data.address}?day=0`);
  }

  return isLoading ? (
    <p>cargando</p>
  ) : (
    <Paper component={Card} variant='outlined' sx={{bgcolor: alpha('#ffffff', 0.25)}}>
        <CardActionArea onClick={handleClick}>
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
                <Typography variant="body1" color="text.secondary" paragraph>
                    {data.currentConditions.temp} °C - {data.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Máx: {data.days[0].tempmax} °C <br />
                    Mín: {data.days[0].tempmin} °C <br />
                </Typography>
            </CardContent>
        </CardActionArea>
    </Paper>
  );
};
