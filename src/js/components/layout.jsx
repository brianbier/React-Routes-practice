import React from 'react';
import styles from '../../index.css';
import Header from './header';
import Footer from './footer';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>It Works I am the layout Text!</h1>
        <p>This React project just works including <span className={styles.blueBg}>module</span> local styles.</p>
        <Footer />
      </div>
    )
  }
}

export default Layout;
