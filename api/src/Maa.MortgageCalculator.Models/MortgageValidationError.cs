namespace Maa.MortgageCalculator.Models
{
    public class MortgageValidationError
    {
        public string Parameter { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorMessage { get; set; }
        public string CorrectType { get; set; }
    }
}
