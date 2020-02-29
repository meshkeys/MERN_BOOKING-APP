import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    < Route path="/" component={App} />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
