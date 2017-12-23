using System;
using System.Collections.Generic;

namespace Maa.MortgageCalculator.Models
{
    public static class MortgageCalculator
    {
        private static short OneHundredYearsOfPayments { get { return 1200; } }

        public static IEnumerable<Installment> GetAllInstallments(MortgageLoan mortageLoan)
        {
            var installments = new List<Installment>();
            var principal = mortageLoan.Principal;
            var paymentDate = mortageLoan.StartDate;
            var totalPayments = 0.0;

            totalPayments = GetHowManyPayments(mortageLoan.Rate, mortageLoan.Payment, principal);

            if (totalPayments > OneHundredYearsOfPayments || totalPayments == -1)
                throw new InstallmentsTooLongException("Mortgage installments would be longer than 100 years.");

            short installmentNumber = 1;
            while (principal != 0)
            {
                var installment = GetInstallment(installmentNumber,
                                                    paymentDate,
                                                    principal,
                                                    mortageLoan.Payment,
                                                    mortageLoan.Rate);
                principal = installment.CurrentPrincipalAmount;
                paymentDate = paymentDate.AddMonths(1);
                installmentNumber += 1;
                installments.Add(installment);
            }

            return installments;
        }

        public static Installment GetInstallment(short installmentNumber,
                                            DateTime paymentDate,
                                            double principal,
                                            double payment,
                                            double rate)
        {
            var e = 0.0;
            var principalAmountPaid = GetPrincipalOnPayment(principal, payment, rate);
            var interestAmountPaid = GetInterestOnPayment(principal, rate);
            if ((principal - principalAmountPaid) < (payment - interestAmountPaid))
                e = principal - principalAmountPaid;

            var currentPrincipal = Math.Round(Math.Round(principal, 2, MidpointRounding.AwayFromZero)
                                    - Math.Round(principalAmountPaid, 2, MidpointRounding.AwayFromZero), 2, MidpointRounding.AwayFromZero)
                                        - Math.Round(e, 2, MidpointRounding.AwayFromZero);

            return new Installment(installmentNumber, paymentDate, currentPrincipal,
                                    interestAmountPaid, principalAmountPaid, e);
        }

        public static double GetPrincipalOnPayment(double principal, double payment, double rate)
        {
            return Math.Round(payment - (principal * GetMonthlyInterestRate(rate)), 2,
                                                    MidpointRounding.AwayFromZero);
        }

        public static double GetInterestOnPayment(double principal, double rate)
        {
            return Math.Round(principal * GetMonthlyInterestRate(rate), 2,
                                                    MidpointRounding.AwayFromZero);
        }

        public static int GetTotalInstallments(int years)
        {
            return years * 12;
        }

        public static double GetPaymentAmount(double rate, short installments, double principal)
        {
            var montlylyInterstRate = GetMonthlyInterestRate(rate);
            return Math.Round((montlylyInterstRate + (montlylyInterstRate / (Math.Pow((1 + montlylyInterstRate), installments) - 1))) * principal,
                2, MidpointRounding.AwayFromZero);
        }

        public static int GetHowManyPayments(double rate, double payment, double principal)
        {
            var monthlyRate = GetMonthlyInterestRate(rate);
            var dividend = monthlyRate / (payment / principal - monthlyRate) + 1;
            var divisor = 1 + monthlyRate;
            return dividend > 0 && divisor > 0
                ? (int)(Math.Log10(dividend) / Math.Log10(divisor))
                : -1;
        }

        public static double GetMonthlyInterestRate(double rate)
        {
            return rate / 100 / 12;
        }
    }
}
