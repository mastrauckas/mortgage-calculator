using System;
using Xunit;
using System.Linq;
using Maa.MortgageCalculator.Common.Tests;

namespace Maa.MortgageCalculator.Models.Tests
{
    public class MortgageLoanValidationTest
    {
        [Fact]
        public void GetValidationErrorsForPayment_MissingAll_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment(null, null, null, null);

            MortgageLoanValidationMissingParametersTest.MissingAllWithPayment(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingAll_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment(" ", " ", " ", " ");

            MortgageLoanValidationMissingParametersTest.MissingAllWithPayment(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingAll_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("", "", "", "");
            MortgageLoanValidationMissingParametersTest.MissingAllWithPayment(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingStartDate_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment(null, "22.44", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingStartDate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingStartDate_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment(" ", "22.44", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingStartDate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingStartDate_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("", "22.44", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingStartDate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingPrincipal_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", null, "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingPrincipal_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", " ", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingPrincipal_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingRate_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", null, "33.44");

            MortgageLoanValidationMissingParametersTest.MissingRate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingRate_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", " ", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingRate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingRate_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", "", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingRate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingPayment_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", "44.55", null);

            MortgageLoanValidationMissingParametersTest.MissingPayment(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingPayment_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", "44.55", " ");

            MortgageLoanValidationMissingParametersTest.MissingPayment(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_MissingPayment_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", "44.55", "");

            MortgageLoanValidationMissingParametersTest.MissingPayment(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_AllParametersNotValidForPayment()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("invalid_parameter",
                                                                                "invalid_parameter",
                                                                                "invalid_parameter",
                                                                                "invalid_parameter");

            MortgageLoanValidationNotValidParametersTest.AllParametersNotValidForPayment(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_StartDateParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("invalid_parameter", "22.44", "44.55", "33.44");

            MortgageLoanValidationNotValidParametersTest.StartDateParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_PrincipalParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "invalid_parameter", "44.55", "33.44");

            MortgageLoanValidationNotValidParametersTest.PrincipalParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_RateParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", "invalid_parameter", "33.44");

            MortgageLoanValidationNotValidParametersTest.RateParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPayment_PaymentParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForPayment("02/27/2017", "22.44", "44.55", "invalid_parameter");

            MortgageLoanValidationNotValidParametersTest.PaymentParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingAll_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments(null, null, null, null);

            MortgageLoanValidationMissingParametersTest.MissingAllWithInstallments(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingAll_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments(" ", " ", " ", " ");
            MortgageLoanValidationMissingParametersTest.MissingAllWithInstallments(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingAll_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("", "", "", "");
            MortgageLoanValidationMissingParametersTest.MissingAllWithInstallments(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPInstallments_MissingStartDate_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments(null, "22.44", "44.55", "33");

            MortgageLoanValidationMissingParametersTest.MissingStartDate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingStartDate_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments(" ", "22.44", "44.55", "33");

            MortgageLoanValidationMissingParametersTest.MissingStartDate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingStartDate_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("", "22.44", "44.55", "33");

            MortgageLoanValidationMissingParametersTest.MissingStartDate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingPrincipal_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", null, "44.55", "33");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingPrincipal_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", " ", "44.55", "33");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingPrincipal_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "", "44.55", "33");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingRate_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", null, "33");

            MortgageLoanValidationMissingParametersTest.MissingRate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForPInstallments_MissingRate_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", " ", "33");

            MortgageLoanValidationMissingParametersTest.MissingRate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingRate_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", "", "33");

            MortgageLoanValidationMissingParametersTest.MissingRate(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingInstallments_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", "44.55", null);

            MortgageLoanValidationMissingParametersTest.MissingInstallments(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingInstallments__With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", "44.55", " ");

            MortgageLoanValidationMissingParametersTest.MissingInstallments(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_MissingInstallments__With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", "44.55", "");

            MortgageLoanValidationMissingParametersTest.MissingInstallments(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_AllParametersNotValidForInstallment()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("invalid_parameter",
                                                                                "invalid_parameter",
                                                                                "invalid_parameter",
                                                                                "invalid_parameter");

            MortgageLoanValidationNotValidParametersTest.AllParametersNotValidForInstallments(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_StartDateParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("invalid_parameter", "22.44", "44.55", "33");

            MortgageLoanValidationNotValidParametersTest.StartDateParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_PrincipalParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "invalid_parameter", "44.55", "33");

            MortgageLoanValidationNotValidParametersTest.PrincipalParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_RateParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", "invalid_parameter", "33");

            MortgageLoanValidationNotValidParametersTest.RateParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrorsForInstallments_InstallmentParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrorsForInstallments("02/27/2017", "22.44", "44.55", "invalid_parameter");

            MortgageLoanValidationNotValidParametersTest.InstallmentsParametersNotValid(validationErrors);
        }
    }
}
