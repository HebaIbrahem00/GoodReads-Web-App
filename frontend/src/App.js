import React from 'react';
import Signup from './components/signup'
import Home from './routes/home/home';
import UserPage from './routes/UserPage/userpage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/react-popper/dist/index.umd.js';
import '../node_modules/popper.js';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

      <div className="App">  
        <Route exact path="/" component={Home}  ></Route>
        <Route exact path="/userpage" component={UserPage}></Route>
    
      </div>
   
    </BrowserRouter>
  

  );
}

export default App;
