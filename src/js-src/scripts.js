import React from 'react';
import ReactDOM from 'react-dom';
import AmortizationCalculator from './components/amortizationCalculator';
import AmartizationSchedule   from './components/amortizationSchedule';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <AmortizationCalculator />
        <AmartizationSchedule />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
