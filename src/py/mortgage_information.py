class Mortgage_Information:
    __total_Installments = 0
    __total_Installments = 0
    __payment = 0
    __error_Amount = 0

    def __init__(self, total_Installments, total_Interest,
                 payment, error_Amount):
        self.__total_Installments = total_Installments
        self.__total_Interest = total_Interest
        self.__payment = payment
        self.__error_Amount = error_Amount

    def total_Installments(self):
        return self.__total_Installments

    def total_Interest(self):
        return round(self.__total_Interest, 2)

    def payment(self):
        return round(self.__payment, 2)

    def amortization_Error_Amount(self):
        return round(self.__error_Amount, 2)
