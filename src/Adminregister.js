import React from "react";

import { useState } from 'react';

import { Link, useNavigate,NavLink } from 'react-router-dom';


import {variables} from './Variable.js';

import "./Register.css"
const Adminregister =()=>{




  

      const [name,setName]=useState("");
      const [mail,setMail]=useState("");
      const [password,setPassword]=useState();
      const handleNameChange =(value)=>{

        setName(value);
      }
      const handleEmailChange =(value)=>{

        setMail(value);
      }
      const handlePasswordChange =(value)=>{

        setPassword(value);
      }
      const [error, setError] = useState("")
      const navigate = useNavigate();

    //   const handleChange = ({ currentTarget: input }) => {
    //     setData({...data, [input.name]: input.value})
    //   };



      const handleSubmit = () => {
        // e.preventDefault();

        const data ={
            username:name,
            email:mail,
            password:password

        }
        try {
         
       
          fetch(variables.API_URL+'authenticate/register-admin',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(Response => Response.text())
        .then((result)=>{
            alert(result);})
            navigate("/userlogin");


        } catch (error) {
         alert(error)
        }
      };
      return(
        <div className='register-form'>
        <div className='row'>
          <div className=' col-md-12'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='welcome'>Welcome </div>
                <div className='signupText'>To AdminRegister</div>
                <div className="input-container">
                  <label>Admin Name </label>
                  <input id="text"  name="firstName" onChange={(e)=> handleNameChange(e.target.value)}/>
                </div>
                
               
                <div className="input-container">
                  <label>Email</label>
                  <input id="number" name="batch"  onChange={(e)=> handleEmailChange(e.target.value)}/>
                  
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <input id="password" name="password" onChange={(e)=> handlePasswordChange(e.target.value)}/>
                  
                </div>
                {error && <div>{error}</div>}
                <div className="button-container">
                  <button className='registerBtn' id='submit'>Register</button>
                </div>
              {/* <p>Already have an account? <Link className='link' to="/userlogin">Login</Link></p> */}

              <p>Already have an account? <NavLink  to="/userlogin">Login</NavLink></p>
              
    
            </form>
        </div>
         
        </div>
        </div>
      )
}


export default Adminregister ;