using System;
using Xunit;
using Maa.MortgageCalculator.Endpoints.Controllers;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Maa.MortgageCalculator.Models;
using Maa.MortgageCalculator.Models.Tests;

namespace Maa.MortgageCalculator.Endpoints.Tests
{
    public class AmortizationScheduleWithInstallmentsControllerTest
    {
        IActionResult _okActionResult;
        private DateTime _okStartDate = DateTime.Parse("1/1/2010");
        private double _okPrincipal = 398483;
        private double _okInterest = 3.12;
        private double _okPayment = 40420.35;
        private short installments = 10;

        public AmortizationScheduleWithInstallmentsControllerTest()
        {
            _okActionResult = GetResult(_okStartDate, _okPrincipal, _okInterest, installments);
        }

        [Fact]
        public void GetAllInstallmentsTest_CheckOkObject()
        {
            Assert.IsType<OkObjectResult>(_okActionResult);
        }

        [Fact]
        public void GetAllInstallmentsTest_CheckOkStatusCode()
        {
            var okObjectResult = _okActionResult as OkObjectResult;
            Assert.Equal(200, okObjectResult.StatusCode);
        }

        [Fact]
        public void GetAllInstallmentsTest_CorrectInstance()
        {
            var okObjectResult = _okActionResult as OkObjectResult;
            Assert.IsAssignableFrom<IEnumerable<Installment>>(okObjectResult.Value);
        }

        [Fact]
        public void GetAllInstallmentsTest_CorrectNumberOfInstallments()
        {
            var okObjectResult = _okActionResult as OkObjectResult;
            var installments = okObjectResult.Value as IEnumerable<Installment>;
            InstallmentsTest.CorrectNumberOfInstallments(installments);
        }

        [Fact]
        public void GetAllInstallmentsTest_CorrectInstallment()
        {
            var okObjectResult = _okActionResult as OkObjectResult;
            var installments = okObjectResult.Value as IEnumerable<Installment>;
            InstallmentsTest.CorrectInstallments(installments, _okStartDate, _okPayment);
        }

        private static IActionResult GetResult(DateTime startDate, double principal, double interest, short installments)
        {
            var endpoint = new AmortizationScheduleController();
            return endpoint.GetAmortizationScheduleWithInstallments(startDate.ToString(),
                                                                    principal.ToString(),
                                                                    interest.ToString(),
                                                                    installments.ToString());
        }

    }
}
