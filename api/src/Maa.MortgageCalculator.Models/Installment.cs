using System;

namespace Maa.MortgageCalculator.Models
{
    public class Installment
    {
        private short _installmentNumber;
        private DateTime _paymentDate;
        private double _currentPrincipalAmount;
        private double _interestAmountPaid;
        private double _principalAmountPaid;
        private double _amortizationErrorAmount;

        public Installment(short installmentNumber,
                        DateTime paymentDate,
                        double currentPrincipalAmount,
                        double interestAmountPaid,
                        double principalAmountPaid,
                        double amortizationErrorAmount)
        {
            _installmentNumber = installmentNumber;
            _paymentDate = paymentDate;
            _currentPrincipalAmount = currentPrincipalAmount;
            _interestAmountPaid = interestAmountPaid;
            _principalAmountPaid = principalAmountPaid;
            _amortizationErrorAmount = amortizationErrorAmount;
        }

        public short InstallmentNumber
        {
            get { return _installmentNumber; }
        }

        public DateTime PaymentDate
        {
            get { return _paymentDate; }
        }

        public double CurrentPrincipalAmount
        {
            get { return _currentPrincipalAmount; }
        }

        public double InterestAmountPaid
        {
            get { return Math.Round(_interestAmountPaid, 2, MidpointRounding.AwayFromZero); }
        }

        public double PrincipalAmountPaid
        {
            get { return Math.Round(_principalAmountPaid, 2, MidpointRounding.AwayFromZero); }
        }

        public double Payment
        {
            get { return Math.Round(InterestAmountPaid + PrincipalAmountPaid, 2, MidpointRounding.AwayFromZero); }
        }

        public double AmortizationErrorAmount
        {
            get { return Math.Round(_amortizationErrorAmount, 2, MidpointRounding.AwayFromZero); }
        }
    }
}
