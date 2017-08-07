using System.Collections.Generic;

namespace Maa.MortgageCalculator.Models
{
    public interface IMortgageLoanValidation
    {
        IEnumerable<MortgageValidationError> GetValidationErrors(string startDate,
                                    string principal,
                                    string rate,
                                    string payment);
    }
}
