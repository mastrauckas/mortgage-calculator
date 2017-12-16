import axios from 'axios';
import Sugar from 'sugar';

import dispatcher from './dispatcher';

class AmortizationScheduleActions {
  protocol = window.location.protocol;
  host = window.location.host;

  constructor() {
    Sugar.extend();
  }

  get url() {
    return `${this.protocol}//api.${this.host}/api/v1.0`;
  }

  setMortgagePrincipalAmountAction(principalAmount) {
    dispatcher.dispatch({
      type: 'SET_PRINCIPAL_AMOUNT_ACTION',
      principalAmount,
    });
  }

  setInstallmentsActions(installments) {
    dispatcher.dispatch({
      type: 'SET_INSTALLMENTS_ACTION',
      installments,
    });
  }

  setPaymentActions(payment) {
    dispatcher.dispatch({
      type: 'SET_PAYMENT_ACTION',
      payment,
    });
  }

  getAmortizationScheduleActionWithPaymentAmount(schedule) {
    dispatcher.dispatch({
      type: 'FETCH_GET_AMORTIZATION_SCHEDULE_WITH_PAYMENT_AMOUNT_ACTION',
    });

    const url = this.createUrlFromScheduleWithPaymentAmount(schedule);
    axios
      .get(url)
      .then(response => {
        const amortizationSchedule = response.data.map(installment => {
          return {
            installmentNumber: installment.installmentNumber,
            paymentDate: new Date(installment.paymentDate),
            totalPrincipalAmount: installment.currentPrincipalAmount,
            payment: installment.payment,
            interestAmount: installment.interestAmountPaid,
            principalAmount: installment.principalAmountPaid,
          };
        });

        dispatcher.dispatch({
          type: 'COMPLETE_GET_AMORTIZATION_SCHEDULE_WITH_PAYMENT_AMOUNT_ACTION',
          mortgageInformation: {
            schedule,
            amortizationSchedule,
          },
        });
      })
      .catch(error => {
        dispatcher.dispatch({
          type: 'ERROR_GET_AMORTIZATION_SCHEDULE_WITH_PAYMENT_AMOUNT_ACTION',
          errorInformation: {
            status: error.response.status,
            payload: error.response.data,
          },
        });
      });
  }

  getAmortizationScheduleActionWithTermLength(schedule) {
    dispatcher.dispatch({
      type: 'FETCH_GET_AMORTIZATION_SCHEDULE_WITH_TERM_LENGTH_ACTION',
    });

    const url = this.createUrlFromScheduleWithTermLength(schedule);
    axios
      .get(url)
      .then(response => {
        const amortizationSchedule = response.data.map(installment => {
          return {
            installmentNumber: installment.installmentNumber,
            paymentDate: new Date(installment.paymentDate),
            totalPrincipalAmount: installment.currentPrincipalAmount,
            payment: installment.payment,
            interestAmount: installment.interestAmountPaid,
            principalAmount: installment.principalAmountPaid,
          };
        });

        dispatcher.dispatch({
          type: 'COMPLETE_GET_AMORTIZATION_SCHEDULE_WITH_TERM_LENGTH_ACTION',
          mortgageInformation: {
            schedule,
            amortizationSchedule,
          },
        });
      })
      .catch(error => {
        dispatcher.dispatch({
          type: 'ERROR_GET_AMORTIZATION_SCHEDULE_WITH_TERM_LENGTH_ACTION',
          errorInformation: {
            status: error.response.status,
            payload: error.response.data,
          },
        });
      });
  }

  createUrlFromScheduleWithTermLength(schedule) {
    const url = `${this.url}/AmortizationSchedule/AmortizationScheduleWithInstallments?\
startDate=${schedule.startDate.format('%m/%d/%Y')}\
&rate=${schedule.interestRate}\
&installments=${schedule.installments}\
&principal=${schedule.principalAmount}`;

    return url;
  }

  createUrlFromScheduleWithPaymentAmount(schedule) {
    const url = `${this.url}/AmortizationSchedule/AmortizationScheduleWithPaymentAmount?\
startDate=${schedule.startDate.format('%m/%d/%Y')}\
&rate=${schedule.interestRate}\
&payment=${schedule.payment}\
&principal=${schedule.principalAmount}`;

    return url;
  }
}

const amortizationScheduleActions = new AmortizationScheduleActions();
export default amortizationScheduleActions;
