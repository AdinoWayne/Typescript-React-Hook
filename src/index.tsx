import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import {Router} from "react-router-dom";
import "../src/Style/style.css"
import history from"./utility/history"


ReactDOM.render(
<React.StrictMode>
    <Router history={history}>
        <App/>
    </Router>
</React.StrictMode>, document.getElementById('root'));

