import React from 'react';
import { Component } from 'react';
//import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Footer extends Component {
  render() {
    const style = {
      backgroundColor: '#0A2A22',
      height: '80px',
    };

    return (
      <footer style={style} target='_black' title='Github Repoistory'>
        <h5 style={{ color: '#FAFAFA', paddingTop: '24px', paddingLeft: '24px' }}>
          <span>Developed by Michael Astrauckas under MIT License</span>
          <a className='.github_icon' href='https://github.com/mastrauckas/mortgage-playground'></a>
        </h5>
      </footer >
    );
  }
}
