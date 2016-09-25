#!/usr/bin/env python3


class Installment:
    __installment_Number = 0
    __interest_Amount = 0
    __principal_Amount = 0
    __error_Amount = 0

    def __init__(self, installment_Number, interest_Amount, principal_Amount,
                 error_Amount):
        self.__installment_Number = installment_Number
        self.__interest_Amount = interest_Amount
        self.__principal_Amount = principal_Amount
        self.__error_Amount = error_Amount

    def installment_Number(self):
        return self.__installment_Number

    def interest_Amount(self):
        return round(self.__interest_Amount, 2)

    def principal_Amount(self):
        return round(self.__principal_Amount, 2)

    def total_Payment(self):
        return round(self.interest_Amount() + self.principal_Amount(), 2)

    def amortization_Error_Amount(self):
        return round(self.__error_Amount, 2)
