import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    return (
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills pull-xs-right">
              <li className="nav-item">
              <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="featured" className="nav-link" >Featured</Link>
              </li>
              <li className="nav-item">
                <Link to="contact" className="nav-link" >Contact</Link>
              </li>
            </ul>
          </nav>
          <Link to="/"  className="text-muted" >Project</Link>
        </div>
    )
  }
}

export default Header;
