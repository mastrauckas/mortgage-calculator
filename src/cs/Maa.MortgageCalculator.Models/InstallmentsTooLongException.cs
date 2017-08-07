using System;

namespace Maa.MortgageCalculator.Models
{
    public class InstallmentsTooLongException : Exception
    {
        public InstallmentsTooLongException(string message) : base(message) { }
        public InstallmentsTooLongException(string message, Exception innerException) : base(message, innerException) { }
    }
}
