import {combineReducers} from 'redux';
import auth_reducer from './AuthReducer';
import stored_data from './Reducer';

const allReducers = combineReducers ({
    auth:auth_reducer,
    comments:stored_data,
})
export default allReducers 