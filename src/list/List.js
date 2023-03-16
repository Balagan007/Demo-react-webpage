import React from "react";
import { useState,useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTable } from 'mdbreact';
import { Navigate, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MDBSpinner } from 'mdb-react-ui-kit';
import DotLoader from "react-spinners/DotLoader";
import axios from "axios";




function List(){
    const[develop,setDevelop]=useState([]);
    const[isLoading,setIsloading]=useState(false);

    useEffect(()=>{
        setIsloading(true);
        fetch("https://api.sampleapis.com/wines/reds")
        .then((res)=>{res.json()
        .then((signal)=>{
            console.log(signal);
            setDevelop(signal);   
            setIsloading(false) 
                    }
                )
            }
        )
        
     
    }
    
    ,[])

    const report={
        columns:[
            {
                label: "Id",
                field: "id",
            },
            {
                label: "Name",
                field: "winery",
            },
            {
                label: "Brand",
                field: "wine",
            },
            {
                label: "Location",
                field: "location",
            },
            
        ],
        rows:develop.map((x)=>{
            return{
                id:x.id,
                winery:x.winery,
                wine:x.wine,
                location:x.location

            }
        })
    };

    
   return(
    <>
   {/* {isLoading?<MDBSpinner color='tomato'>
        <div className='visually-hidden' style={{height:"80px",width:"50px",marginLeft:"50%"}}>Loading...</div>
      
      </MDBSpinner>: */}

{isLoading?<div className="load"><DotLoader color="#e90909"/></div>:

    <MDBDataTable striped bordered hovered data={report} />
    }
    </>
   )
}

export default List;