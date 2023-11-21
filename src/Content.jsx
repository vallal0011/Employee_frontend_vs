import React from "react";
import { NavLink, useNavigate ,Link} from "react-router-dom";
import { Outlet } from 'react-router-dom';

const Content = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('Asp_Token');
    navigate('/'); // Redirect to the login page
  };

  return (
    <>
    <div className="App container-fluid">
      <h5>Employee Management</h5>
      <nav className="navbar navbar-expand-lg bg-light navbar-dark">
        <div className="collapse navbar-collapse pos-f-t" id="navbarToggleExternalContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item- m-1">
              <Link className="btn btn-light btn-outline-primary" to="./department">
                Department
              </Link>
            </li>
            <li className="nav-item- m-1">
              <Link className="btn btn-light btn-outline-primary" to="./employee">
                Employee
              </Link>
            </li>
            

          </ul>
          
        </div>
        <form className="form-inline">
          
          <button className="btn btn-light btn-outline-primary" onClick={handleLogout}>
            Logout
          </button>
        </form>
      </nav>
      <Outlet/>
    </div>
     
    </>
  );
};

export default Content;
