import React, { Component } from 'react';

import {Route, BrowserRouter} from 'react-router-dom';
import Login from './component/Login';
import PreHome from './component/PreHome';
import Home from './component/Home';
import Add from './component/Add';
import Table from './component/Table';
import Edit from './component/Edit';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
      }
    }
    render(){
      return (
        <div className="App">
          <BrowserRouter>
              <Route exact path="/" render={props => <Login {...props}/>}/>
              <Route  path="/PreHome" render={props => <PreHome {...props}/>}/>
              <Route  path="/Home" render={props => <Home {...props}/>}/>
              <Route  path="/Add" render={props => this.props.isAuth ? <Add {...props}/> : <Redirect to="/"/>}/>
              <Route  path="/Table" render={props => <Table {...props}/>}/>
              <Route  path="/edit/:id" render={props=> < Edit {...props}/>} />
            </BrowserRouter>
        </div>
  );
  }
}
const mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps)(App) 