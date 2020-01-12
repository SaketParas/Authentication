import React, { Component } from 'react'
import {connect} from 'react-redux'
import { isUserAuth } from './../Redux/Action';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }
    input_change = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    input_submit = (e) => {
        e.preventDefault()
        // console.log(this.state);
        let payload = {
            username:this.state.username,
            password:this.state.password
        }
       
        this.props.login(payload)
    }
    render() {
        console.log(this.props.isAuth);
        const {isAuth} = this.props
        
        return isAuth?
        (
            <Redirect to='/PreHome' />
        ):
        
        ( 
            <React.Fragment>
                <div class="card mt-5">
                    <div class="card-header">
                    <h5 class="text-primary">Login</h5>
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.input_submit}>
                            <div class="row">
                                <div class="col">
                                    User Name :<input type="text" class="form-control" placeholder="User Name" name="username" value={this.state.username} onChange={this.input_change}/>
                                </div>
                                <div class="col">
                                    Password :<input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.input_change}/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline-danger mt-3">Login</button>
                        </form>
                    </div>
                    <div class="card-footer text-muted">
                       
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuth:state.auth.isAuth
})
const mapDispatchToProps = dispatch => ({
    login:payload => dispatch(isUserAuth(payload))
})
export default connect (mapStateToProps, mapDispatchToProps) (Login)