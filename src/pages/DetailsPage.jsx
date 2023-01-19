import React from 'react'
import { Layout } from '../layout/Layout'
import { Grid } from '@mui/material'
import { DetailsTable } from '../components/DetailsTable';

export const DetailsPage = () => {
  return (
    <Layout>
      <Grid container item spacing={3} xs={10} sm={10} md={6} lg={6} xl={6} sx={{ mx: "auto", pt: 10 }}>
        <Grid item xs={12}>
          <DetailsTable/>
        </Grid>
      </Grid>
    </Layout>
  )
}
