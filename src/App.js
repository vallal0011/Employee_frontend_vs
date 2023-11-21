
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import { Routes, Route } from 'react-router-dom';
import Content from './Content';

import Login from './Login';
import Register from './Register';
import Intro from './Intro';
import Adminregister from './Adminregister';
import { useEffect } from 'react';



import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import GoogleLoginComponent from './GoogleLoginComponent';
import PrivateRoute from './PrivateRoute'; 
import { BrowserRouter } from 'react-router-dom';
function App() {
 
  const Navigate=useNavigate();
  const user = sessionStorage.getItem('Asp_Token');
  
  return (
    
    
    <>
    
      <Routes>
        <Route path="/" element={user ? <Navigate to="/content" /> : <Login />} />
        <Route path="/userregister" element={<Register/>} />
        <Route path="/adminregister" element={<Adminregister/>} />
        {user && (
          <Route path="content" element={<Content />}>
            <Route path='department' element={<Department />} />
            <Route path="employee" element={<Employee />} />
            <Route path="*" element={<Content />} />
          </Route>
          
        )}

        <Route
              path="/content/department"
              element={
                user ? (
                  <Department />
                ) : (
                  // If the user is not authenticated, redirect to the login page
                  <Navigate to="/" replace />
                )
              }
            />

       
      </Routes>
      
    </>
    
   
  );
}

export default App;
