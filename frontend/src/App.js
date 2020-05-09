import React from 'react';
import Navbar from './components/navbar/navbar'
import Signup from './components/signup'
import Home from './routes/home/home';
import Admin from './routes/admin/admin';
import {BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserPage from './routes/UserPage/userpage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/react-popper/dist/index.umd.js';
import '../node_modules/popper.js';

import { BrowserRouter, Route } from 'react-router-dom';


  function App() {
    return (
      <div className="App">
        <BrowserRouter>
            <switch>
              <Route path="/admin" component={Admin} />
              <Route exact path="/" component={Home} />
            </switch>
            <Route exact path="/userpage" component={UserPage}></Route>
        </BrowserRouter>
        <Navbar/>
      </div>

  );
}

export default App;
