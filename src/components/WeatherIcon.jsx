import { Icon } from '@mui/material'
import React from 'react'

export const WeatherIcon = ({iconId}) => {
    const iconPath = `/weather-icons/${iconId}.svg`;
  return (
    <Icon>
        <img src={iconPath}/>
    </Icon>
  )
}
