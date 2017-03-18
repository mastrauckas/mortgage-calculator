#!/usr/bin/env python3
from mortgage import Mortgage
from datetime import datetime
from py.test import raises
from mortgage_payment_too_small_exception \
                                import MortgagePaymentTooSmallException


class TestMortgageOnSmallPayment:
    __rate = 3.75
    __total_Installments = 360
    __startDate = datetime.strptime('1/1/2010', '%m/%d/%Y')
    __loan_Amount = 100000.00

    def test_first_principal_payment_is_zero(self):
        with raises(MortgagePaymentTooSmallException) as e:
            mortgage = Mortgage(self.__total_Installments, self.__startDate,
                                self.__loan_Amount, self.__rate)
            mortgage.get_All_Installments(312.5)

        message = 'Mortgage installments would be longer than a 100 years.'

        assert e.value.message == message
