import { Icon } from '@mui/material'
import React from 'react'

export const WeatherIcon = ({iconId}) => {
    const iconPath = `public/weather-icons/${iconId}.svg`;
  return (
    <Icon>
        <img src={iconPath}/>
    </Icon>
  )
}
