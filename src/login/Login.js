import React from "react";
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';

function Login(){

    const[uname,setUname]=useState("");
    const[password,setPassword]=useState("");
    
    

//     const inSide = () =>{
//    console.log(uname);
//    console.log(password);
   
//     }
//     const goSide = (e) =>{ start
// console.log(e.target.value);
//     }

const navigate = useNavigate();
const toRegister=()=>{
    navigate("/Registerpage");
  }
useEffect(()=>{
    const persons=[
    {id:"1",
    name:"Bharathi",
    age:"24",
    color:"black",
    food:"Idly" },

    {id:"2",
    name:"Sarathi",
    age:"23",
    color:"Black",
    food:"Briyani" },

    {id:"3",
    name:"Vignesh",
    age:"24",
    color:"Red",
    food:"Chicken" },

    {id:"4",
    name:"Venkat",
    age:"25",
    color:"Blue",
    food:"parotta" },

    {id:"5",
    name:"Mahesh",
    age:"29",
    color:"Red",
    food:"Idly" },

    {id:"6",
    name:"Dinesh",
    age:"25",
    color:"Yellow",
    food:"Mutton" },

    {id:"7",
    name:"Kumaran",
    age:"29",
    color:"Red",
    food:"Idly" },

    {id:"8",
    name:"Jegan",
    age:"29",
    color:"Orange",
    food:"Idly" },

    {id:"9",
    name:"Karthik",
    age:"25",
    color:"black",
    food:"Idly" },

    {id:"10",
    name:"Siva",
    age:"23",
    color:"black",
    food:"Idly" }
];
sessionStorage.setItem("persons",JSON.stringify(persons));
},[])


const inSide=()=>{
    //const per=sessionStorage.getItem("persons");
    //console.log(Name)
    const result = JSON.parse(sessionStorage.getItem('persons'));   
    const detail = result.find(obj => { return obj.name ===uname });

    sessionStorage.setItem("out",JSON.stringify(detail.name))
    if(detail !== undefined){
        
        navigate("/Dashboard",{state:uname});
    }
    else{
        alert("Invalid Name")
        setUname("")
    }

}

  
    return(
        <>
        
        <div style={{height:"350px",margin:"85px 450px"}}>
        <div  style={{width:"300px",padding:"10px 50px 25px",border:"2px solid gray",float:"left",marginBottom:"70px",marginLeft:"50px"}}>
            <h2 style={{textAlign:"center"}}>LOG IN</h2>
            <form id="form-id" name="myform" >
                <label style={{color:"blue",fontSize:"14px",fontWeight:"bold"}} >User Name:</label>
                <input type="text" id="user" name="user"  value={uname} onChange={(e)=>setUname(e.target.value)}
                 style={{width:"100%",height:"20px",padding:"5px", marginBottom:"25px",marginTop:"5px",border:"2px solid gray",color:"black",fontSize:"15px",}} />
                
                <label style={{color:"blue",fontSize:"14px",fontWeight:"bold"}}>Password:</label>
                <input type="text" id="pass" name="pass" value={password} onChange={(e)=>setPassword(e.target.value)}
                style={{width:"100%",height:"20px",padding:"5px", marginBottom:"25px",marginTop:"5px",border:"2px solid gray",color:"black",fontSize:"15px",}}/>
                
                <button id="subm" onClick={inSide} 
                style={{width:"100%",height:"30px",padding:"5px 10px", marginBottom:"25px",marginTop:"5px",border:"2px solid crimson",fontSize:"15px",backgroundColor:"crimson"}}
                   >Login</button>
                   
                   <button id="subm" onClick={toRegister} 
                style={{width:"100%",height:"30px",padding:"5px 10px", marginBottom:"25px",marginTop:"5px",border:"2px solid crimson",fontSize:"15px",backgroundColor:"crimson"}}
                   >Register</button>
                
            </form>
        </div>
    </div>
    
    </>
    )
}

export default Login






