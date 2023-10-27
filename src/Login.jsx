import React from "react";

import { useEffect } from 'react';

import { useState } from 'react';
import { Link, redirect, useNavigate ,NavLink} from 'react-router-dom';

import {variables} from './Variable.js';

import "./Login.css"


const Login=()=>{

  const [name,setName]=useState("");
      const [phoneNo,setPhoneNo]=useState("");
      const [password,setPassword]=useState();

      const [token,setToken]=useState("");

      const handleNameChange =(value)=>{

        setName(value);
      }
    
    
    const handlePasswordChange =(value)=>{

      setPassword(value);
    }
      const [error, setError] = useState("")
      const navigate = useNavigate();

   

      const handleSubmit = async (event) => {

        event.preventDefault(); // Prevent the default form submission behavior

        const data = {
           username: name,
           password: password
        };
       
        try {
           const response = await fetch(variables.API_URL + 'authenticate/login', {
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
           });
       
           if (response.ok) {
             const result = await response.json();
             // Save the token to localStorage
             localStorage.setItem('Asp_Token', result.token);
             console.log("Token", result.token);
             alert('User login successful');
             console.log('Token expiration:', result.expiration);
             navigate('/content/department');
           } else {
             throw new Error('User login failed. Please check your credentials.');
           }
        } catch (error) {
           alert('An error occurred: ' + error.message);
        }
       };



    return(

      <div className='login-form'>
        <div className='row'>
          <div className='col col-md-12 align-items-center d-flex'>
            <form className='form' onSubmit={handleSubmit}>
             
            <div className='welcome'>Welcome </div>
                <div className='signupText'>To Login</div>
            
                <div className="input-container">
                  <label>User Name </label>
                  <input id="text"  name="firstName" onChange={(e)=> handleNameChange(e.target.value)}/>
                </div>
               
             
               
                <div className="input-container">
                  <label>Password </label>
                  <input id="password" name="password" onChange={(e)=> handlePasswordChange(e.target.value)}/>
                  
                </div>

              {error && <div>{error}</div>}

              <div className="button-container">
              <button className='loginBtn' type='submit' id="submit">Login</button>
            </div>
        
              {/* <p>Don't have an account? <Link className='link' to="/userregister">Register</Link></p> */}
             

              <p>Don't have an account?<NavLink  to="/userregister">
              Register
            </NavLink></p>
              
            </form>
          </div>
          
          </div>  
      </div>




    )
}


export default Login;