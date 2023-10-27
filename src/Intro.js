import {Home} from './Home';

import Login from './Login';
import Register from './Register';
import {BrowserRouter, Route,NavLink,Routes,useNavigate,useLocation} from 'react-router-dom';


const Intro =()=>{




    return(

        <div className="App container-fluid">
         
         
      <h4 className="d-flex justify-content-center m-3">
        Welcome to the Portal
      </h4>
        
      <nav className="navbar navbar-expand-lg bg-light navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
      <div className="collapse navbar-collapse pos-f-t" id="navbarToggleExternalContent">
        
        <ul className="navbar-nav mr-auto">
          <li className="nav-item- m-1">
            {/* <NavLink className="btn btn-light btn-outline-primary " to="/home">
              Home
            </NavLink> */}
          </li>
           </ul>
        
    </div>
              <form className="form-inline">
              
              
              <NavLink className="btn btn-light btn-outline-primary " to="/userlogin">
              Login
            </NavLink>
            </form>
      
         

      </nav>
      <h3 d-flex  m-3>This is Home page</h3>
      </div>
      
    )
}


export default Intro;