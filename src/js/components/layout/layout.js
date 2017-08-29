import { Component } from 'react';
import React from 'react';
import Navbar from './navbar';
import Content from './content';
import Footer from './footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500 } from 'material-ui/styles/colors';

export default class Layout extends Component {

  render() {
    const theme = getMuiTheme({
      palette: {
        textColor: cyan500,
      },
      appBar: {
        margin: '0 auto',
        display: 'block'
      },
      tableHeaderColumn: {
        spacing: '0'
      },
      textField: {
        paddingLeft: '10rem'
      }
    });
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <Navbar title="Mortgage Playground" />
          <Content />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
