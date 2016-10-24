from flask import Flask, jsonify, json, render_template, Response
from mortgage import Mortgage


app = Flask(__name__)


@app.route("/")
def index():
    return render_template('main.html')


@app.route("/api/v1.0/mortgage", methods=['GET'])
def get_mortgage():
    mortgage = Mortgage(10, 398483, 3.12)
    installments = mortgage.get_All_Installments(40420.35)
    r = json.dumps({ "Installments": [toJson(i) for i in installments] })
    return Response(r, content_type='text/json; charset=utf-8')

def toJson(installment):
    return {
            "number": installment.installment_Number(),
            "principal_amount": installment.principal_Amount(),
            "interest_amount": installment.interest_Amount(),
            "total_payment": installment.total_Payment(),
            "amortization_error_amount": installment.amortization_Error_Amount()
            }

if __name__ == "__main__":
    app.run()
