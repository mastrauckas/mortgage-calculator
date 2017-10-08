import { Component } from 'react';
import React from 'react';
import Navbar from './navbar';
import Content from './content';
import Footer from './footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500,
  cyan700,
  white,
  grey400,
  pinkA200,
  grey100,
  grey300,
  grey500,
  darkBlack,
  fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export default class Layout extends Component {
  //primary: purple500
  //secondary indigo500
  render() {
    const theme = getMuiTheme({
      palette: {
        textColor: cyan500,
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
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
          <Navbar title="Mortgage Calculator" />
          <Content />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
