import React from 'react';
//import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Login from './component/Login';
import PreHome from './component/PreHome';
import Home from './component/Home';
import Add from './component/Add';
import Table from './component/Table';
import Edit from './component/Edit'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Route exact path="/" render={props => <Login {...props}/>}/>
          <Route  path="/PreHome" render={props => <PreHome {...props}/>}/>
          <Route  path="/Home" render={props => <Home {...props}/>}/>
          <Route  path="/Add" render={props => <Add {...props}/>}/>
          <Route  path="/Table" render={props => <Table {...props}/>}/>
          <Route  path="/edit/:id" render={props=> < Edit {...props}/>} />
        </BrowserRouter>
    </div>
  );
}
export default App;