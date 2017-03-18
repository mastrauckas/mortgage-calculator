#!/usr/bin/env python3
from mortgage import Mortgage
from datetime import datetime


class TestMortgageOnStaticMethods:
    __rate = 3.75
    __total_Installments = 360
    __loan_Amount = 153705
    __payment = 711.83

    def test_get_Payment_Amount(self):
        assert Mortgage.get_Payment_Amount(self.__rate,
                                           self.__total_Installments,
                                           self.__loan_Amount) \
            == self.__payment

    def test_monthly_Interest_Rate(self):
        assert Mortgage.monthly_Interest_Rate(self.__rate) == 0.003125

    def test_total_Installments(self):
        assert Mortgage.total_Installments(30) == self.__total_Installments

    def test_principal_On_Payment(self):
        assert Mortgage.principal_On_Payment(self.__loan_Amount,
                                             self.__payment,
                                             self.__rate) == 231.50

    def test_interest_On_Payment(self):
        assert Mortgage.interest_On_Payment(self.__loan_Amount, self.__rate) \
            == 480.33

    def test_get_Installment(self):
        payment_Date = datetime.strptime('1/29/2017', '%m/%d/%Y')
        installment = Mortgage.get_Installment(1, payment_Date,
                                               self.__loan_Amount,
                                               self.__payment,
                                               self.__rate)
        assert installment.installment_Number() == 1
        assert installment.payment_Date() == \
            datetime.strptime('1/29/2017', '%m/%d/%Y')
        assert installment.interest_Amount() == 480.33
        assert installment.principal_Amount() == 231.50
        assert installment.total_Payment() == self.__payment
