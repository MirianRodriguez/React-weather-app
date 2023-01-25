import { TableCell, TableRow } from '@mui/material'
import React from 'react'

export const ConditionRow = ({condition, value}) => {
  return (
    <TableRow>
        <TableCell colSpan={2}>
            {condition}
        </TableCell>
        <TableCell colSpan={2} align="right">
            {value}
        </TableCell>
    </TableRow>
  )
}
