import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { variables } from './Variable.js';
import gapi from 'gapi-client';
import {GoogleLogin} from 'react-google-login';



const clientId ="357648501888-2nlksl127d0dh4fmen3jhns8mm88tmkp.apps.googleusercontent.com";


const GoogleSSOComponent = () => {
    const navigate=useNavigate();
    const handleCredentialResponse = async (response) => {
      // Handle the credential response here.
      // The response parameter contains the sign-in data.
      console.log('Google SSO Credential Response:', response);
     try{
      // Extract the token from the response.
      if (response && response.credential) {
        const jwtToken = response.credential;
  
        // Display the JWT token in the console.
        console.log('JWT Token:', jwtToken);
       
        // Make a request to your backend to obtain a token
        const googleLoginData = {
            idToken: jwtToken,
          };
          const  backendResponse = await fetch(
            variables.API_URL + 'authenticate/google-login',
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(googleLoginData),
            }
          );
  
          if (backendResponse.ok) {
            const result = await backendResponse.json();
            // Save the JWT token in session storage
            sessionStorage.setItem('Asp_Token', result.token);
            console.log('Token', result.token);
            alert('User login successful');
            console.log('Token expiration:', result.expiration);
            // Redirect to the content page after a successful login.
            navigate('/content/department');
          } else {
            throw new Error('User login failed. Please check your credentials.');
          }
       
      }
    }
    catch(error){
        alert('An error occurred: ' + error.message);
    }
    };
  
    
    const initializeGoogleSSO = () =>{
        window.google.accounts.id.initialize({
          client_id: '357648501888-2nlksl127d0dh4fmen3jhns8mm88tmkp.apps.googleusercontent.com',
          callback: handleCredentialResponse,
        });

        // window.google.accounts.id.renderButton(
        //     document.getElementById("buttonDiv"),
        //     { theme: "outline", size: "large" }  // customization attributes
        //   );
        window.google.accounts.id.prompt();
      };
  
  
    return (
        <div id="buttonDiv"    >
            <button className='loginBtn' type="button" onClick={initializeGoogleSSO}>Google</button>
             </div>
    );
  };
  
  export default GoogleSSOComponent;

