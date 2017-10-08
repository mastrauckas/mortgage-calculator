using System;
using Xunit;
using Maa.MortgageCalculator.Models;
using System.Linq;
using System.Collections.Generic;

namespace Maa.MortgageCalculator.Models.Tests
{
    public static class InstallmentsTest
    {
        public static void CorrectNumberOfInstallments(IEnumerable<Installment> installments)
        {
            Assert.Equal(10, installments.Count());
        }

        public static void CorrectInstallments(IEnumerable<Installment> installments,
                                                DateTime startDate, double payment)
        {
            var installmentNumber = 1;
            foreach (var installment in installments)
            {
                Assert.Equal(installmentNumber++, installment.InstallmentNumber);
                Assert.Equal(payment, installment.Payment);
                Assert.Equal(startDate.AddMonths(installment.InstallmentNumber - 1), installment.PaymentDate);

                if (installment.InstallmentNumber == 1)
                {
                    Assert.Equal(1036.06, installment.InterestAmountPaid);
                    Assert.Equal(39384.29, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 2)
                {
                    Assert.Equal(933.66, installment.InterestAmountPaid);
                    Assert.Equal(39486.69, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 3)
                {
                    Assert.Equal(830.99, installment.InterestAmountPaid);
                    Assert.Equal(39589.36, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 4)
                {
                    Assert.Equal(728.06, installment.InterestAmountPaid);
                    Assert.Equal(39692.29, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 5)
                {
                    Assert.Equal(624.86, installment.InterestAmountPaid);
                    Assert.Equal(39795.49, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 6)
                {
                    Assert.Equal(521.39, installment.InterestAmountPaid);
                    Assert.Equal(39898.96, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 7)
                {
                    Assert.Equal(417.65, installment.InterestAmountPaid);
                    Assert.Equal(40002.70, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 8)
                {
                    Assert.Equal(313.65, installment.InterestAmountPaid);
                    Assert.Equal(40106.70, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 9)
                {
                    Assert.Equal(209.37, installment.InterestAmountPaid);
                    Assert.Equal(40210.98, installment.PrincipalAmountPaid);
                    Assert.Equal(0.0, installment.AmortizationErrorAmount);
                }
                else if (installment.InstallmentNumber == 10)
                {
                    Assert.Equal(104.82, installment.InterestAmountPaid);
                    Assert.Equal(40315.53, installment.PrincipalAmountPaid);
                    Assert.Equal(0.01, installment.AmortizationErrorAmount);
                }
            }
        }

        public static void CorrectInstallment(Installment actualInstallment,
                                                int expectedInstallmentNumber,
                                                double expectedPayment,
                                                DateTime expectedPaymentDate)
        {
            Assert.Equal(expectedInstallmentNumber, actualInstallment.InstallmentNumber);
            Assert.Equal(expectedPayment, actualInstallment.Payment);
            Assert.Equal(expectedPaymentDate, actualInstallment.PaymentDate);
            Assert.Equal(480.33, actualInstallment.InterestAmountPaid);
            Assert.Equal(231.50, actualInstallment.PrincipalAmountPaid);
            Assert.Equal(0.0, actualInstallment.AmortizationErrorAmount);
        }

        public static void CorrectPrincipal(double actualPrincipal)
        {
            Assert.Equal(231.50, actualPrincipal);
        }

        public static void CorrectInterest(double actualInterest)
        {
            Assert.Equal(480.33, actualInterest);
        }

        public static void CorrectInstallments(int actualInstallments)
        {
            Assert.Equal(120, actualInstallments);
        }

        public static void CorrectPayment(double actualPayment)
        {
            Assert.Equal(711.83, actualPayment);
        }

        public static void PaymentTooSmall(int actualTotalPayments)
        {
            Assert.Equal(-1, actualTotalPayments);
        }

        public static void CorrectTotalPayments(int actualPayments)
        {
            Assert.Equal(20, actualPayments);
        }

        public static void CorrectMonthlyInterestRate(double actualMonthlyInterestRate)
        {
            Assert.Equal(0.003125, actualMonthlyInterestRate);
        }
    }
}
