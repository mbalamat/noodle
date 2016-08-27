from flask import Flask
app = Flask(__name__)

import models

@app.route('/')
def hello():
    return 'Hello !'
