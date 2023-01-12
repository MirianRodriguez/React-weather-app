import { Card, CardActionArea, CardContent, Grid, Paper, Typography } from '@mui/material';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';
import { alpha } from "@mui/material";


export const FutureConditionsCard = ({order}) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const today = new Date();

    const [weekDay, setweekDay] = useState();

    const checkWeekDay = () => {
        let weekDay = today.getDay() + order;
        if (weekDay > 6) {
            weekDay = 0;
        }
        setweekDay(weekDay);
    }

    useEffect(() => {
      checkWeekDay();
    }, [order])
    

    const {data, isLoading} = useContext(SearchContext);
  
    return (isLoading ? (
        <p>cargando</p>
      ) : (
        <Paper component={Card} variant='outlined' sx={{bgcolor: alpha('#ffffff', 0.25), height: "100%"}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" textAlign="center">
                        {days[weekDay]}
                    </Typography>
                    <Grid container justifyContent={'center'} >
                        <Grid item xs={12} textAlign={'center'}>
                            <WbSunnyIcon fontSize="large" /> 
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
    )
}
