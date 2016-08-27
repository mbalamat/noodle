from flask import Flask
app = Flask(__name__)

import noodle.models

@app.route('/')
def hello():
    return 'Hello !'
