import { Component } from 'react';
import React from 'react';
import Navbar from './navbar';
import Content from './content';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar title="Mortgage Playground" />
        <Content />
      </div>
    );
  }
}
