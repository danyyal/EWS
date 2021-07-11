import React, { useState, useEffect } from 'react';
import { useHistory , Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import AuthWrapper from '../../Components/AuthWrapper/AuthWrapper';
import { resetPasswordStart, resetUserState} from '../../Redux/User/user.actions';
import './ForgotPassword.css';



const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
})

const ForgotPassword = props => {
    const dispatch = useDispatch(); 
    const history =useHistory();
    const { resetPasswordSuccess, userErr } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            dispatch(resetUserState());
            history.push('/SignIn');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }
    }, [userErr])


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(resetPasswordStart({ email }));
    }
    const configAuthWrapper = {
        headline: 'Password Recovery',

    };
    return (
        <AuthWrapper {...configAuthWrapper}>
            {errors.length > 0 && (
                <ul className="error">
                    {[errors].map((e, index) => {
                        return (
                            <li key={index}>
                                {e}
                            </li>
                        );
                    })}
                </ul>
            )}
            <form className="form paper" autoComplete='off' onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            type="email"
                            id="email"
                            name='email'
                            value={email}
                            label="Email Address"
                            autoFocus
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='RecoverPasswordButton'
                >
                    Send Link
                    </Button>
                <Grid container className='linkContainer'>
                    <Grid item xs>
                        <Link to="/SignIn" variant="body2" className='signInLink'>
                            Remember Passwprd?
              </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthWrapper>
    );
};

export default ForgotPassword;