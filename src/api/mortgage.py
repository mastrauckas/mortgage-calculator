#!/usr/bin/env python3
from installment import Installment


class Mortgage:
    __installments = 0
    __loan_Amount = 0
    __current_Principal = 0
    __rate = 0.0

    def __init__(self, installments, loan_Amount, rate):
        self.__installments = installments
        self.__loan_Amount = loan_Amount
        self.__current_Principal = loan_Amount
        self.__rate = rate

    def get_All_Installments(self, payment):
        installments = []
        loan_Amount = self.__loan_Amount

        count = 1
        while loan_Amount != 0:
            installment = Mortgage.get_Installment(count, loan_Amount, payment,
                                                   self.__rate)

            loan_Amount = \
                round(loan_Amount-installment.principal_Amount(), 2) - \
                installment.amortization_Error_Amount()
            count += 1
            installments.append(installment)

        return installments

    @staticmethod
    def get_Installment(installment_Number, principal, payment, rate):
        e = 0
        p = Mortgage.principal_On_Payment(principal, payment,
                                          rate)
        i = Mortgage.interest_On_Payment(principal, rate)
        if((principal - p) < (payment - i)):
            e = principal - p

        installment = Installment(installment_Number, i, p, e)
        return installment

    @staticmethod
    def principal_On_Payment(loan_Amount, payment, rate):
        return \
            round(payment-(loan_Amount*Mortgage.monthly_Interest_Rate(rate)),
                  2)

    @staticmethod
    def interest_On_Payment(loan_Amount, rate):
        return round(loan_Amount*Mortgage.monthly_Interest_Rate(rate), 2)

    @staticmethod
    def monthly_Interest_Rate(rate):
        return round(rate/100/12, 6)

    @staticmethod
    def total_Installments(years):
        return years*12

    @staticmethod
    def get_Payment_Amount(rate, installments, loan_Amount):
        monthly_Rate = Mortgage.monthly_Interest_Rate(rate)
        return round((monthly_Rate+(monthly_Rate /
                     (((1+monthly_Rate)**installments)-1)))*loan_Amount, 2)
