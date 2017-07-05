import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import StarWars from './components/StarWarsContainer';

import './index.css';
import 'font-awesome/css/font-awesome.min.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <StarWars />
    </Provider>,
    document.getElementById('root')
);
