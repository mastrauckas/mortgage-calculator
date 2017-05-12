#!/usr/bin/env python3
from flask import Response
from app import app as mortgage_web_app
import pytest


@pytest.mark.usefixtures('client_class')
class TestNoPaymentEndpointMissingParameters:

    @pytest.fixture
    def app(self):
        mortgage_web_app.debug = True
        mortgage_web_app.response_class = Response
        return mortgage_web_app

    def test_not_valid_all_parameters(self, client):
        response = client.get(
            '/api/v1.0/mortgageNoPayment?rate=invalid_parameter&' +
            'installments=invalid_parameter&' +
            'principal=invalid_parameter&' +
            'payment=invalid_parameter&' +
            'startDate=invalid_parameter')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 4

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'int'
        assert validation_error.get(
            'errorMessage') == \
            'Parameter \'installments\' not the correct type.'

        validation_error = response.json['validationErrors'][1]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'float'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'principal\' not the correct type.'

        validation_error = response.json['validationErrors'][2]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'float'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'rate\' not the correct type.'

        validation_error = response.json['validationErrors'][3]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'date'
        assert validation_error.get(
            'errorMessage') == \
            'Parameter \'startDate\' not the correct type.'

    def test_not_valid_installments_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageNoPayment?rate=3.12&' +
            'installments=invalid_parameter&' +
            'principal=398483&startDate=02/27/2017')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'int'
        assert validation_error.get(
            'errorMessage') == \
            'Parameter \'installments\' not the correct type.'

    def test_not_valid_principal_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageNoPayment?rate=3.12&installments=10&' +
            'principal=invalid_parameter&startDate=02/27/2017')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'float'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'principal\' not the correct type.'

    def test_not_valid_rate_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageNoPayment?rate=invalid_parameter&' +
            'installments=10&principal=398483&startDate=02/27/2017')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'float'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'rate\' not the correct type.'

    def test_not_valid_start_date_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgageNoPayment?rate=3.12&installments=10&' +
            'principal=398483&startDate=invalid_parameter')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validationErrors']) == 1

        validation_error = response.json['validationErrors'][0]
        assert validation_error.get('errorCode') == '002'
        correct_type = validation_error.get('correctType')
        assert correct_type == 'date'
        assert validation_error.get(
            'errorMessage') == 'Parameter \'startDate\' not the correct type.'
