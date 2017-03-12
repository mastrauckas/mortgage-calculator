import React from 'react';
import { Component } from 'react';

export default class Navbar extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <header>
            <a href="#" className="brand-logo center">{this.props.title}</a>
          </header>
        </div>
      </nav>
    );
  }
}
