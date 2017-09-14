using System;
using Xunit;
using Maa.MortgageCalculator.Models;
using System.Linq;
using System.Collections.Generic;

namespace Maa.MortgageCalculator.Common.Tests
{
    public static class MortgageLoanValidationNotValidParametersTest
    {
        public static void AllParametersNotValidForPayment(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(4, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' not the correct type.");
            Assert.Equal(validationError.CorrectType, "date");

            validationError = validationErrors.ElementAt(1);
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");

            validationError = validationErrors.ElementAt(2);
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");

            validationError = validationErrors.ElementAt(3);
            Assert.Equal(validationError.Parameter, "payment");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'payment' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");
        }

        public static void AllParametersNotValidForInstallments(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(4, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' not the correct type.");
            Assert.Equal(validationError.CorrectType, "date");

            validationError = validationErrors.ElementAt(1);
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");

            validationError = validationErrors.ElementAt(2);
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");

            validationError = validationErrors.ElementAt(3);
            Assert.Equal(validationError.Parameter, "installments");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'installments' not the correct type.");
            Assert.Equal(validationError.CorrectType, "integer");
        }

        public static void StartDateParametersNotValid(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "startDate");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'startDate' not the correct type.");
            Assert.Equal(validationError.CorrectType, "date");
        }

        public static void PrincipalParametersNotValid(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "principal");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'principal' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");
        }

        public static void RateParametersNotValid(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "rate");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'rate' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");
        }

        public static void PaymentParametersNotValid(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "payment");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'payment' not the correct type.");
            Assert.Equal(validationError.CorrectType, "decimal");
        }

        public static void InstallmentsParametersNotValid(IEnumerable<MortgageValidationError> validationErrors)
        {
            Assert.Equal(1, validationErrors.Count());

            var validationError = validationErrors.FirstOrDefault();
            Assert.Equal(validationError.Parameter, "installments");
            Assert.Equal(validationError.ErrorCode, "002");
            Assert.Equal(validationError.ErrorMessage, "Parameter 'installments' not the correct type.");
            Assert.Equal(validationError.CorrectType, "integer");
        }
    }
}
