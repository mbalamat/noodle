from flask import Flask, request, render_template
app = Flask(__name__)

from noodle.models import User, Event, Time, Check, db

@app.route('/user', methods=['POST'])
def create_user():
    try:
        new_user = User(request.form['username'], request.form['email'])
        db.session.add(new_user)
        db.session.commit()
        return 'OK!'
    except:
        return ':('

@app.route('/user', methods=['GET'])
def list_users():
    return '\n'.join(map(str, User.query.all()))

@app.route('/')
def index():
    return render_template('index.html')
