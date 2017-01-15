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

    def test_missing_all_parameters(self, client):
        response = client.get('/api/v1.0/mortgage')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 4

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'installments'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'

        validation_error = response.json['validation_errors'][1]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'principal'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'

        validation_error = response.json['validation_errors'][2]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'rate'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'

        validation_error = response.json['validation_errors'][3]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'payment'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_installments_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=3.12&principal=398483&payment=4040.35')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'installments'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_principal_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=3.12&installments=10&payment=4040.35')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'principal'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_rate_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?installments=10&' +
            'principal=398483&payment=4040.35')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'rate'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'

    def test_missing_payment_parameter(self, client):
        response = client.get(
            '/api/v1.0/mortgage?rate=3.12&installments=10&principal=398483')

        assert response.status_code == 422
        assert response.content_type == 'application/json'
        assert isinstance(response.json, dict)
        assert len(response.json['validation_errors']) == 1

        validation_error = response.json['validation_errors'][0]
        assert validation_error.get('error_code') == '001'
        parameter = validation_error.get('parameter')
        assert parameter == 'payment'
        assert validation_error.get(
            'error_message') == 'Parameter \'' + \
            parameter + '\' missing from request.'
