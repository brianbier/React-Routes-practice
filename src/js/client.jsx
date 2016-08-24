// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import Layout from './components/layout';
import {Router, Route, IndexRoute,hashHistory} from 'react-router';
import Featured from './pages/featured';
import Contact from './pages/contact';
import Archives from './pages/archives';

render(
  <Router history={hashHistory}>
    <Router path="/" component={Layout}>
    <IndexRoute component={Featured}></IndexRoute>
    <Router path="featured" component={Featured}></Router>
    <Router path="contact" component={Contact}></Router>
    {/* arhives(/:articles) makes it optional to pass a param. if you need to pass a param you remove the () */}
    {/* to view the params on the archives page you go to this.props.params */}
    <Router path="archives(/:articles)" component={Archives}></Router>
    </Router>
  </Router>,
  document.querySelector("#app"));
