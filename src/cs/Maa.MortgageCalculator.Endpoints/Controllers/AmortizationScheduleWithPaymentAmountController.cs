using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Maa.MortgageCalculator.Models;
using System.Net.Http;

namespace Maa.MortgageCalculator.Endpoints.Controllers
{
    [Route("api/v1.0/[controller]")]
    public class AmortizationScheduleWithPaymentAmountController : Controller
    {
        [HttpGet]
        public IActionResult GetAmortizationScheduleWithTermLength(string startDate,
                                        string principal,
                                        string rate,
                                        string payment)
        {
            IActionResult error = null;
            var mortgageLoanValidation = new MortgageLoanValidation();
            try
            {
                var validationErrors = mortgageLoanValidation.GetValidationErrors(startDate,
                                                                                    principal,
                                                                                    rate,
                                                                                    payment);
                if (validationErrors.Any())
                    return StatusCode(422, validationErrors);

                var mortgageLoan = new MortgageLoan()
                {
                    StartDate = Convert.ToDateTime(startDate),
                    Principal = Convert.ToDouble(principal),
                    Rate = Convert.ToDouble(rate),
                    Payment = Convert.ToDouble(payment)
                };

                var installments = Models.MortgageCalculator.GetAllInstallments(mortgageLoan);
                return Ok(installments);
            }
            catch (InstallmentsTooLongException e)
            {
                error = StatusCode(422, mortgageLoanValidation.CreateInstallmentsTooLongError(e.Message));
            }
            catch
            {
                var message = "An unknown error has occurred with your request.";
                error = StatusCode(422, mortgageLoanValidation.CreateUnknownError(message));
            }

            return error;
        }
    }

}
