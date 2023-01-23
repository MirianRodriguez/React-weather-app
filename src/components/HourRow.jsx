import { TableCell, TableRow } from '@mui/material'
import React from 'react'

export const HourRow = ({dataHour, index}) => {
  return (
    <TableRow>
      <TableCell colSpan={1}>
        {index}
      </TableCell>
      <TableCell colSpan={1} align={"center"}>
        {dataHour.temp} °C
      </TableCell>
      <TableCell colSpan={1} align={"center"}>
        {dataHour.feelslike} °C
      </TableCell>
      <TableCell colSpan={1} align={"right"}>
        {dataHour.precipprob} %
      </TableCell>
    </TableRow>
  )
}
