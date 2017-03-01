#!/usr/bin/env python3
from installment import Installment
from mortgage_information import Mortgage_Information
from dateutil import relativedelta


class Mortgage:
    __installments = 0
    __start_Date = None
    __loan_Amount = 0
    __current_Principal = 0
    __rate = 0.0

    def __init__(self, installments, start_Date, loan_Amount, rate):
        self.__installments = installments
        self.__start_Date = start_Date
        self.__loan_Amount = loan_Amount
        self.__current_Principal = loan_Amount
        self.__rate = rate

    def get_All_Installments(self, payment):
        installments = []
        loan_Amount = self.__loan_Amount
        payment_Date = self.__start_Date

        count = 1
        while loan_Amount != 0:
            installment = Mortgage.get_Installment(count,
                                                   payment_Date,
                                                   loan_Amount,
                                                   payment,
                                                   self.__rate)

            count += 1
            loan_Amount = installment.total_Principal_Amount()
            payment_Date = payment_Date + relativedelta.relativedelta(months=1)
            installments.append(installment)

        return installments

    @staticmethod
    def get_Installment(installment_Number, payment_Date, principal, payment,
                        rate):
        e = 0
        p = Mortgage.principal_On_Payment(principal, payment,
                                          rate)
        i = Mortgage.interest_On_Payment(principal, rate)
        if((principal - p) < (payment - i)):
            e = principal - p

        new_Principal = 0
        new_Principal = round(round(principal, 2) -
                              round(p, 2), 2) - round(e, 2)

        installment = Installment(
            installment_Number, payment_Date, new_Principal, i, p, e)
        return installment

    def get_Mortgage_Information(self, payment):
        installments = self.get_All_Installments(payment)

        x = len(installments)
        total_Interest = 0.0
        error_Amount = 0
        for installment in installments:
            total_Interest += installment.interest_Amount()

        if x > 0:
            installment = installments[x - 1]
            total_Installments = installment.installment_Number()
            error_Amount = installment.amortization_Error_Amount()

        return Mortgage_Information(total_Installments, total_Interest,
                                    payment, error_Amount)

    @staticmethod
    def principal_On_Payment(loan_Amount, payment, rate):
        return \
            round(payment - (loan_Amount *
                             Mortgage.monthly_Interest_Rate(rate)), 2)

    @staticmethod
    def interest_On_Payment(loan_Amount, rate):
        return round(loan_Amount * Mortgage.monthly_Interest_Rate(rate), 2)

    @staticmethod
    def monthly_Interest_Rate(rate):
        return round(rate / 100 / 12, 6)

    @staticmethod
    def total_Installments(years):
        return years * 12

    @staticmethod
    def get_Payment_Amount(rate, installments, loan_Amount):
        monthly_Rate = Mortgage.monthly_Interest_Rate(rate)
        return round((monthly_Rate + (monthly_Rate /
                                      (((1 + monthly_Rate) **
                                        installments) - 1))) * loan_Amount, 2)
