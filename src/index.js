import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {loadColorCodes} from './actions/colorCodesActions';
import {Provider} from 'react-redux';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadColorCodes());

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('app')    
);
