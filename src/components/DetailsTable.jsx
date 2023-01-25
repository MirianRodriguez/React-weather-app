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
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { HourRow } from "./HourRow";
import { dates } from "../helpers/date";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect } from "react";
import { ConditionRow } from "./ConditionRow";

export const DetailsTable = () => {

    const [hidden, setHidden] = useState(true);

    const { data } = useContext(SearchContext);

    const location = useLocation();

    const queryParams = queryString.parse(location.search);

    const { day } = queryParams;

    const {formatDate} = dates(data.days[day].datetime);

    const handleClickHours = () => {
        setHidden(!hidden);
    }

    const hours = data.days[day].hours;

    const navigate = useNavigate();

    const handleBefore = () => {
        if (day == 0) return;
        const toDay = parseInt(day)-1;
        navigate(`/${data.address}?day=${toDay}`);
    }

    const handleNext = () => {
        if (day == 14) return;
        const toDay = parseInt(day)+1;
        navigate(`/${data.address}?day=${toDay}`);
    }

    const [disabledBefore, setDisabledBefore] = useState(false);
    const [disabledNext, setDisabledNext] = useState(false);

    useEffect(() => {
      (day==0) ? setDisabledBefore(true) : setDisabledBefore(false);
      (day==14) ? setDisabledNext(true) : setDisabledNext(false);
    }, [day])

    return (
        <TableContainer component={Paper} sx={{ bgcolor: alpha("#ffffff", 0.25) }}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">
                            <Button onClick={handleBefore} disabled={disabledBefore}>                 
                                <NavigateBeforeIcon/>
                            </Button>
                        </TableCell>
                        <TableCell colSpan={2} align="center">
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
                        <TableCell  align="right">
                            <Button onClick={handleNext} disabled={disabledNext}>                 
                                <NavigateNextIcon/>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">
                            Máx: {data.days[day].tempmax}° C  
                        </TableCell>
                        <TableCell colSpan={2} align="center">
                            Mín: {data.days[day].tempmin}° C  
                        </TableCell>
                        <TableCell align="right">
                            RealFeel: {data.days[day].feelslikemax}° C  
                        </TableCell>
                    </TableRow>
                    <ConditionRow condition={"Probabilidad de lluvia: "} value={`${data.days[day].precipprob} %`}/>
                    <ConditionRow condition={"Nubosidad: "} value={`${data.days[day].cloudcover} %`}/>
                    <ConditionRow condition={"Humedad: "} value={`${data.days[day].humidity} %`}/>
                    <ConditionRow condition={"Viento: "} value={`${data.days[day].windspeed} Km/h`}/>
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
            </Table>
                {!hidden && ( 
                    <Table>
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
                            <TableCell colSpan={1} align={"right"}>
                                Prob. de lluvias
                            </TableCell>
                            </TableRow>
                            {hours.map((dataHour, index) => (
                                <HourRow key={index} dataHour={dataHour} index={index}/>
                            ))}
                        </TableBody>
                    </Table>               
                )}
        </TableContainer>
    );
};
