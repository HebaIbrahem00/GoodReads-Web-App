import React from 'react';
import Signup from './components/signup'
import Home from './routes/home/home';
<<<<<<< HEAD
import Admin from './routes/admin/admin';	
import { BrowserRouter, Route } from 'react-router-dom';
=======
import Admin from './routes/admin/admin';
import {BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
>>>>>>> 9f810b37815fa6d6eb0bd1043f059e28b04b5482
import UserPage from './routes/UserPage/userpage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/react-popper/dist/index.umd.js';
import '../node_modules/popper.js';
<<<<<<< HEAD
function App() {
  return (

    <BrowserRouter>

      <div className="App">  
        <Route exact path="/" component={Home}  ></Route>
        <Route exact path="/userpage" component={UserPage}></Route>
        <Route exact path="/admin" component={Admin} />
=======


  function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <switch>
              <Route path="/admin" component={Admin} />
              <Route exact path="/" component={Home} />
              <Route exact path="/userpage" component={UserPage}></Route>
            </switch>
        </BrowserRouter>
>>>>>>> 9f810b37815fa6d6eb0bd1043f059e28b04b5482
      </div>

  );
}

export default App;
