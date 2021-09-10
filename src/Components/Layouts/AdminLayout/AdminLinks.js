import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOutUserStart, signUpUserStart } from '../../../Redux/User/user.actions';
import { Grid, Typography, Button, TextField, Checkbox } from '@material-ui/core';
import AuthWrapper from '../../AuthWrapper/AuthWrapper'
import AddUserModal from './AddUserModal'
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal'
import './AdminLayout.css'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr,
  MailError: user.MailError
})
const AdminLinks = ({displayer="none"}) => {
  const [hideModal, setHideModal] = useState(true);
  const [addUser, setaddUser] = useState(false);
  const dispatch = useDispatch();
  const { userErr, MailError } = useSelector(mapState);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmPassword] = useState('');
  const [errors, setError] = useState([]);
  const [mailError, setMailError] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const toggleModal = () => setHideModal(!hideModal);

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
  const configAuthWrapper = {
    headline: 'Sign Up',
  };

  const configModal = {
    hideModal,
    toggleModal
  };

  const ResetForm = () => {
    setDisplayName('');
    setError([]);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    document.getElementById("sellerCheck").checked=false;
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

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  const history = useHistory();
  return (
    <ul className={displayer}>
      {showConfirmationModal && <ConfirmationModal onClick={()=>signOut()} showModal={showConfirmationModal} onRequestClose={()=>setShowConfirmationModal(false)} title="Sign out?" text="Are you sure you want to sign out?" />}
      <li >
        <Button className='adminButtons liBorder' onClick={() => history.push('/')}>
          Home
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => {
              setaddUser(true)
              toggleModal()
            }} >
          Add User
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin/manageSeller')}  >
          Manage Seller
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin/manageBuyer')}>
          Manage Buyers
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin')}>
          Manage Products
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => history.push('/Admin/ReportGenerator')}>
          Report
        </Button>
      </li>

      <li>
        <Button className='adminButtons liBorder' onClick={() => setShowConfirmationModal(true)}>
          SignOut
        </Button>
      </li>

      { addUser && <AddUserModal {...configModal}>
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
          <form onSubmit={handleFormSubmit} autoComplete='off'>
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
                  onChange={e => {
                    if(e.target.value === password)
                      setMailError("")
                    setConfirmPassword(e.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Checkbox id="sellerCheck" /> Please check if you want to create user as a Seller
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Button className="resetForm" onClick={()=>ResetForm()} >Reset Form</Button>
                </Typography>
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className='SignInButton'
            >
              Add User
            </Button>
          </form>
        </AuthWrapper>
      </AddUserModal>}

    </ul>
  )
}

export default AdminLinks;