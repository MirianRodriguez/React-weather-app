import { alpha, Paper, Table, TableBody, TableContainer, TableHead } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { DayRow } from './DayRow'

export const DaysTable = () => {

    const {data} = useContext(SearchContext);
    const {days} = data;

  return (
    <TableContainer component={Paper} sx={{ bgcolor: alpha("#ffffff", 0.25) }}>
        <Table>
            <TableBody>
            {days.map((dataDay, index) => { 
              return (index>3) && (
              <DayRow key={index} dataDay={dataDay} order={index} address={data.address}/>
              )})}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
