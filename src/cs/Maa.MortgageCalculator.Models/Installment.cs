using System;

namespace Maa.MortgageCalculator.Models
{
    public class Installment
    {
        private short _installmentNumber;
        private DateTime _paymentDate;
        private double _totalPrincipalAmount;
        private double _interestAmount;
        private double _principalAmount;
        private double _amortizationErrorAmount;

        public Installment(short installmentNumber,
                        DateTime paymentDate,
                        double totalPrincipalAmount,
                        double interestAmount,
                        double principalAmount,
                        double amortizationErrorAmount)
        {
            _installmentNumber = installmentNumber;
            _paymentDate = paymentDate;
            _totalPrincipalAmount = totalPrincipalAmount;
            _interestAmount = interestAmount;
            _principalAmount = principalAmount;
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

        public double TotalPrincipalAmount
        {
            get { return _totalPrincipalAmount; }
        }

        public double InterestAmount
        {
            get { return Math.Round(_interestAmount, 2, MidpointRounding.AwayFromZero); }
        }

        public double PrincipalAmount
        {
            get { return Math.Round(_principalAmount, 2, MidpointRounding.AwayFromZero); }
        }

        public double Payment
        {
            get { return Math.Round(InterestAmount + PrincipalAmount, 2, MidpointRounding.AwayFromZero); }
        }

        public double AmortizationErrorAmount
        {
            get { return Math.Round(_amortizationErrorAmount, 2, MidpointRounding.AwayFromZero); }
        }
    }
}
