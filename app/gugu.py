from flask import Flask, render_template, url_for, request, session, redirect
from flask.ext.pymongo import PyMongo
import bcrypt

app = Flask(__name__)

#app.config['MONGO_DBNAME'] = 'bktlist'
#app.config['MONGO_URI'] = 'mongodb://kihara:kihara@ds151752.mlab.com:51752/bktlist'

mongo = PyMongo(app)

#index page
@app.route('/')
def index():
    return render_template('index.html')

#display login form
@app.route('/login')
def login():        
    return render_template('login.html')

@app.route('/home')
def home():
    return render_template('home.html')
    if ('username' in session):
        return render_template('home.html')

    return redirect(url_for('login'))

#login process
@app.route('/login1', methods=['GET', 'POST'])
def login1():
    users = mongo.db.users
    login_user = users.find_one({'name': request.form['username']})
    
    if login_user:
        if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password']) == login_user['password']:
            session['username'] = request.form['username']
            return redirect(url_for('home'))

    return 'Invalid username or password'

#register process
@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name' : request.form['username']})

        if request.form['username'] != "":
            if existing_user is None:
                hashpass = bcrypt.hashpw(request.form['pass'].encode('utf-8'), bcrypt.gensalt())
                users.insert({'name':request.form['username'], 'email':request.form['email'], 'password': hashpass})
                session['username'] =  request.form['username']
                return redirect(url_for('login'))

            return 'That username already exists!'

    return render_template("register.html")

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/store', methods=['POST', 'GET'])
def store():
    users = mongo.db.users
    existing_user = users.find_one({'name' : request.form['username']})
    users.insert({'items':request.form['details']})
    return redirect(url_for('home'))    

if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True)