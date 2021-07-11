import { React, useState, useEffect } from 'react';
import { Button, TextField, Grid, Typography, Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import AuthWrapper from '../../Components/AuthWrapper/AuthWrapper'
import { signUpUserStart } from '../../Redux/User/user.actions'
import './SignUp.css';


const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
  MailError: user.MailError
})
const SignUp = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser, userErr, MailError } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmPassword] = useState('');
  const [errors, setError] = useState([]);
  const [mailError, setMailError] = useState('');

  useEffect(() => {
    if (currentUser) {
      ResetForm();
      history.push('/');
    }
  }, [currentUser]);

  useEffect(() => {
    if (Array.isArray([userErr]) && userErr.length > 0) {
      setError(userErr);
    }
  }, [userErr]);

  useEffect(() => {
    if (MailError !== undefined) {
      setMailError(MailError);
    }

  }, [MailError]);


  const ResetForm = () => {
    setDisplayName('');
    setError([]);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }


  const handleFormSubmit = event => {

    event.preventDefault();
    if (document.getElementById("sellerCheck").checked) {
      dispatch(signUpUserStart({
        displayName,
        email,
        password,
        errors,
        confirmationPassword,
        userRoles: ['user', 'seller']
      }));
    }
    else {
      dispatch(signUpUserStart({
        displayName,
        email,
        password,
        errors,
        confirmationPassword,
        userRoles: ['user']

      }));
    }
  }
  const configAuthWrapper = {
    headline: 'Sign Up',
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <Typography>
        {errors.length > 0 && (
          <ul className='ErrorStyle'>
            {[errors].map((err, index) => {
              return (
                <li key={index}>
                  {err}
                </li>
              )
            })}
          </ul>
        )}


        {mailError.length > 0 && (
          <span className='MailStyle'>{mailError}</span>
        )}

      </Typography>
      <form className="form" onSubmit={handleFormSubmit} autoComplete='off'>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="displayName"
              name='displayName'
              value={displayName}
              label="Full Name"
              onChange={e => setDisplayName(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='email'
              variant="outlined"
              required
              fullWidth
              id="email"
              name='email'
              value={email}
              label="Email Address"
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name='confirmPassword'
              value={confirmationPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Checkbox id="sellerCheck" />
              Please check If you want to sign up as a seller as well
            </Typography>
          </Grid>
        </Grid>
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className='SignInButton'
        >
          Sign Up
            </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/SignIn" variant="body2" className='signUpLink'>
              Already have an account? Sign in
                </Link>
          </Grid>
        </Grid>
      </form>
    </AuthWrapper>

  );
}

export default SignUp;