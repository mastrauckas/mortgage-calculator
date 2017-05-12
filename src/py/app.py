from flask import Flask, json, render_template, Response, request
from mortgage import Mortgage
from datetime import datetime
from mortgage_payment_too_small_exception \
                                import MortgagePaymentTooSmallException


app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


# @app.route("/api/v1.0/mortgageWithPayment", methods=['GET'])
# def get_Mortgage_With_Payment():
#     return 0


@app.route("/api/v1.0/mortgageNoPayment", methods=['GET'])
def get_Mortgage_No_Payment():
    try:
        missing_Parameters = check_all_parameters_exist('payment')

        if len(missing_Parameters) > 0:
            r = json.dumps({"validationErrors": [
                parameter_Missing_To_Json(p) for p in missing_Parameters]})
            return Response(r, status=422, content_type='application/json')

        parameters_Not_Valid = {}
        parameters_Valid = {}
        check_Not_Valid_Parameters(parameters_Valid, parameters_Not_Valid,
                                   'payment')

        if(len(parameters_Not_Valid) > 0):
            r = json.dumps({"validationErrors": [parameter_Not_Valid_To_Json(
                key, value) for key, value in parameters_Not_Valid.items()]})
            return Response(r, status=422, content_type='application/json')

        total_Installments = parameters_Valid['installments']
        start_Date = parameters_Valid['startDate']
        principal = parameters_Valid['principal']
        rate = parameters_Valid['rate']
        payment = Mortgage.get_Payment_Amount(rate, total_Installments,
                                              principal)

        mortgage = Mortgage(total_Installments, start_Date, principal, rate)
        installments = mortgage.get_All_Installments(payment)
        r = json.dumps(
            {"installments": [installment_To_Json(i) for i in installments]})
        return Response(r, content_type='application/json')
    except MortgagePaymentTooSmallException as e:
        r = json.dumps(mortgage_Payment_Too_Small_To_Json(e.message))
        return Response(r, status=422, content_type='application/json')
    except MortgagePaymentTooSmallException as e:
        r = json.dumps(unhandled_Exception_To_Json('An unhandled ' +
                                                   'exception occurred.'))
        return Response(r, status=422, content_type='application/json')


def installment_To_Json(installment):
    return {
        "number": installment.installment_Number(),
        "paymentDate": installment.payment_Date().strftime("%m/%d/%Y"),
        "totalPrincipalAmount": installment.total_Principal_Amount(),
        "principalAmount": installment.principal_Amount(),
        "interestAmount": installment.interest_Amount(),
        "totalPayment": installment.total_Payment(),
        "amortizationErrorAmount": installment.amortization_Error_Amount()
    }


def parameter_Missing_To_Json(missing_Parameter_Name):
    return {
        "parameter": missing_Parameter_Name,
        "errorCode": "001",
        "errorMessage": "Parameter '" + missing_Parameter_Name +
        "' missing from request."
    }


def parameter_Not_Valid_To_Json(invalid_Parameter_Name, correct_Type):
    return {
        "parameter": invalid_Parameter_Name,
        "errorCode": "002",
        "errorMessage": "Parameter '" + invalid_Parameter_Name +
        "' not the correct type.",
        "correctType": correct_Type
    }


def unhandled_Exception_To_Json(message):
    return {
        "errorCode": "003",
        "errorMessage": message
    }


def mortgage_Payment_Too_Small_To_Json(message):
    return {
        "errorCode": "004",
        "errorMessage": message
    }


def check_all_parameters_exist(ignore):
    missing_parameters = []
    if ignore != 'installments' and request.args.get('installments') is None:
        missing_parameters.append('installments')
    if ignore != 'startDate' and request.args.get('startDate') is None:
        missing_parameters.append('startDate')
    if ignore != 'principal' and request.args.get('principal') is None:
        missing_parameters.append('principal')
    if ignore != 'rate' and request.args.get('rate') is None:
        missing_parameters.append('rate')
    if ignore != 'payment' and request.args.get('payment') is None:
        missing_parameters.append('payment')

    return missing_parameters


def check_Not_Valid_Parameters(parameters_Valid, parameters_Not_Valid, ignore):
    try:
        if(ignore != 'installments'):
            parameters_Valid["installments"] = int(
                request.args.get('installments'))
    except ValueError:
        parameters_Not_Valid["installments"] = "int"

    try:
        if(ignore != 'principal'):
            parameters_Valid["principal"] = float(request.args.get('principal'))
    except ValueError:
        parameters_Not_Valid["principal"] = "float"

    try:
        if(ignore != 'rate'):
            parameters_Valid["rate"] = float(request.args.get('rate'))
    except ValueError:
        parameters_Not_Valid["rate"] = "float"

    try:
        if(ignore != 'payment'):
            parameters_Valid["payment"] = float(request.args.get('payment'))
    except ValueError:
        parameters_Not_Valid["payment"] = "float"

    try:
        if(ignore != 'startDate'):
            parameters_Valid["startDate"] = datetime.strptime(
                request.args.get('startDate'), '%m/%d/%Y')
    except ValueError:
        parameters_Not_Valid["startDate"] = "date"


if __name__ == "__main__":
    app.run()
