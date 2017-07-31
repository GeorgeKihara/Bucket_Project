from flask import Flask
from flask.ext.mongoalchemy import MongoAlchemy

app = Flask(__name__)

app.config['MONGOALCHEMY_DATABASE'] = 'bktlist'
app.config['MONGOALCHEMY_CONNECTION_STRING'] = 'mongodb://kihara:kihara@ds151752.mlab.com:51752/bktlist'

db = MongoAlchemy(app)

class User(db.Document):
    name = db.StringField()
    password = db.StringField()
