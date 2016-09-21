/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';

require('./favicon.ico');
require('./assets/img/efp_small.jpg');
import './assets/css/animate.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './assets/sass/loading.scss';
import './assets/css/bootstrap.min.css';
import './assets/sass/style.scss';
import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';
import '../node_modules/react-bootstrap-sweetalert/lib/css/animations.css';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      <ReduxToastr
        timeOut={35000}
        newestOnTop={true}
        position="top-right" />
    </div>
  </Provider>, document.getElementById('app')
);
