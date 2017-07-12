using System;
using System.Collections.Generic;

namespace Maa.MortgageCalculator.Models
{
    public static class MortgageCalculator
    {
        private static short OneHundredYarsInpayments { get { return 1200; } }

        public static IEnumerable<Installment> GetAllInstallments(MortgageLoan mortageLoan)
        {
            var installments = new List<Installment>();
            var principal = mortageLoan.Principal;
            var paymentDate = mortageLoan.StartDate;
            var totalPayments = 0.0;

            totalPayments = GetHowManyPayments(mortageLoan.Rate, mortageLoan.Payment, principal);

            if (totalPayments > OneHundredYarsInpayments || totalPayments == -1)
                throw new Exception("Mortgage installments would be longer than a 100 years.");

            short installmentNumber = 1;
            while (principal != 0)
            {
                var installment = GetInstallment(installmentNumber,
                                                    paymentDate,
                                                    principal,
                                                    mortageLoan.Payment,
                                                    mortageLoan.Rate);
                principal = installment.TotalPrincipalAmount;
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
            var p = GetPrincipalOnPayment(principal, payment, rate);
            var i = GetInterestOnPayment(principal, rate);
            if ((principal - p) < (payment - i))
                e = principal - p;

            // var pRounded = Math.Round(p, 2, MidpointRounding.AwayFromZero);
            // var principalRound = Math.Round(principal, 2, MidpointRounding.AwayFromZero);
            // var roundOne = Math.Round(principalRound - pRounded, 2, MidpointRounding.AwayFromZero);
            // var newPrincipal = roundOne - Math.Round(e, 2, MidpointRounding.AwayFromZero);

            var newPrincipal = Math.Round(
                                Math.Round(principal, 2, MidpointRounding.AwayFromZero) - Math.Round(p, 2, MidpointRounding.AwayFromZero), 2, MidpointRounding.AwayFromZero) -
                                    Math.Round(e, 2, MidpointRounding.AwayFromZero);

            return new Installment(installmentNumber, paymentDate, newPrincipal, i, p, e);
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
            var monlyInterstRate = GetMonthlyInterestRate(rate);
            return Math.Round((monlyInterstRate + (monlyInterstRate / (Math.Pow((1 + monlyInterstRate), installments) - 1))) * principal,
                2, MidpointRounding.AwayFromZero);
        }

        public static int GetHowManyPayments(double rate, double payment, double principal)
        {
            var montlyRate = GetMonthlyInterestRate(rate);
            var dividend = montlyRate / (payment / principal - montlyRate) + 1;
            var divisor = 1 + montlyRate;
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
