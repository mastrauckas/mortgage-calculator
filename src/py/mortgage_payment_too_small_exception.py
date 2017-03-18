#!/usr/bin/env python3


class MortgagePaymentTooSmallException(Exception):
    def __init__(self, message):
        self.message = message
