#!/usr/bin/env python3
from flask import Response
from app import app as mortgage_web_app
import pytest


@pytest.mark.usefixtures('client_class')
class TestEndpointExceptions:
    @pytest.fixture
    def app(self):
        mortgage_web_app.debug = True
        mortgage_web_app.response_class = Response
        return mortgage_web_app

    def test_first_principal_payment_is_zero(self, client):
        response = client.get(
            '/api/v1.0/AmortizationScheduleWithPaymentAmount?rate=3.75&' +
            'principal=100000.00&payment=312.5&startDate=1/1/2010')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert response.json['errorCode'] == '004'

        message = 'Mortgage installments would be longer than a 100 years.'
        assert response.json['errorMessage'] == message
