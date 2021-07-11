import { Button, Grid } from '@material-ui/core'
import React from 'react'
import './AboutUs.css'



function AboutUs() {
    return (
        <div className="AlignAbout" >
        <Grid container  className='aboutHead'>
            <Grid item xs={12}> Our Aim is to develop an Efficient Ecommerece Site that can save people from fraud </Grid>
            <Grid item xs={12}> <Button>Read More</Button></Grid>
        </Grid>
         
         <Grid container >
       <Grid item xs={12}><h1>Our Vision</h1></Grid>
       <Grid item xs={12}><h1>Team</h1></Grid>
       <Grid item xs={12}><h1>Experience</h1></Grid>
         </Grid>

      <Grid container>
          <Grid item xs={12}><h1>Our Services</h1></Grid>
          <Grid item xs={12}><h1>Fast Delivery</h1></Grid>
          <Grid item xs={12}><h1>No fraud</h1></Grid>
          <Grid item xs={12}><h1>quality Product</h1></Grid>
      </Grid>

      <Grid container >
<Grid item xs={12}><h1>Future Work</h1></Grid>
      </Grid>
        
        </div>
    )
}

export default AboutUs;
