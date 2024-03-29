import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class Navbar extends Component {
  constructor() {
    super();
    injectTapEventPlugin();
  }

  static propTypes = {
    title: PropTypes.PropTypes.string.isRequired,
  };

  titleStyle = {
    margin: '0px auto',
    display: 'block',
    flex: 'none',
  };

  render() {
    return <AppBar title={this.props.title} showMenuIconButton={false} titleStyle={this.titleStyle} />;
  }
}
