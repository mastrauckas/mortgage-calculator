import dispatcher from './dispatcher';
import axios from 'axios';
import Sugar from 'sugar';

class AmortizationScheduleActions {

  constructor() {
    Sugar.extend();
  }

  setMortgagePrincipalAmountAction(principalAmount) {
    dispatcher.dispatch({
      type: 'SET_PRINCIPAL_AMOUNT_ACTION',
      principalAmount
    });
  }

  setInstallmentsActions(installments) {
    dispatcher.dispatch({
      type: 'SET_INSTALLMENTS_ACTION',
      installments
    });
  }

  setPaymentActions(payment) {
    dispatcher.dispatch({
      type: 'SET_PAYMENT_ACTION',
      payment
    });
  }

  getAmortizationScheduleAction(schedule) {
    dispatcher.dispatch({
      type: 'FETCH_GET_AMORTIZATION_SCHEDULE_ACTION'
    });

    const url = this.createUrlFromSchedule(schedule);
    axios.get(url)
      .then(response => {
        const amortizationSchedule = response.data.installments.map(installment => {
          return {
            installmentNumber: installment.number,
            paymentDate: new Date(installment.paymentDate),
            totalPrincipalAmount: installment.totalPrincipalAmount,
            payment: installment.totalPayment,
            interestAmount: installment.interestAmount,
            principalAmount: installment.principalAmount,
          };
        });

        dispatcher.dispatch({
          type: 'COMPLETE_GET_AMORTIZATION_SCHEDULE_ACTION',
          mortgageInformation: {
            schedule,
            amortizationSchedule
          }
        });
      })
      .catch(error => {
        dispatcher.dispatch({
          type: 'ERROR_GET_AMORTIZATION_SCHEDULE_ACTION',
          errorInformation: {
            status: error.response.status,
            payload: error.response.data
          }
        });
      });
  }

  createUrlFromSchedule(schedule) {
    const url = `http://127.0.0.1:5000/api/v1.0/mortgage?\
startDate=${schedule.startDate.format('%m/%d/%Y')}\
&rate=${schedule.interestRate}\
&installments=${schedule.installments}\
&principal=${schedule.principalAmount}\
&payment=${schedule.payment}`;

    return url;
  }
}

const amortizationScheduleActions = new AmortizationScheduleActions();
export default amortizationScheduleActions;
