import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import promise from "redux-promise";
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promise, thunkMiddleware)(createStore);

ReactDOM.render (
        <Provider store={createStoreWithMiddleware(rootReducer)}>
            <App />
        </Provider>, document.getElementById('root')
    );
