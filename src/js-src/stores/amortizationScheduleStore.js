import { EventEmitter } from 'events';
import dispatcher from '../actions/dispatcher';

class AmortizationScheduleStore extends EventEmitter {

  schedule = {}

  getAmortizationScheduleData() {
    return this.schedule;
  }

  getAmortizationSchedule(schedule) {
    this.schedule = schedule;
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case 'COMPLETE_GET_AMORTIZATION_SCHEDULE_ACTION': {
        this.getAmortizationSchedule(action.schedule);
        break;
      }
    }
  }
}

const amortizationScheduleStore = new AmortizationScheduleStore();
export default amortizationScheduleStore;

dispatcher.register(amortizationScheduleStore.handleActions.bind(amortizationScheduleStore));
