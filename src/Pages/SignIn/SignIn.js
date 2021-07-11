import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import AuthWrapper from '../../Components/AuthWrapper/AuthWrapper'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { emailSignInStart, googleSignInStart} from '../../Redux/User/user.actions'
import './SignIn.css';
import { Typography } from '@material-ui/core';



const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  MailError:user.MailError
});
const SignIn = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser,MailError } = useSelector(mapState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mailError,setMailError]= useState('');
  useEffect(() => {
    if (currentUser) {
      ResetForm();
      history.push('/');
    }
  }, [currentUser]);

  useEffect(() => {
    if (MailError) {
    setMailError(MailError);
    }
  }, [MailError])
  const ResetForm = () => {
    setEmail('');
    setPassword('');
    setMailError('');
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  }
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  const configAuthWrapper = {
    headline: 'Sign In',
    icon:<LockOutlinedIcon/>
  };
  return (
    <AuthWrapper {...configAuthWrapper}>
      <Typography>
      {mailError.length > 0 && (
              <span className='MailStyle'>{mailError}</span>
       )}

      </Typography>
      <form className='form' onSubmit={handleSubmit}>
        <TextField
          type='email'
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          value={password}
          label="Password"
          type="password"
          name='password'
          id="password"
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className='SignInButton'
        >
          Sign In
          </Button>

        <Grid container className='linkContainer'>
          <Grid item xs>
            <Link to="/ForgotPassword" variant="body2" className='signInLink'>
              Forgot password?
              </Link>
          </Grid>
          <Grid item>
            <Link to="/SignUp" variant="body2" className='signInLink'>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Button variant="contained" className='googleBtn' fullWidth onClick={handleGoogleSignIn}>
          Sign In with Google
          </Button>
      </form>

    </AuthWrapper>
  );
}

export default SignIn;