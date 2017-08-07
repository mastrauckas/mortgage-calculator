using System;
using Xunit;
using Maa.MortgageCalculator.Models;
using System.Linq;
using System.Collections.Generic;

namespace Maa.MortgageCalculator.Common.Tests
{
    public static class MortgageLoanValidationMissingParametersTest
    {
        public static void MissingAll_With_Null(IEnumerable<MortgageValidationError> validationErrors)
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

        public static void MissingAll_With_Whitespace(IEnumerable<MortgageValidationError> validationErrors)
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

        public static void MissingAll_With_Empty(IEnumerable<MortgageValidationError> validationErrors)
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

        public static void MissingStartDate_With_Null(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' missing from request.");
        }

        public static void MissingStartDate_With_Whitespace(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' missing from request.");
        }

        public static void MissingStartDate_With_Empty(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' missing from request.");
        }

        public static void MissingPrincipal_With_Null(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' missing from request.");
        }

        public static void MissingPrincipal_With_Whitespace(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' missing from request.");
        }

        public static void MissingPrincipal_With_Empty(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' missing from request.");
        }

        public static void MissingRate_With_Null(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' missing from request.");
        }

        public static void MissingRate_With_Whitespace(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' missing from request.");
        }

        public static void MissingRate_With_Empty(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' missing from request.");
        }

        public static void MissingPayment_With_Null(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "payment");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'payment' missing from request.");
        }

        public static void MissingPayment_With_Whitespace(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "payment");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'payment' missing from request.");
        }

        public static void MissingPayment_With_Empty(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());
            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "payment");
            Assert.Equal(validationError.ErrorCode, "001");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'payment' missing from request.");
        }
    }
}
