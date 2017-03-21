import React from 'react';
import { Component } from 'react';
import AmortizationScheduleStore from '../../stores/amortizationScheduleStore';
window.jQuery = window.$ = require('jquery');
window.$.velocity = require('velocity-animate/velocity.js');

export default class AmortizationTabs extends Component {
  constructor() {
    super();
    this.state = {
      amortizationSchedule: [],
    };
  }

  componentWillMount() {
    AmortizationScheduleStore.on('change', this.amortizationScheduleChanged.bind(this));
  }

  amortizationScheduleChanged() {
    this.setState({
      amortizationSchedule: AmortizationScheduleStore.getAmortizationScheduleData()
    });
  }

  render() {
    return (
      <div>
        <div className='col l9'>
          <ul className='tabs tabs-fixed-width'>
            <li className='tab l3' ><a href='#test1'>Test 1</a></li>
            <li className='tab l3'><a className='active' href='#test2'>Test 2</a></li>
            <li className='tab l3'><a href='#test4'>Test 4</a></li>
          </ul>
        </div>
        <div id="test1" className="col l9">Test 1</div>
        <div id="test2" className="col l9">Test 2</div>
        <div id="test4" className="col l9">Test 4</div>
      </div>
    );
  }
}
