import React from 'react';
import './AuthWrapper.css';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="https://www.google.com" className='signInLink2'>
          E-Commerce With Scrapping EWS
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const AuthWrapper= ({headline,icon,children})=>{
    
    return(
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className='paper'>
                <Avatar className='avatar'>
                    {icon && icon}
                </Avatar>
                <h1 className='heading'>
                    {headline && headline}
                </h1>

                {children && children}
            </div>
            <Box mt={8} mb={8}>
            <Copyright />
            </Box>
        </Container>
    )
}


export default AuthWrapper;