import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Webhome from './webhome';
import Webinte from './webinte';
import Webcont from './webcont';
import Weblog from './weblog';
import Webregis from './webregis';
import Webdata from './webdata';
import Webdboard from './webdboard';
import Weblist from './weblist';
import Header from './web/Header';
import Footer from './web/Footer';
import Webprice from './Webprice';
import Websfoot from './Websfoot';
import Weblfoot from './Weblfoot';
import Sticyfooter from './stickyfooter';
import { Box } from '@mui/system';
import Webcard from './webcard';
import Webwish from './webwish';
import Thanks from './Thanks';




function App() {


  return (
    <>


      <Router>
        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '35vh',
          }}
        >
          <Routes>
            <Route exact path='/' element={<Webhome />}></Route>
            <Route path='/InteriorDesign' element={<Webinte />}></Route>
            <Route path='/MuiPrice' element={<Webprice />}></Route>
            <Route path='/SFooter' element={<Websfoot />}></Route>
            <Route path='/LFooter' element={<Weblfoot />}></Route>
            <Route path='/Cart' element={<Webcard />}></Route>
            <Route path='/Wishlist' element={<Webwish />}></Route>
            <Route path='/Thanks' element={<Thanks />}></Route>
            <Route path='/Contact' element={<Webcont />}></Route>
            <Route path="/Loginpage" element={<Weblog />}></Route>
            <Route path='/Dashboard' element={<Webdboard />}></Route>
            <Route path='/List' element={<Weblist />}></Route>
            <Route path="/Data" element={<Webdata />}></Route>
            <Route path='/Registerpage' element={<Webregis />}></Route>
          </Routes>
        </Box>
        <Sticyfooter />
      </Router>

    </>
  );
}

export default App;





// onClick={()=>{setLogin(!login);goLogin}}

// {login==true?<button logout></button>:<button login></button>}