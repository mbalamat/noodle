from noodle.app import app
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User {id=%d,username=%r}>' % (self.id, self.username)


class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    created_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __init__(self, title):
        self.title = title
        self.created_at = datetime.utcnow()

    def __repr__(self):
        return '<Event {id=%d,title=%r}>' % (self.id, self.title)

class Time(db.Model):
    __tablename__ = 'times'
    id = db.Column(db.Integer, primary_key=True)
    time = db.Column(db.DateTime)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))

    def __init__(self, time):
        self.time = time

    def __repr__(self):
        return '<Time {id=%d,time=%r}>' % (self.id, self.time)

class Check(db.Model):
    __tablename__ = 'checks'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    time_id = db.Column(db.Integer, db.ForeignKey('times.id'))

    def __repr__(self):
        return '<Check {id=%d}>' % self.id
