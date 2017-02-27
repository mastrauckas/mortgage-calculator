import dispatcher from './dispatcher';
import axios from 'axios';

class AmortizationScheduleActions {
  getAmortizationSchedule(schedule) {
    dispatcher.dispatch({
      type: 'FETCH_GET_AMORTIZATION_SCHEDULE_ACTION'
    });

    const url = this.createUrlFromSchedule(schedule);
    axios.get(url)
      .then(function (response) {
        const amortizationSchedule = response.data.Installments.map(installment => {
          return {
            installmentNumber: installment.number,
            installmentDate: 'my date',
            payment: installment.total_payment,
            interestAmount: installment.interest_amount,
            principalAmount: installment.principal_amount,
            balance: 30000
          };
        });

        dispatcher.dispatch({
          type: 'COMPLETE_GET_AMORTIZATION_SCHEDULE_ACTION',
          schedule: amortizationSchedule
        });
      })
      .catch(function (error) {
        console.log(error);

        dispatcher.dispatch({
          type: 'ERROR_GET_AMORTIZATION_SCHEDULE_ACTION',
          error
        });
      });
  }

  createUrlFromSchedule(schedule) {
    var url = 'http://127.0.0.1:5000/api/v1.0/mortgage?';
    url += 'rate=' + schedule.interestRate;
    url += '&installments=' + schedule.installments;
    url += '&principal=' + schedule.principalAmount;
    url += '&payment=' + schedule.payment;
    return url;
  }

  convertResponseToSchedule(response) {
    var log = true;
    const schedule = response.map(installment => {
      if (log) {
        console.log(installment);
        log = false;
      }
    });
    return schedule;
  }
}

const amortizationScheduleActions = new AmortizationScheduleActions();
export default amortizationScheduleActions;
