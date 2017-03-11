import React from 'react';
import { Component } from 'react';

export default class Header extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (
      <header className="mdl-layout__header mdl-layout__header--scroll">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.props.title}</span>
        </div>
      </header>
    );
  }
}
