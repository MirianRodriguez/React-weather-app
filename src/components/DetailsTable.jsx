import React, { useContext, useState } from "react";
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
} from "@mui/material";
import { alpha, Typography } from "@mui/material";
import { SearchContext } from "../context/SearchContext";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { sizing } from "@mui/system";
import { HourRow } from "./HourRow";

export const DetailsTable = () => {

    const [hidden, setHidden] = useState(true);

    const { data } = useContext(SearchContext);

    const location = useLocation();

    const queryParams = queryString.parse(location.search);

    const { day } = queryParams;

    const date = new Date(`${data.days[day].datetime}T00:00:00`);

    const formatDate = date.toLocaleDateString("es-ar", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const handleClickHours = () => {
        setHidden(!hidden);
        console.log(hidden?"oculto":"visible")
    }

    const hours = data.days[day].hours;

    return (
        <TableContainer component={Paper} sx={{ bgcolor: alpha("#ffffff", 0.25) }}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={4}>
                            <Typography variant="h5" component="div">
                                {data.resolvedAddress}
                            </Typography>
                            <Typography variant="subtitle" component="div">
                                {formatDate}
                            </Typography>
                            <Typography variant="caption">
                                {data.days[day].description}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={1} align="left">
                            Máx: {data.days[day].tempmax}° C  
                        </TableCell>
                        <TableCell align="center">
                            Mín: {data.days[day].tempmin}° C  
                        </TableCell>
                        <TableCell colSpan={1} align="right">
                            RealFeel: {data.days[day].feelslikemax}° C  
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            Probabilidad de lluvia: 
                        </TableCell>
                        <TableCell colSpan={2} align="right">
                            {data.days[day].precipprob} %
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            Nubosidad:
                        </TableCell>
                        <TableCell colSpan={2} align="right">
                            {data.days[day].cloudcover} %
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            Humedad:
                        </TableCell>
                        <TableCell colSpan={2} align="right">
                            {data.days[day].humidity} %
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            Viento
                        </TableCell>
                        <TableCell colSpan={2} align="right">
                            {data.days[day].windspeed} Km/h
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            Amanecer: {data.days[day].sunrise}
                        </TableCell>
                        <TableCell colSpan={2} align="right">
                            Atardecer: {data.days[day].sunset}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={4}>
                            <Button fullWidth onClick={handleClickHours}>Por hora <KeyboardArrowRightIcon/></Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
                {!hidden && (                
                    <TableBody colSpan={4}>
                        <TableRow>
                        <TableCell colSpan={1}>
                            Hora
                        </TableCell>
                        <TableCell colSpan={1}>
                            Temperatura
                        </TableCell>
                        <TableCell colSpan={1}>
                            Sensación térmica
                        </TableCell>
                        <TableCell colSpan={1}>
                            Prob. de lluvias
                        </TableCell>
                        </TableRow>
                        {hours.map((dataHour, index) => (
                            <HourRow key={index} dataHour={dataHour} index={index}/>
                        ))}
                    </TableBody>
                )}
            </Table>
        </TableContainer>
    );
};
