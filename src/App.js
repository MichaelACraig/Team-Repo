import house from './house.jpg';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import Login from './Login.js';
import LogOut from './LogOut.js';

function App() {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  return (
    <Router>
      <div className="App">
      <header className="App-header">
          <img src={house} className="App-logo" alt="logo" />
          <p>
              Welcome to HouseFinder.io! Login to our website to find the 
              best house match for your needs.
          </p>
          {/* <Link to="/login">
              <button className="btn btn-secondary">Log In</button>
          </Link> */}
          <Login />
      </header>
        {/* Router for navigating to Login after clicking button*/}
        <Routes>
              {/* <Route path = '/login' element={<Login />} /> */}
              <Route path = '/logout' element={<LogOut />} />
        </Routes>
      </div>
    </Router>  
  );
}

export default App;
