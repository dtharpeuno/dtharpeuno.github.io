import '../../App.css';
import React from 'react';
import darryl_tharpe from '../../images/darryl_tharpe.jpeg'
import {
    Box,
    Link,
    Typography
} from '@material-ui/core';

function Header() {
  return (
    <Box className='header'>
    <Box className="inside-header">
        <Box className='header-image'>
        <img src={darryl_tharpe} alt="Darryl Tharpe" />
        </Box>
        <Box className="header-breakdown">
        <Typography variant="h6" className='green-title'>
        Darryl Tharpe
        </Typography>
        <Typography variant="body2">
        Senior Software Engineer
        </Typography>
        <Typography variant="body2">
        Atlanta, Ga
        </Typography>
        <Typography variant="body2">
        <Link href="mailto:dtharpe1@gmail.com"
        underline="hover"
        variant="body2"
        color="inherit">
        dtharpe1@gmail.com
        </Link>
        </Typography>
        <Typography variant="body2">
        <Link href="https://www.linkedin.com/in/darryltharpe/"
        underline="hover"
        variant="body2"
        color="inherit">
        Linkedin
        </Link>
        </Typography>
        <Typography variant="body2">
        <Link href="https://github.com/dtharpeuno"
        underline="hover"
        variant="body2"
        color="inherit">
        Github / dtharpeuno
        </Link>
        </Typography>
        </Box>
    </Box>
    </Box>
  );
}

export default Header;