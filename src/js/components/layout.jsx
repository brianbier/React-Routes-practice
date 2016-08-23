import React from 'react';
import styles from '../../css/main.css';
import Header from './header';
import Footer from './footer';
import {Link} from 'react-router';

class Layout extends React.Component {
  render() {
    return (
      <div>
      <Header />
        {this.props.children}
      <Footer />
      </div>
    )
  }
}

export default Layout;
