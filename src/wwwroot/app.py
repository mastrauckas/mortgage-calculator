from flask import Flask, jsonify, render_template
from mortgage import Mortgage


app = Flask(__name__)


@app.route("/")
def index():
    return render_template('main.html')


@app.route("/api/v1.0/mortgage", methods=['GET'])
def get_mortgage():
    mortgage = Mortgage(360, 153705, 3.75)
    installments = mortgage.get_All_Installments(711.83)
    return jsonify({'installments': installments.toJSON()})


if __name__ == "__main__":
    app.run()
