from flask import Flask, jsonify, json, render_template, Response, request
from mortgage import Mortgage


app = Flask(__name__)


@app.route("/api/ping")
def index():
    return render_template('main.html')


@app.route("/api/v1.0/mortgage", methods=['GET'])
def get_mortgage():
    missing_Parameters = check_all_parameters_exist()

    if len(missing_Parameters) > 0:
        r = json.dumps({ "validation_errors": [parameter_Missing_To_Json(p) for p in missing_Parameters]  })
        return Response(r, status=422, content_type='application/json')

    parameters_Not_Valid = {}
    parameters_Valid = {}
    check_Not_Valid_Parameters(parameters_Valid, parameters_Not_Valid)
    if(len(parameters_Not_Valid) > 0):
        r = json.dumps({ "validation_errors": [parameter_Not_Valid_To_Json(key, value) for key, value in parameters_Not_Valid.items()]  })
        return Response(r, status=422, content_type='application/json')

    total_Installments = parameters_Valid['installments']
    principal = parameters_Valid['principal']
    rate = parameters_Valid['rate']
    payment = parameters_Valid['payment']

    mortgage = Mortgage(total_Installments, principal, rate)
    installments = mortgage.get_All_Installments(payment)
    r = json.dumps({ "Installments": [installment_To_Json(i) for i in installments] })
    return Response(r, content_type='application/json')

def installment_To_Json(installment):
    return {
            "number": installment.installment_Number(),
            "principal_amount": installment.principal_Amount(),
            "interest_amount": installment.interest_Amount(),
            "total_payment": installment.total_Payment(),
            "amortization_error_amount": installment.amortization_Error_Amount()
            }

def parameter_Missing_To_Json(missing_Parameter_Name):
    return {
            "parameter": missing_Parameter_Name,
            "error_code": '001',
            "error_message": 'Parameter \'' + missing_Parameter_Name + '\' missing from request.'
            }

def parameter_Not_Valid_To_Json(invalid_Parameter_Name, correct_Type):
    return {
            "parameter": invalid_Parameter_Name,
            "error_code": '002',
            "error_message": 'Parameter \'' + invalid_Parameter_Name + '\' not the correct type.',
            "correct_type": correct_Type
            }

def check_all_parameters_exist():
    missing_parameters = []
    if request.args.get('installments') is None:
        missing_parameters.append('installments')
    if request.args.get('principal') is None:
        missing_parameters.append('principal')
    if request.args.get('rate') is None:
        missing_parameters.append('rate')
    if request.args.get('payment') is None:
        missing_parameters.append('payment')

    return missing_parameters

def check_Not_Valid_Parameters(parameters_Valid, parameters_Not_Valid):
    try:
        parameters_Valid["installments"] = int(request.args.get('installments'))
    except ValueError:
        parameters_Not_Valid["installments"] = "int"

    try:
        parameters_Valid["principal"] = float(request.args.get('principal'))
    except ValueError:
        parameters_Not_Valid["principal"] = "float"

    try:
        parameters_Valid["rate"] = float(request.args.get('rate'))
    except ValueError:
        parameters_Not_Valid["rate"] = "float"

    try:
        parameters_Valid["payment"] = float(request.args.get('payment'))
    except ValueError:
        parameters_Not_Valid["payment"] = "float"


if __name__ == "__main__":
    app.run()
