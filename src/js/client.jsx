// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Layout from './components/layout';
import {Router, Route, IndexRoute,hashHistory} from 'react-router';
import Featured from './pages/featured';
import Contact from './pages/contact';

render(
  <Router history={hashHistory}>
    <Router path="/" component={Layout}>
    <IndexRoute component={Featured}></IndexRoute>
    <Router path="featured" component={Featured}></Router>
    <Router path="contact" component={Contact}></Router>
    <Router path="featured" component={Featured}></Router>
    </Router>
  </Router>,
  document.querySelector("#app"));
