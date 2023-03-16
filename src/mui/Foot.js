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

 function Lfooter() {
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
          {'We offer building contractors, flat promotion and real estate services. Castle Foundation interact with the clients at every stage of the construction process to build their dream house.'}
          {'We execute the projects within the stipulated time frame, that is the strength of our company'}
          {'We offer widest varieties of commercial , industrial,& residential properties for sale'}
          {'we are one of the leading property dealers and property agents in tirunelveli'}
        </Typography>
        <Typography variant="body1">NOVA BUILDERS.</Typography>
      </Container>

      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        Loan Offers
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'We assist our customers in getting through all sorts of documentation process so as to enable them to have easy access in initiating their procedural routines.'}
          {' The documentation process normally takes a week We have its own legal associates to assist in legal aspects.'}
          {' Housing Loan schemes are available to different categories of people such as.'}
          {'Salaried People,Business Men,Self Employed individuals,Professionals,Different Organizations'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">NOVA BUILDERS.</Typography>
      </Container>

      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
        Salient Features
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Simple Documentation Procedure'},
          {'Nominal interest rates'},
          {'Easy & Comfortable payment of loans in equated monthly installments'},
          {'Interest charges on daily reducing balance'},
          {'Flexible repayment system'},
          {'Hassle free loan'},
          {'No hidden charges'},
          {'Nominal processing charges'},
          {'Quick turn around time to get loans'},
          {'Tax Benefits'}
        </Typography>
        <Typography variant="body1">NOVA BUILDERS.</Typography>
      </Container>
       <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          minHeight: '33vh',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.blue[200]
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

export default Lfooter;