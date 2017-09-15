using System;

namespace Maa.MortgageCalculator.Models
{
    public class MortgageLoan
    {
        public DateTime StartDate { get; set; }
        public double Principal { get; set; }
        public double Rate { get; set; }
        public double Payment { get; set; }
    }
}
