import axios from 'axios';
const ADD_COMMENTS = 'ADD_COMMENTS';
const LOG_IN = "LOG_IN";
const LOGIN_REQUEST= "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";


const company_data = (action_data) => {
    console.log(action_data)
    return{
        type: ADD_COMMENTS,
          all :action_data 
        }
}

const loginUser = (payload) => {
    console.log(payload);
    return {
        type: LOG_IN,
            payload
    }
}
const loginRequest = () => {
    //console.log(payload);

    return {
        type: LOGIN_REQUEST,
            
    }
}
const loginSuccess = (payload) => {
    //console.log(payload);
    
    return {
        type: LOGIN_SUCCESS,
        payload

    }
}
const loginFailure = (payload) => {
    console.log(payload);
       
    return {
        type: LOGIN_FAILURE,
            payload
    }
}
const isUserAuth = (payload) => {
    return dispatch => {
        dispatch(loginRequest)
        return axios.post('https://reqres.in/api/login',{
            email:payload.username,
            password:payload.password
        })
        .then(res =>{
            console.log(res);
            
            dispatch(loginSuccess(res.data.token))
        })
        .catch(err => dispatch(loginFailure(err)))
    }
}

export {loginUser, loginRequest, loginSuccess, loginFailure, isUserAuth, company_data}