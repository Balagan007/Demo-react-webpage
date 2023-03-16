import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from 'mdbreact';

function Page7(){
    const data={
        columns: [
          {
            label: "Sl.No",
            field: "slno",
            sort: "asc",
            width: 60
          },
          {
            label: "Description",
            field: "description",
            sort: "asc",
            width: 270
          },
          {
            label: "Brand",
            field: "brand",
            sort: "asc",
            width: 200
          },
          {
            label: "Price (Rs)",
            field: "Price",
            sort: "asc",
            width: 60
          },
          {
            label: "QTY",
            field: "qty",
            sort: "asc",
            width: 150
          }
        ],
          rows: [
            {
              slno: "1",
              description: "M-Sand",
              brand: "-",
              Price: "3000",
              qty: "10 Unit",
            
            },
            {
              slno: "2",
              description: "Cement",
              brand: "India Cements",
              Price: "900",
              qty: "100 packs",
            
            },
            {
              slno: "3",
              description: "Bricks",
              brand: "KVB",
              Price: "7",
              qty: "10000 no's",
            
            },
            {
              slno: "4",
              description: "TMT Rod",
              brand: "JWS",
              Price: "1000",
              qty: "5 ton",
            
            },
            {
              slno: "5",
              description: "Gravel",
              brand: "-",
              Price: "6000",
              qty: "3 Unit",
            
            },
            {
              slno: "6",
              description: "Paint",
              brand: "Asianpaint",
              Price: "1000",
              qty: "50 li",
            
            },
            {
              slno: "7",
              description: "Warnish",
              brand: "-",
              Price: "50",
              qty: "10 li",
            
            },
            {
              slno: "8",
              description: "10 Pvc Pipe",
              brand: "Prince",
              Price: "800",
              qty: "10 no's",
            
            },
            {
              slno: "9",
              description: "3 Pvc Pipe",
              brand: "Prince",
              Price: "300",
              qty: "30 no's",
            
            },
            {
              slno: "10",
              description: "Cpvc pipe",
              brand: "Prince",
              Price: "200",
              qty: "50 no's",
            
            },
            {
              slno: "11",
              description: "Water Heater",
              brand: "Crampton",
              Price: "5000",
              qty: "1 Unit",
            
            },
            {
              slno: "12",
              description: "Motor",
              brand: "Crampton",
              Price: "9000",
              qty: "1 Unit",
            
            },
            {
              slno: "13",
              description: "Fan",
              brand: "Crampton",
              Price: "1000",
              qty: "5 Unit",
            
            },
            {
              slno: "14",
              description: "Tube Light",
              brand: "Crampton",
              Price: "200",
              qty: "10 Unit",
            
            },
            {
              slno: "15",
              description: "LED Bulb",
              brand: "Crampton",
              Price: "90",
              qty: "20 Unit",
            
            },
            {
              slno: "16",
              description: "Water Tap",
              brand: "Crampton",
              Price: "100",
              qty: "10 Unit",
            
            },
            {
              slno: "17",
              description: "Valve",
              brand: "Crampton",
              Price: "300",
              qty: "8 Unit",
            
            },
            {
              slno: "18",
              description: "Switch",
              brand: "Legrand",
              Price: "150",
              qty: "20 Unit",
            
            },
            {
              slno: "19",
              description: "Wire",
              brand: "Kundan",
              Price: "1000",
              qty: "10 Unit",
            
            },
            {
              slno: "20",
              description: "Shink",
              brand: "Jaguar",
              Price: "2000",
              qty: "1 Unit",
            
            }

          
        ]
    };
    
    return <MDBDataTable striped bordered hover data={data} />;  
    
}

export default  Page7 
 
