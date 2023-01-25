import { Button, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { CurrentConditions, SearchCity, FutureConditionsCard } from "../components";
import { SearchContext } from "../context/SearchContext";
import { useFetchApi } from "../hooks/useFetchApi";
import { Layout } from "../layout/Layout";
import { alpha } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DaysTable } from "../components/DaysTable";



export const HomePage = () => {

    const { city } = useContext(SearchContext);

    useFetchApi(city);

    const { isLoading } = useContext(SearchContext);

    const [hidden, setHidden] = useState(true);

    const handleClickVerMas = () => {
        setHidden(!hidden);
    }

    return (
        <Layout>
            <Grid container item spacing={3} xs={10} sm={10} md={6} lg={6} xl={6} sx={{ mx: "auto", pt: 10 }}>
                <Grid item xs={12}>
                    <SearchCity />
                </Grid>
                {isLoading ? (
                    <Grid item xs={12} textAlign={'center'}>
                        <CircularProgress/>
                    </Grid>
                ) : (
                    <>
                    <Grid item xs={12}>
                        <CurrentConditions />
                    </Grid>
                    <Grid container item xs={12} spacing={2} alignItems="stretch">
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <FutureConditionsCard order={1} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <FutureConditionsCard order={2} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                            <FutureConditionsCard order={3} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant="outlined" sx={{bgcolor: alpha('#ffffff', 0.25)}} onClick={handleClickVerMas}>Ver próximos días<KeyboardArrowRightIcon/></Button>
                    </Grid>
                    {!hidden && (
                        <Grid item xs={12}>
                            <DaysTable/>
                        </Grid>
                    )}
                    </>
                )}
            </Grid>
            {/* <Typography variant="h1" color="initial">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsum. Aut dignissimos natus, perferendis esse adipisci, eos quis eum quia incidunt voluptatibus corporis doloremque id quos consectetur reiciendis nemo beatae!</Typography>  */}
        </Layout>
    )
}
