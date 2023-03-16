import React from 'react';
import Footer from './web/Footer';
import Header from './web/Header';
import Page1 from './web/Page1';
import Page2 from './web/Page2';
import axios from 'axios';
// var axios = require('axios');
var data = '';

var config = {
  method: 'put',
maxBodyLength: Infinity,
  url: 'http://localhost:4000/api/data',
  headers: { },
  data : data
};


function Webhome(){
    
    const result = axios.get('http://localhost:4000/api/data').then((response) => {
        console.log(response)
        // return result;
      })
        .catch((error) => {
          return error;
        });

    
    return(
        <>
        {/* <Header/> */}
        <Page1/>
        <Page2/>
        {/* <Footer/> */}
        </>
    )
} 

export default Webhome;