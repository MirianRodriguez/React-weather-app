import React, { useContext } from 'react'
import { Paper, Card, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { alpha, Typography } from "@mui/material";
import { SearchContext } from '../context/SearchContext';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';


export const DetailsTable = () => {

    const {data} = useContext(SearchContext);

    const location = useLocation();

    const queryParams = queryString .parse(location.search);

    const {day} = queryParams;

    //console.log(data.resolvedAddress);
    console.log(data.days[day]);

    return (
        <TableContainer component={Paper} sx={{ bgcolor: alpha('#ffffff', 0.25) }}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">{data.resolvedAddress}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            Máx: {data.days[day].tempmax}° C <br/>
                            Mín: {data.days[day].tempmin}° C <br/>
                            RealFeel: {data.days[day].feelslikemax}° C <br/>
                            {data.days[day].description}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Probabilidad de lluvia: {data.days[day].precipprob} %
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Nubosidad: {data.days[day].cloudcover} %
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Humedad: {data.days[day].humidity} %
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Viento: {data.days[day].windspeed} Km/h
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Salida y puesta del sol <br/>
                            {data.days[day].sunrise} - {data.days[day].sunset}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Por hora --
                        </TableCell>
                    </TableRow>
                    {/* {rows.map((row) => (
            <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            ))} */}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
