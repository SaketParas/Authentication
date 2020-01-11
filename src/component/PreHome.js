import React, { Component } from 'react'
import { Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';

 class PreHome extends Component {
     constructor(props) {
         super(props)
         this.state = {  
         }
     }
     
    render() {
         //Redirect
         let {isAuth} = this.props
        return  !isAuth?
        (
        <Redirect to = '/login'/>
        ): 
        (
          <React.Fragment>
              <Home />
          </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps) (PreHome)
