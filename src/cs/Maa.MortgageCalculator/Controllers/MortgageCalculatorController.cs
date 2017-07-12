using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Maa.MortgageCalculator.Controllers
{
    [Route("api/[controller]")]
    //@app.route("/api/v1.0/AmortizationScheduleWithPaymentAmount", methods=['GET'])
    public class AmortizationScheduleWithPaymentAmountController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get(DateTime? startDate,
                                        double? principal,
                                        double? rate,
                                        double? payment)
        {
            //Need to handle validation

            var mortgageLoan = new Models.MortgageLoan()
            {
                StartDate = startDate.Value,
                Principal = principal.Value,
                Rate = rate.Value,
                Payment = payment.Value
            };

            var installments = Models.MortgageCalculator.GetAllInstallments(mortgageLoan);

            // StartDate = startDate,
            //     Principal = 398483,
            //     Rate = 3.12,
            //     Payment = payment

            return new string[] { "value1", "value2" };
        }
    }
}
