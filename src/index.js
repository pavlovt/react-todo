import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import NotFound from './components/NotFound';

import {Provider} from 'react-redux';
import * as redux from 'redux';
import actions from './actions';
import reducer from './reducer';

const store = redux.createStore(reducer);

store.dispatch({
    type: "SET_STATE",
    state: {
        todos: [ "iPhone 7 Plus", "Samsung Galaxy A5" ]
    }
});

ReactDOM.render(<Provider store={store}><Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
    </Switch>
</Router></Provider>, document.getElementById('root'));