const LOGIN_REQUEST= "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";   

const initialState = {
    isAuth: false,
    isAuthRequestPending:false,
    isError: false,
    error:'',
    token:''
}

const auth_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN_REQUEST:
       return {
           ...state,
           isAuthRequestPending: true,
           isError:false,
           error:'',
       }

    case LOGIN_SUCCESS:
        return{
            ...state,
            isAuth:true,
            isAuthRequestPending:false,
            isError:false,
            error:'',
            token:payload,
        }
        
    case LOGIN_FAILURE:
            return{
                ...state,
                isAuth:false,
                isAuthRequestPending:false,
                isError: true,
                error:payload,
    
            }
    default:
        return state
    }
}
export default auth_reducer