import { Grid } from "@mui/material";
import { CurrentConditions, SearchCity, FutureConditionsCard } from "../components";
import { Layout } from "../layout/Layout";


export const HomePage = () => {
    return (
        <Layout>
            <Grid container item spacing={3} xs={10} sm={10} md={6} lg={6} xl={6} sx={{ mx: "auto", pt: 10 }}>
                <Grid item xs={12}>
                    <SearchCity />
                </Grid>
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
            </Grid>
            {/* <Typography variant="h1" color="initial">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsum. Aut dignissimos natus, perferendis esse adipisci, eos quis eum quia incidunt voluptatibus corporis doloremque id quos consectetur reiciendis nemo beatae!</Typography>  */}
        </Layout>
    )
}
