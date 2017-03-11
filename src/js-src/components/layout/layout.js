import { Component } from 'react';
import React from 'react';
import Header from './header';
import Content from './content';

export default class Layout extends Component {
  render() {
    return (
      <div className='mdl-layout mdl-js-layout'>
        <Header title="Mortgage Playground" />
        <Content />
      </div>
    );
  }
}
