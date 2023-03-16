import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

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

 function Sfooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        NOVA BUILDERS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Nova Builders is one of the well known construction company in Tenkasi offering services Since 2019. Over the years of our service our company has been able to complete several projects successfully and have gained clients satisfaction through our quality service.'}
        </Typography>
        <Typography variant="body1"> NOVA BUILDERS.</Typography>
      </Container>
       <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.primary.main
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            NOVA BUILDERS.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Sfooter