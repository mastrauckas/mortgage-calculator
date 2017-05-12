#!/usr/bin/env python3
from dateutil import relativedelta
from mortgage import Mortgage
from datetime import datetime


class TestMortgageOnInstanceMethods:
    __rate = 3.12
    __startDate = datetime.strptime('1/1/2010', '%m/%d/%Y')
    __loan_Amount = 398483
    __payment = 40420.35

    def test_Installments(self):
        mortgage = Mortgage(self.__startDate,
                            self.__loan_Amount, self.__rate)
        installments = mortgage.get_All_Installments(self.__payment)

        assert len(installments) == 10

        for installment in installments:
            if installment.installment_Number() == 1:
                assert installment.installment_Number() == 1
                assert installment.payment_Date() == self.__startDate
                assert installment.interest_Amount() == 1036.06
                assert installment.principal_Amount() == 39384.29
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 2:
                assert installment.installment_Number() == 2
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=1)
                assert installment.interest_Amount() == 933.66
                assert installment.principal_Amount() == 39486.69
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 3:
                assert installment.installment_Number() == 3
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=2)
                assert installment.interest_Amount() == 830.99
                assert installment.principal_Amount() == 39589.36
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 4:
                assert installment.installment_Number() == 4
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=3)
                assert installment.interest_Amount() == 728.06
                assert installment.principal_Amount() == 39692.29
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 5:
                assert installment.installment_Number() == 5
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=4)
                assert installment.interest_Amount() == 624.86
                assert installment.principal_Amount() == 39795.49
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 6:
                assert installment.installment_Number() == 6
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=5)
                assert installment.interest_Amount() == 521.39
                assert installment.principal_Amount() == 39898.96
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 7:
                assert installment.installment_Number() == 7
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=6)
                assert installment.interest_Amount() == 417.65
                assert installment.principal_Amount() == 40002.70
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 8:
                assert installment.installment_Number() == 8
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=7)
                assert installment.interest_Amount() == 313.65
                assert installment.principal_Amount() == 40106.70
                assert installment.amortization_Error_Amount() == 0.00
                assert installment.total_Payment() == self.__payment
            elif installment.installment_Number() == 9:
                assert installment.installment_Number() == 9
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=8)
                assert installment.interest_Amount() == 209.37
                assert installment.principal_Amount() == 40210.98
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.00
            elif installment.installment_Number() == 10:
                assert installment.installment_Number() == 10
                assert installment.payment_Date() == self.__startDate + \
                    relativedelta.relativedelta(months=9)
                assert installment.interest_Amount() == 104.82
                assert installment.principal_Amount() == 40315.53
                assert installment.total_Payment() == self.__payment
                assert installment.amortization_Error_Amount() == 0.01
