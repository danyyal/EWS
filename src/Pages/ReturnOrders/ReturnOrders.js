import React,{useState} from 'react'
import AuthWrapper from '../../Components/AuthWrapper/AuthWrapper'
import {Grid,TextField,Paper,Button} from '@material-ui/core'


import { useHistory } from 'react-router';

const InitialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    orderID:'',
    pic:''
  }

  

const  ReturnOrder=()=> {
    const [contactDetails, setcontactDetails] = useState({...InitialState})
   const history =useHistory();
    const handleOnChange = evt => {
        const { name, value } = evt.target;
        setcontactDetails({
          ...contactDetails,
          [name]: value
        })
      }

const ResetForm=()=>{
    setcontactDetails.lastName='';
    setcontactDetails.firstName='';
    setcontactDetails.email='';
    setcontactDetails.message='';
}
const handleSubmit= e=>{
    e.preventDefault();
        ResetForm();
    
    return  history.push('/SignIn');

}

    const configAuthWrapper = {
        headline: 'Return Order',
    
      };
    return (
        <div >
            {/* <CssBaseline/> */}
        <AuthWrapper {...configAuthWrapper} >
        <Paper className='paper'>
          <form onSubmit={handleSubmit} className='contactForm'  >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  value={contactDetails.firstName}
                  onChange={evt => handleOnChange(evt)}
                  
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  value={contactDetails.lastName}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type='email'
                  id="email"
                  name="email"
                  label="Email"
                  value={contactDetails.email}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type='text'
                  id="orderID"
                  name="orderID"
                  label="Enter Order ID"
                  value={contactDetails.orderID}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth
                />
              </Grid>

 
              <Grid item xs={12}>
                  <h2>Attach pictures</h2>
                <TextField
                  variant='outlined'
                  type='file'
                  id="pics"
                  name="pics"
                  label=""
                  value={contactDetails.pic}
                  onChange={evt => handleOnChange(evt)}
                  fullWidth
                />
              </Grid>
             

              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  id="message"
                  name="message"
                  label="Reason to Return Order"
                  value={contactDetails.message}
                  onChange={evt => handleOnChange(evt)}
                  multiline
                  rows={5}
                  rowsMax={10}
                  fullWidth
                />
              </Grid>

              </Grid>
            <Button type='submit' className='placeOrderBtn' >Confirm to return</Button>
          </form>
        </Paper>

        </AuthWrapper>
        </div>
    )
}

export default ReturnOrder;
