
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {BrowserRouter, Route,NavLink,Routes,useNavigate,useLocation} from 'react-router-dom';
import Content from './Content';

import Login from './Login';
import Register from './Register';
import Intro from './Intro';
import Adminregister from './Adminregister';


  // Check if the user is authenticated (you can implement your logic here)
  function isUserAuthenticated() {
    const token = localStorage.getItem('Asp_Token');
    return !!token; // Return true if a token is present; otherwise, false.
  }

function App() {


  const user = localStorage.getItem('Asp_Token');

 
  return (
    

      <BrowserRouter>
      

     <Routes>
                    
                    <Route path='/' element={<Intro />} />


                  {/* <Route path='/home' element={<Home />} /> */}
                  <Route path="/userlogin" element={<Login />} />
                  <Route path='/userregister' element={<Register />} />

                  <Route path='/adminregister' element={<Adminregister/>}/>

                  {user &&
                  <Route path='/content/*' element={<Content />}>
                    <Route path='department' element={<Department />} />
                    <Route path='employee' element={<Employee />} />
                  </Route>  }
        </Routes>

        </BrowserRouter>
    
   
  );
}

export default App;
