import {Home} from './Home';

import Login from './Login';
import Register from './Register';
import {BrowserRouter, Route,NavLink,Routes,useNavigate,useLocation} from 'react-router-dom';

import "./Intro.css";
const Intro =()=>{




    return(

        <div className="App container-fluid">
         
         
      
        
      {/* <nav className="navbar navbar-expand-lg bg-light navbar-dark">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
      <div className="collapse navbar-collapse pos-f-t" id="navbarToggleExternalContent">
        
        <ul className="navbar-nav mr-auto">
          <li className="nav-item- m-1">
          
          </li>
           </ul>
        
    </div>
              
         

      </nav> */}
      
      <h3  className='d-flex justify-content-center  m-3'>Welcome To The Portal</h3>
      </div>
      
    )
}


export default Intro;