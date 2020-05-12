import React from 'react';
import Signup from './components/signup'
import Home from './routes/home/home';
import Admin from './routes/admin/admin';	
import Book from './routes/book/book';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from './routes/UserPage/userpage';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../node_modules/jquery/dist/jquery';
import '../node_modules/react-popper/dist/index.umd.js';
import '../node_modules/popper.js';
import {   useParams } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let bookId;
  return (
    <BrowserRouter>
      <div className="App">  
        <Route exact path="/" component={Home}  ></Route>
        <Route exact path="/userpage" component={UserPage}></Route>
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/books/:1" component={Book}/>
        </div>
      </BrowserRouter>
  );
  }
export default App;
