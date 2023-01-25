import { Card, CardActionArea, CardContent, Grid, Link, Paper, Typography } from '@mui/material';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';
import { alpha } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { WeatherIcon } from './WeatherIcon';
import { dates } from '../helpers/date';


export const FutureConditionsCard = ({order}) => {
    
    const {data} = useContext(SearchContext);

    const [weekDay, setweekDay] = useState();

    const checkWeekDay = () => {
        const {weekDay} = dates(data.days[order].datetime);
        setweekDay(weekDay);
    }

    useEffect(() => {
      checkWeekDay();
    }, [order])
    

    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/${data.address}?day=${order}`);
    }
  
    return (
        <Paper component={Card} variant='outlined' sx={{bgcolor: alpha('#ffffff', 0.25), height: "100%"}}>
            <CardActionArea onClick={handleClick}>
                <CardContent>
                    <Typography gutterBottom variant="h5" textAlign="center">
                        {weekDay}
                    </Typography>
                    <Grid container justifyContent={'center'} >
                        <Grid item xs={12} textAlign={'center'}>
                            <WeatherIcon iconId={data.days[order].icon}/>
                        </Grid>
                        <Grid item sx={{ typography: 'caption'}}>{data.days[order].conditions}</Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        Máx: {data.days[order].tempmax} °C <br />
                        Mín: {data.days[order].tempmin}°C <br />
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Paper>
        )

}
