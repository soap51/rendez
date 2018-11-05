import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './src/reducers'
import promise from "redux-promise-middleware";
export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
    applyMiddleware(promise() , thunk)
);
