import { Card, CardActionArea, CardContent, Grid, Paper, Typography } from '@mui/material';
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';
import { alpha } from "@mui/material";


export const FutureConditionsCard = ({order}) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    const [weekDay, setweekDay] = useState();

    const checkWeekDay = () => {
        const today = new Date();
        let weekDay = today.getDay() + order;
        if (weekDay == 7) {
            weekDay = 0;
        }
        if (weekDay == 8) {
            weekDay = 1;
        }
        if (weekDay == 9) {
            weekDay = 2;
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
