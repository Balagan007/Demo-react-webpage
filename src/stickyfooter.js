import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Footer from './web/Footer';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="secondary" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

 function Sticyfooter() {
  return (
    <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          maxHeight: '35vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.grey,
        }}
      >
        <Container >
          <Typography variant="body1">
            NOVA BUILDERS.
          </Typography>
          
          <Copyright />
          
        </Container>
       
    </Box>
    
  );
  
}

export default Sticyfooter