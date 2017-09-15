using System;
using Xunit;
using Maa.MortgageCalculator.Models;
using System.Linq;

namespace Maa.MortgageCalculator.Models.Tests
{
    public class MortgageCalculatorTest
    {
        [Fact]
        public void GetAllInstallmentsTest_CorrectNumberOfInstallments()
        {
            var mortgageLoan = new MortgageLoan()
            {
                StartDate = Convert.ToDateTime("1/1/2010"),
                Principal = 398483,
                Rate = 3.12,
                Payment = 40420.35
            };

            var installments = MortgageCalculator.GetAllInstallments(mortgageLoan);
            InstallmentsTest.CorrectNumberOfInstallments(installments);
        }

        [Fact]
        public void GetAllInstallmentsTest_CorrectInstallments()
        {
            var startDate = Convert.ToDateTime("1/1/2010");
            var payment = 40420.35;

            var mortgageLoan = new MortgageLoan()
            {
                StartDate = startDate,
                Principal = 398483,
                Rate = 3.12,
                Payment = payment
            };

            var installments = MortgageCalculator.GetAllInstallments(mortgageLoan);
            InstallmentsTest.CorrectInstallments(installments, startDate, payment);
        }

        [Fact]
        public void GetInstallmentTest_CorrectInstallment()
        {
            short installmentNumber = 1;
            var paymentDate = Convert.ToDateTime("1/29/2017");
            var principal = 153705;
            var payment = 711.83;
            var rate = 3.75;
            var installment = MortgageCalculator.GetInstallment(installmentNumber,
                                                            paymentDate,
                                                            principal,
                                                            payment,
                                                            rate);


            InstallmentsTest.CorrectInstallment(installment, installmentNumber,
                                                payment, paymentDate);
        }

        [Fact]
        public void GetPrincipalOnPaymentTest_CorrectPrincipal()
        {
            var totalPrincipal = 153705;
            var rate = 3.75;
            var payment = 711.83;
            var principal = MortgageCalculator.GetPrincipalOnPayment(totalPrincipal, payment, rate);
            InstallmentsTest.CorrectPrincipal(principal);
        }

        [Fact]
        public void GetInterestOnPaymentTest_CorrectInterest()
        {
            var principal = 153705;
            var rate = 3.75;
            var interest = MortgageCalculator.GetInterestOnPayment(principal, rate);
            InstallmentsTest.CorrectInterest(interest);
        }

        [Fact]
        public void GetTotalInstallmentsTest_CorrectInstallments()
        {
            var installments = MortgageCalculator.GetTotalInstallments(10);
            InstallmentsTest.CorrectInstallments(installments);
        }

        [Fact]
        public void GetPaymentAmountTest_CorrectPayment()
        {
            var payment = MortgageCalculator.GetPaymentAmount(3.75, 360, 153705);
            InstallmentsTest.CorrectPayment(payment);
        }

        [Fact]
        public void GetHowManyPaymentsTest_ToSmall()
        {
            var totalPayments = MortgageCalculator.GetHowManyPayments(3.75, 1, 1000000);
            InstallmentsTest.PaymentTooSmall(totalPayments);
        }

        [Fact]
        public void GetHowManyPaymentsTest_CorrectTotalPayments()
        {
            var totalPayments = MortgageCalculator.GetHowManyPayments(4, 50, 1000);
            InstallmentsTest.CorrectTotalPayments(totalPayments);
        }

        [Fact]
        public void GetMonthlyInterestRateTest_CorrectMonthlyInterestRate()
        {
            var monthlyInterestRate = Math.Round(MortgageCalculator.GetMonthlyInterestRate(3.75),
                                                    6, MidpointRounding.AwayFromZero);

            InstallmentsTest.CorrectMonthlyInterestRate(monthlyInterestRate);
        }

    }
}
