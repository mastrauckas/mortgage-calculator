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
                Payment = 40420.35f
            };

            var installments = MortgageCalculator.GetAllInstallments(mortgageLoan);
            Assert.Equal(10, installments.Count());
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

            var installmentNumber = 1;
            foreach (var installment in installments)
            {
                Assert.Equal(installmentNumber++, installment.InstallmentNumber);
                Assert.Equal(payment, installment.Payment);
                Assert.Equal(startDate.AddMonths(installment.InstallmentNumber - 1), installment.PaymentDate);

                if (installment.InstallmentNumber == 1)
                {
                    Assert.Equal(1036.06, installment.InterestAmount);
                    Assert.Equal(39384.29, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 2)
                {
                    Assert.Equal(933.66, installment.InterestAmount);
                    Assert.Equal(39486.69, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 3)
                {
                    Assert.Equal(830.99, installment.InterestAmount);
                    Assert.Equal(39589.36, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 4)
                {
                    Assert.Equal(728.06, installment.InterestAmount);
                    Assert.Equal(39692.29, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 5)
                {
                    Assert.Equal(624.86, installment.InterestAmount);
                    Assert.Equal(39795.49, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 6)
                {
                    Assert.Equal(521.39, installment.InterestAmount);
                    Assert.Equal(39898.96, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 7)
                {
                    Assert.Equal(417.65, installment.InterestAmount);
                    Assert.Equal(40002.70, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 8)
                {
                    Assert.Equal(313.65, installment.InterestAmount);
                    Assert.Equal(40106.70, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 9)
                {
                    Assert.Equal(209.37, installment.InterestAmount);
                    Assert.Equal(40210.98, installment.PrincipalAmount);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 10)
                {
                    Assert.Equal(104.82, installment.InterestAmount);
                    Assert.Equal(40315.53, installment.PrincipalAmount);
                    Assert.Equal(0.01, installment.AmortizationErrorAmount);
                }
            }
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


            Assert.Equal(installmentNumber, installment.InstallmentNumber);
            Assert.Equal(payment, installment.Payment);
            Assert.Equal(paymentDate, installment.PaymentDate);
            Assert.Equal(480.33, installment.InterestAmount);
            Assert.Equal(231.50, installment.PrincipalAmount);
            Assert.Equal(0.0, installment.AmortizationErrorAmount);
        }

        [Fact]
        public void GetPrincipalOnPaymentTest_CorrectPrincipal()
        {
            var totalPrincipal = 153705;
            var rate = 3.75;
            var payment = 711.83;
            var principal = MortgageCalculator.GetPrincipalOnPayment(totalPrincipal, payment, rate);
            Assert.Equal(231.50, principal);
        }

        [Fact]
        public void GetInterestOnPaymentTest_CorrectInterest()
        {
            var principal = 153705;
            var rate = 3.75;
            var interest = MortgageCalculator.GetInterestOnPayment(principal, rate);
            Assert.Equal(480.33, interest);
        }

        [Fact]
        public void GetTotalInstallmentsTest_CorrectInstallments()
        {
            var installments = MortgageCalculator.GetTotalInstallments(10);
            Assert.Equal(120, installments);
        }

        [Fact]
        public void GetPaymentAmountTest_CorrectPayment()
        {
            var payment = MortgageCalculator.GetPaymentAmount(3.75, 360, 153705);
            Assert.Equal(711.83, payment);
        }

        [Fact]
        public void GetHowManyPaymentsTest_ToSmall()
        {
            var totalPayments = MortgageCalculator.GetHowManyPayments(3.75, 1, 1000000);
            Assert.Equal(-1, totalPayments);
        }

        [Fact]
        public void GetHowManyPaymentsTest_CorrectPayments()
        {
            var totalPayments = MortgageCalculator.GetHowManyPayments(4, 50, 1000);
            Assert.Equal(20, totalPayments);
        }

        [Fact]
        public void GetMonthlyInterestRateTest_CorrectMonlyInterestRate()
        {
            var montlyInterestRate = Math.Round(MortgageCalculator.GetMonthlyInterestRate(3.75),
                                                    6, MidpointRounding.AwayFromZero);

            Assert.Equal(0.003125, montlyInterestRate);
        }

    }
}
