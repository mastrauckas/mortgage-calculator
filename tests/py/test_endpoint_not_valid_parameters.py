#!/usr/bin/env python3
from flask import Flask, Response
from app import app as mortgage_web_app
import pytest


@pytest.mark.usefixtures('client_class')
class TestEndpointMissingParameters:

    @pytest.fixture
    def app(self):
        mortgage_web_app.debug = True
        mortgage_web_app.response_class = Response
        return mortgage_web_app

    def test_not_valid_all_parameters(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=invalid_parameter&' +
            'installments=invalid_parameter&' +
            'principal=invalid_parameter&' +
            'payment=invalid_parameter')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 4

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'int'
        assert validation_error.get(
            'error_message') == \
            'Parameter \'installments\' not the correct type.'

        validation_error = response.json['validation_errors'][1]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'float'
        assert validation_error.get(
            'error_message') == 'Parameter \'principal\' not the correct type.'

        validation_error = response.json['validation_errors'][2]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'float'
        assert validation_error.get(
            'error_message') == 'Parameter \'rate\' not the correct type.'

        validation_error = response.json['validation_errors'][3]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'float'
        assert validation_error.get(
            'error_message') == 'Parameter \'payment\' not the correct type.'

    def test_not_valid_installments_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=3.12&installments=invalid_parameter&' +
            'principal=398483&payment=4040.35')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'int'
        assert validation_error.get(
            'error_message') == \
            'Parameter \'installments\' not the correct type.'

    def test_not_valid_principal_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=3.12&installments=10&' +
            'principal=invalid_parameter&payment=4040.35')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'float'
        assert validation_error.get(
            'error_message') == 'Parameter \'principal\' not the correct type.'

    def test_not_valid_rate_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=invalid_parameter&installments=10&' +
            'principal=398483&payment=4040.35')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'float'
        assert validation_error.get(
            'error_message') == 'Parameter \'rate\' not the correct type.'

    def test_not_valid_payment_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=3.12&installments=10&' +
            'principal=398483&payment=invalid_parameter')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '002'
        correct_type = validation_error.get('correct_type')
        assert correct_type == 'float'
        assert validation_error.get(
            'error_message') == 'Parameter \'payment\' not the correct type.'
