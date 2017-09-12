using System;
using Xunit;
using Maa.MortgageCalculator.Models;
using System.Linq;
using System.Collections.Generic;

namespace Maa.MortgageCalculator.Common.Tests
{
    public static class MortgageLoanValidationMissingParametersTest
    {
        public static void MissingAllWithPayment(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(4, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' missing from request.");

            validationError = validationErrors.ElementAt(1);
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' missing from request.");

            validationError = validationErrors.ElementAt(2);
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' missing from request.");

            validationError = validationErrors.ElementAt(3);
            Assert.Equal(validationError.Parameter, "payment");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'payment' missing from request.");
        }

        public static void MissingAllWithInstallments(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(4, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' missing from request.");

            validationError = validationErrors.ElementAt(1);
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' missing from request.");

            validationError = validationErrors.ElementAt(2);
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' missing from request.");

            validationError = validationErrors.ElementAt(3);
            Assert.Equal(validationError.Parameter, "installments");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'installments' missing from request.");
        }

        public static void MissingStartDate(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' missing from request.");
        }

        public static void MissingPrincipal(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' missing from request.");
        }

        public static void MissingRate(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' missing from request.");
        }

        public static void MissingPayment(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "payment");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'payment' missing from request.");
        }

        public static void MissingInstallments(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "installments");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'installments' missing from request.");
        }
    }
}
