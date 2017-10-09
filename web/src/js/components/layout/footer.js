import React from 'react';
import { Component } from 'react';

//import { Grid, Row, Col } from 'react-flexbox-grid';

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
      <footer style={style} target="_black" title="Github Repository">
        <h5 style={{ color: 'rgba(255, 255, 255, 0.8)', paddingLeft: '24px' }}>
          <span>Developed by Michael Astrauckas under MIT License</span>
          <a
            className="github_icon"
            target="_blank"
            rel="noopener noreferrer"
            title="Github Repository"
            href="https://github.com/mastrauckas/mortgage-calculator"
          />
        </h5>
      </footer>
    );
  }
}
