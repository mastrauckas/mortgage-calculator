using System.Collections.Generic;

namespace Maa.MortgageCalculator.Models
{
    public interface IMortgageLoanValidation
    {
        IEnumerable<MortgageValidationError> GetValidationErrorsForPayment(string startDate,
                                    string principal,
                                    string rate,
                                    string payment);

        IEnumerable<MortgageValidationError> GetValidationErrorsForInstallments(string startDate,
                                    string principal,
                                    string rate,
                                    string installments);
    }
}
