from flask import Flask, request, render_template
import json
app = Flask(__name__)

from noodle.models import User, Event, Time, Check, db

@app.route('/')
def index():
    return render_template('index.html')
'''
@app.route('/user', methods=['POST'])
def create_user():
    try:
        new_user = User(request.form['username'], request.form['email'])
        db.session.add(new_user)
        db.session.commit()
        return 'OK!'
    except:
        return ':('
'''
@app.route('/user', methods=['GET'])
def list_users():
    return '\n'.join(map(str, User.query.all()))

@app.route('/events', methods=['GET'])
def events():
    return render_template('events.html')

@app.route('/start', methods=['GET'])
def start():
    return render_template('start.html')

@app.route('/events', methods=['POST'])
def events_in_json():
    return ':)'

@app.route('/event', methods=['GET'])
def event():
    return render_template('event.html')

@app.route('/create', methods=['POST'])
def create_event():
    data_dict = request.form.to_dict()
    datetimes = data_dict["datetimes"].split(",")
    email = data_dict["email"]
    title = data_dict["title"]
    name = data_dict["name"]
    try:
        new_user = User(name, email)
        db.session.add(new_user)
        new_event = Event(title)
        db.session.add(new_event)
        for time in datetimes:
            new_times = Time(time)
            db.session.add(new_times)
        db.session.commit()
    except:
        return ':('
    return ':)'
