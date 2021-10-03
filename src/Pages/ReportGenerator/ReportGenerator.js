import React from 'react'
import AdminDesign from '../Admin/AdminDesign/AdminDesign';
import { Grid, Button, TextField,Typography } from '@material-ui/core';
import ReportStyle from './ReportGenerator.css'

const ReportGenerator = () => {
    return (
        
        <div>
            <AdminDesign heading='Generate Report'/>
            {/* <Grid container className='ReportAlign'>
             <Grid item md={4}>
             <Button className="dashboardProductButton">
              Seller's Report
            </Button>
             </Grid>
             <Grid item  md={4}>
             <Button className="dashboardProductButton">
              Order's Report
            </Button>
             </Grid>
             <Grid item md={4}>
             <Button className="dashboardProductButton">
              People's Queries
            </Button>
             </Grid>
            </Grid> */}

        </div>
    )
}

export default ReportGenerator
