import React from 'react';
import { Component } from 'react';

export default class Footer extends Component {
  render() {
    const style = {
      backgroundColor: '#38464D',
      verticalAlign: 'center',
      marginTop: '25px',
      height: '80px',
      display: 'flex',
      alignItems: 'center',
    };

    return (
      <footer style={style}>
        <h5 style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '24px' }}>
          <span>Developed by Michael Astrauckas</span>
        </h5>
      </footer>
    );
  }
}
