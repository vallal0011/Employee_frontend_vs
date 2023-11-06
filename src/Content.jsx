import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { Department } from "./Department";
import { Employee } from "./Employee";

import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';





const Content= ()=>{

  const user = localStorage.getItem('Asp_Token');
   
  const navigate=useNavigate();
   const handleLogout=(navigate)=> {
    // Remove the token from local storage
    localStorage.removeItem('Asp_Token');
    // Redirect the user to the login page or any other appropriate action
    navigate('/'); // Redirect using the passed navigate function
  }
  

    return(
        

        <div className="App container-fluid">
           
            <h4 className="d-flex justify-content-center m-3">
                Welcome to the Portal
            </h4>
                
            <nav className="navbar navbar-expand-lg bg-light navbar-dark">
          
                    
            <div className="collapse navbar-collapse pos-f-t" id="navbarToggleExternalContent">

                
                <ul className="navbar-nav mr-auto">
                
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/content/department">
              Department
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/content/employee">
              Employee
            </NavLink>
          </li>
          
        </ul>
        
        
    </div>
    <form className="form-inline">
             {/* <NavLink to="/" className="nav-item nav-link">Home</NavLink> */}
              {/* <button  className="btn btn-light btn-outline-primary "   type="submit">LogOut</button> */}
              {/* <NavLink className="btn btn-light btn-outline-primary" onClick={handleLogout}>
              Logout
            </NavLink> */}
            <button className="btn btn-light btn-outline-primary" onClick={() => handleLogout(navigate)}>
    Logout
  </button>
            </form>
            

 </nav>

       
       {user && <Routes>
        <Route path="department" element={<Department />} />
        <Route path="employee" element={<Employee />} />
      </Routes> }


                       
                        
 </div>
        
        
    )
}


export default Content;