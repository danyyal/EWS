import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Grid,Typography} from '@material-ui/core';
import './AdminDesign.css';


const AdminDesign = ({heading}) => {
const history= useHistory();
  return (
    <div className="seller">
      <Typography className="adminHeading" align='left' variant="h6" gutterBottom>Admin Pannel</Typography>
      <div className="callToActions">
        
       
        <Grid container className='manageProducts' spacing={4}>
        <Grid item xs >
        {(() => {
  
  switch (heading) {
     case 'Manage Seller':
         return (
           <h1>{heading}</h1>
         )
     case 'Manage Buyer':
         return (
           <h1>{heading}</h1>
         )
        case 'Generate Report':
          return(
            <h1>{heading}</h1>
          )
        
     default:
         return (
           <h1>Manage Products</h1>
         )
  }

})()}

        </Grid>
      </Grid>

      </div>

      




    </div>
  );
}

export default AdminDesign;