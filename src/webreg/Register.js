import React,{useState} from "react";


function Register(){
    const[register,setRegister]=useState({name:"",mobile:"",email:"",user:"",password:""})
    const [validation,setValidation]=useState({name:"",mobile:"",email:"",user:"",password:""})

    const validateall=()=>{
        const{name,mobile,email,user,password}=register
        const validation={name:"",mobile:"",email:"",user:"",password:""}

        let valid=true;

        if(!name){
            validation.name="Name is Required";
            valid=false;
        }

        if(!mobile){
            validation.mobile="Mobile Number is Required";
            valid=false;
        }

        if(!email){
            validation.email="Email is Required";
            valid=false;
        }
        if(email && !/\S+@\S+\.\S+/.test(email)){
            validation.email = 'Email format must be as example@mail.com';
            valid = false;
        }

        if(!user){
            validation.user="Username is Required";
            valid=false;
        }

        if(!password){
            validation.password="Password is Required";
            valid=false;
        }
        if(password && !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)){
            validation.password = 'Invalid Password';
            valid = false;
        }

        if(!valid){
            setValidation(validation)
        }
        return valid;

    }
    
    const validateOne=(e)=>{
        const{name}=e.target
        const value=register
        let message=''

        if(!register){
                message='Name is Required'
        }

        if(register && name=='mobile'){
            message='Mobile Number is Required'
        }

        if(register && name=='email' && !/\S+@\S+\.\S+/.test(value)){
            message='Invalid Email address'
        }

        if(register && name=='user'){
            message='Username is Required'
        }

        if(register && name=='password' && !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)){
            message='Invalid password'
        }

        setValidation({...validation,[name]:message})
    }
    
    
    const toCreate=(e)=>{
        e.preventDefault()

        const valid=validateall()

        if(!valid){
            return false
        }
    }
    const{name,mobile,email,user,password}=register

        const{
            name:nameVal,
            mobile:mobileVal,
            email:emailVal,
            user:userVal,
            password:passwordVal
         }=validation

    const toApply=(e)=>{
        setRegister({...register,[e.target.name]:e.target.value})    
          
    }
    return(
        <>
        {/* <div className="regi"> */}
        <div className="area">
        <div className="header">
            <h1 className="creat" style={{color:"red"}}>Creat Account</h1>
        </div>
        <form className="fom" id="form" name="form"    >
            <div className="form-control" style={{border:"none",paddingBottom:"40px"}}>
                <label>NAME:</label>
                <input type="text" name="name" id="name" placeholder="Name" value={register.name} onChange={(e)=>toApply(e)} onBlur={validateOne}/>
                <div className="error" style={{color:"red"}}>{nameVal}</div>
                </div>
            <div className="form-control" style={{border:"none",paddingBottom:"40px"}}>
            
                <label>MOBILE NUMBER:</label>
                <input type="text" name="mobile" id="mobile" placeholder="Mobile Number" value={register.mobile} onChange={(e)=>toApply(e)} onBlur={validateOne} />
                <div className="error" style={{color:"red"}}>{mobileVal}</div>
            </div>

            

            <div className="form-control" style={{border:"none",paddingBottom:"40px"}}>
                <label>EMAIL:</label>
                <input type="text" name="email" id="email" placeholder="Email" value={register.email} onChange={(e)=>toApply(e)} onBlur={validateOne}/>
                <div className="error" style={{color:"red"}}>{emailVal}</div>
        </div>
           
           

            <div className="form-control" style={{border:"none",paddingBottom:"40px"}}>
                <label>USER ID:</label>
                <input type="text" name="user" id="user" placeholder="User Id" value={register.user} onChange={(e)=>toApply(e)} onBlur={validateOne}/>
                <div className="error" style={{color:"red"}}>{userVal}</div>
            </div>

            

           <div className="form-control" style={{border:"none",paddingBottom:"40px"}}>
               <label>PASSWORD:</label>
               <input type="password" name="password" id="password" placeholder="password" value={register.password} onChange={(e)=>toApply(e)} onBlur={validateOne}/>
               <div className="error" style={{color:"red"}}>{passwordVal}</div>
            </div>
           
          
        <button type="button" className="butt" onClick={toCreate}>Submit</button>
        </form>
        
    
    {/* </div> */}
    </div>
        </>
    )
}

export default Register