import React from 'react';
import Signup from './components/signup'
import Home from './routes/home/home';
import Admin from './routes/admin/admin';
import {BrowserRouter,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <switch>
            <Route path="/admin" component={Admin} />
            <Route exact path="/" component={Home} />
          </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
