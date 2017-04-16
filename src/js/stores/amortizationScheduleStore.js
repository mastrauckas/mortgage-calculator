import { EventEmitter } from 'events';
import dispatcher from '../actions/dispatcher';

class AmortizationScheduleStore extends EventEmitter {

  mortgageInformation = {}

  getAmortizationScheduleData() {
    return this.mortgageInformation;
  }

  getAmortizationScheduleInformation(mortgageInformation) {
    this.mortgageInformation = mortgageInformation;
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'COMPLETE_GET_AMORTIZATION_SCHEDULE_ACTION': {
        this.getAmortizationScheduleInformation(action.mortgageInformation);
        break;
      }
      case 'SET_PRINCIPAL_AMOUNT_ACTION': {
        this.futureSchedule.principalAmount = action.principalAmount;
        break;
      }
      case 'SET_INSTALLMENTS_ACTION': {
        this.futureSchedule.installments = action.installments;
        break;
      }
      case 'SET_PAYMENT_ACTION': {
        this.futureSchedule.installments = action.installments;
        break;
      }
    }
  }
}

const amortizationScheduleStore = new AmortizationScheduleStore();
export default amortizationScheduleStore;

dispatcher.register(amortizationScheduleStore.handleActions.bind(amortizationScheduleStore));
