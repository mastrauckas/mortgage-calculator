using System;
using Xunit;
using System.Linq;
using Maa.MortgageCalculator.Common.Tests;

namespace Maa.MortgageCalculator.Models.Tests
{
    public class MortgageLoanValidationTest
    {
        [Fact]
        public void GetValidationErrors_MissingAll_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors(null, null, null, null);

            MortgageLoanValidationMissingParametersTest.MissingAll_With_Null(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingAll_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors(" ", " ", " ", " ");

            MortgageLoanValidationMissingParametersTest.MissingAll_With_Whitespace(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingAll_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("", "", "", "");
            MortgageLoanValidationMissingParametersTest.MissingAll_With_Empty(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingStartDate_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors(null, "22.44", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingStartDate_With_Null(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingStartDate_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors(" ", "22.44", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingStartDate_With_Whitespace(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingStartDate_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("", "22.44", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingStartDate_With_Empty(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingPrincipal_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", null, "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal_With_Null(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingPrincipal_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", " ", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal_With_Whitespace(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingPrincipal_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "", "44.55", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingPrincipal_With_Empty(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingRate_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", null, "33.44");

            MortgageLoanValidationMissingParametersTest.MissingRate_With_Null(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingRate_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", " ", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingRate_With_Whitespace(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingRate_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", "", "33.44");

            MortgageLoanValidationMissingParametersTest.MissingRate_With_Empty(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingPayment_With_Null()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", "44.55", null);

            MortgageLoanValidationMissingParametersTest.MissingPayment_With_Null(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingPayment_With_Whitespace()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", "44.55", " ");

            MortgageLoanValidationMissingParametersTest.MissingPayment_With_Whitespace(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_MissingPayment_With_Empty()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", "44.55", "");

            MortgageLoanValidationMissingParametersTest.MissingPayment_With_Empty(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_AllParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("invalid_parameter",
                                                                                "invalid_parameter",
                                                                                "invalid_parameter",
                                                                                "invalid_parameter");

            MortgageLoanValidationNotValidParametersTest.AllParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_StartDateParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("invalid_parameter", "22.44", "44.55", "33.44");

            MortgageLoanValidationNotValidParametersTest.StartDateParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_PrincipalParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "invalid_parameter", "44.55", "33.44");

            MortgageLoanValidationNotValidParametersTest.PrincipalParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_RateParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", "invalid_parameter", "33.44");

            MortgageLoanValidationNotValidParametersTest.RateParametersNotValid(validationErrors);
        }

        [Fact]
        public void GetValidationErrors_PaymentParametersNotValid()
        {
            var mortgageLoanValidation = new MortgageLoanValidation();
            var validationErrors = mortgageLoanValidation.GetValidationErrors("02/27/2017", "22.44", "44.55", "invalid_parameter");

            MortgageLoanValidationNotValidParametersTest.PaymentParametersNotValid(validationErrors);
        }
    }
}
