import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import NotFound from './components/NotFound';

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
    </Switch>
</Router>, document.getElementById('root'));