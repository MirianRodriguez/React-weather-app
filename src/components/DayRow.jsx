import { Grid, Hidden, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { dates } from '../helpers/date'
import { WeatherIcon } from './WeatherIcon';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import { useNavigate } from 'react-router-dom';

export const DayRow = ({dataDay, order, address}) => {

  const {weekDay, shortDate} = dates(dataDay.datetime);
  
  const navigate = useNavigate();

  const handleClickRow = () => {
    navigate(`/${address}?day=${order}`)
  }

  return (
    <TableRow onClick={handleClickRow}>
        <TableCell xs={3} lg={2}> 
            <Typography variant="body2" color="initial">{weekDay}</Typography>
            <Typography variant="caption" color="text.secondary">{shortDate}</Typography>
        </TableCell>
        <TableCell xs={3} lg={2}>
            <WeatherIcon iconId={dataDay.icon}/>
        </TableCell>
        <TableCell xs={3} lg={3} align='right'>
            <Typography variant="h6" color="initial">{dataDay.tempmax}° </Typography>
            <Typography variant="body2" color="text.secondary">{dataDay.tempmin}°</Typography>
        </TableCell> 
        <TableCell xs={0} lg={3}>
          <Typography variant="body2" color="initial" sx={{ display: { xs: 'none', lg: 'inline' } }}>
            {dataDay.conditions}
          </Typography>
        </TableCell>    
        <TableCell xs={3} lg={2}>
          <Grid container alignItems="end">
            <UmbrellaIcon/>
            <Typography variant="body2" color="initial">
              {dataDay.precipprob}%
            </Typography>
          </Grid>
        </TableCell>
    </TableRow>
  )
}
