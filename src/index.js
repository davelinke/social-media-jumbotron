import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory  } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/routes/App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

import './css/normalize.css';
import './css/helpers.css';
import './index.css';

// init routes and render to DOM function
const initialize = () => {
    // render the routing structure
    // currently we have only one path, but i like using the router anyway in case one should expand the application to multiple.
    return ReactDOM.render(
        <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>, document.getElementById('root'));
}

// initialize
initialize();
// we register a service worker so that the app is ready to become a Progressive Web App
registerServiceWorker();
