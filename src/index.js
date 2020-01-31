import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import store from './store/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { SignUpScreen } from './screens';

const Routing = () => (
    <Router>
        <Switch>
            <Route path="/login" component={App} />
            <Route path="/register" component={SignUpScreen} />
        </Switch>
    </Router>
);

ReactDOM.render(
    <Provider store={store} >
        <Routing/>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
