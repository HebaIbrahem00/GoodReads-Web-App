import React from 'react';
import Home from './routes/home/home';
import Admin from './routes/admin/admin';	
import Book from './routes/book/book';
import Author from './routes/author/author';
import Authors from './routes/authors/authors';
import Category from './routes/category/Category';
import Search from './routes/search/search';
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
  return (
    <BrowserRouter>
      <div className="App">  
        <Route exact path="/" component={Home}  ></Route>
        <Route exact path="/userpage" component={UserPage}></Route>
        <Route exact path="/admin" component={Admin} />
        <Route path="/books/:id" component={Book}/>
        <Route exact path="/authors" component={Authors} />
        <Route path="/authors/:id" component={Author}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/categories" component={Category}/>
        </div>
      </BrowserRouter>
  );
  }
export default App;
