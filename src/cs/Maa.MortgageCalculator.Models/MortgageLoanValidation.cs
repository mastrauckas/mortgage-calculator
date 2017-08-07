using System;
using System.Collections.Generic;

namespace Maa.MortgageCalculator.Models
{
    public class MortgageLoanValidation : IMortgageLoanValidation
    {
        public IEnumerable<MortgageValidationError> GetValidationErrors(string startDate,
                                                                            string principal,
                                                                            string rate,
                                                                            string payment)
        {
            DateTime dt;
            double db;
            var validationErrors = new List<MortgageValidationError>();
            if (string.IsNullOrWhiteSpace(startDate))
                validationErrors.Add(CreateMissingParameterError("startDate"));
            else if (!DateTime.TryParse(startDate, out dt))
                validationErrors.Add(CreateIncorrectTypeError("startDate", "date"));

            if (string.IsNullOrWhiteSpace(principal))
                validationErrors.Add(CreateMissingParameterError("principal"));
            else if (!double.TryParse(principal, out db))
                validationErrors.Add(CreateIncorrectTypeError("principal", "decimal"));

            if (string.IsNullOrWhiteSpace(rate))
                validationErrors.Add(CreateMissingParameterError("rate"));
            else if (!double.TryParse(rate, out db))
                validationErrors.Add(CreateIncorrectTypeError("rate", "decimal"));

            if (string.IsNullOrWhiteSpace(payment))
                validationErrors.Add(CreateMissingParameterError("payment"));
            else if (!double.TryParse(payment, out db))
                validationErrors.Add(CreateIncorrectTypeError("payment", "decimal"));

            return validationErrors;
        }

        private MortgageValidationError CreateMissingParameterError(string parameter)
        {
            return new MortgageValidationError()
            {
                Parameter = parameter,
                ErrorCode = "001",
                ErrorMessage = $"Parameter '{parameter}' missing from request."
            };
        }

        private MortgageValidationError CreateIncorrectTypeError(string parameter, string correctType)
        {
            return new MortgageValidationError()
            {
                Parameter = parameter,
                ErrorCode = "002",
                ErrorMessage = $"Parameter '{parameter}' not the correct type.",
                CorrectType = correctType
            };
        }

        public MortgageValidationError CreateInstallmentsTooLongError(string message)
        {
            return new MortgageValidationError()
            {
                ErrorCode = "003",
                ErrorMessage = message
            };
        }

        public MortgageValidationError CreateUnknownError(string message)
        {
            return new MortgageValidationError()
            {
                ErrorCode = "003",
                ErrorMessage = "An unknown error has occurred with your request."
            };
        }
    }
}
