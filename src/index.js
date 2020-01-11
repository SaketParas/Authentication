import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import allReducers from './Redux/AllReducer';
import thunk from 'redux-thunk';

let composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
let enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(allReducers,enhancer)
console.log(store.getState())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));