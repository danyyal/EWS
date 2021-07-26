import React,{useState} from 'react'
import AuthWrapper from '../../Components/AuthWrapper/AuthWrapper'
import {Grid,TextField,CssBaseline,Paper,Button} from '@material-ui/core'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import {addUserMessage} from '../../Redux/Contact/Contact.actions';
import {useDispatch} from 'react-redux';
import { auth } from '../../Firebase/utils';
import './ContactUs.css';
import { useHistory } from 'react-router';

const InitialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  }

  

const  ContactUs=()=> {
    const [contactDetails, setcontactDetails] = useState({...InitialState})
   const dispatch = useDispatch();
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
    if(auth.currentUser){
        dispatch(addUserMessage({
            userID:auth.currentUser.uid,
            name:contactDetails.firstName,
            email:contactDetails.email,
            message:contactDetails.message,
        }))
        ResetForm();
    } 
    return  history.push('/SignIn');

}

    const configAuthWrapper = {
        headline: 'Contact Us',
        icon:<ContactPhoneIcon/>
      };
  return (
    <div className="contactDiv" >
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
                  variant='outlined'
                  id="message"
                  name="message"
                  label="Enter Message"
                  value={contactDetails.message}
                  onChange={evt => handleOnChange(evt)}
                  multiline
                  rows={5}
                  rowsMax={10}
                  fullWidth
                />
              </Grid>
              </Grid>
            <Button type='submit' className='placeOrderBtn' >Submit</Button>
          </form>
        </Paper>
      </AuthWrapper>
    </div>
  )
}

export default ContactUs
