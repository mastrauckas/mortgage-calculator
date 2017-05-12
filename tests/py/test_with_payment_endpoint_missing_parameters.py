#!/usr/bin/env python3
from flask import Response
from app import app as mortgage_web_app
import pytest


@pytest.mark.usefixtures('client_class')
class TestWithPaymentEndpointMissingParameters:

    @pytest.fixture
    def app(self):
        mortgage_web_app.debug = True
        mortgage_web_app.response_class = Response
        return mortgage_web_app

    def test_missing_all_parameters(self, client):
        response = client.get('/api/v1.0/mortgageWithPayment')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 4

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'startDate'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'

        validation_error = response.json['validationErrors'][1]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'principal'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'

        validation_error = response.json['validationErrors'][2]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'rate'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'

        validation_error = response.json['validationErrors'][3]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'payment'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_installments_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageWithPayment?rate=3.12&' +
            'principal=398483&startDate=02/27/2017')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'payment'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_principal_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageWithPayment?rate=3.12&payment=4040.35' +
            '&startDate=02/27/2017')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'principal'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_rate_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageWithPayment?payment=4040.35&' +
            'principal=398483&startDate=02/27/2017')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'rate'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_start_date_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageWithPayment?rate=3.12' +
            '&principal=398483&payment=4040.35')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'startDate'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'' + \
            parameter + '\' missing from request.'
