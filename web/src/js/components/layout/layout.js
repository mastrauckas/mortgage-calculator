import { cyan500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Component } from 'react';
import React from 'react';

import Content from './content';
import Footer from './footer';
import Navbar from './navbar';

export default class Layout extends Component {
  render() {
    const theme = getMuiTheme({
      palette: {
        textColor: cyan500,
      },
      appBar: {
        margin: '0 auto',
        display: 'block',
      },
      tableHeaderColumn: {
        spacing: '0',
      },
      textField: {
        paddingLeft: '10rem',
      },
    });
    return (
      <MuiThemeProvider muiTheme={theme}>
        <div>
          <Navbar title="Mortgage Calculator" />
          <Content />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
