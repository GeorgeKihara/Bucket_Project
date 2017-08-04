from flask import Flask, render_template, url_for, request, session, redirect, flash
from flask.ext.pymongo import PyMongo
import bcrypt
import json
import requests
from flask import Markup
from app import app

#connections to the mongo database
app.config['MONGO_DBNAME'] = 'bktlist'
app.config['MONGO_URI'] = 'mongodb://kihara:kihara@ds151752.mlab.com:51752/bktlist'

mongo = PyMongo(app)


#index page
@app.route('/')
def index():
    return render_template('index.html')

#display login form
@app.route('/login')
def login():        
    return render_template('login.html')

#the bucket list home page
@app.route('/home')
def home():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    
    if ('username' in session):
        if 'items' in user:
            posts = {}
            try:
                if user['items'][0]:
                    posts['post1'] = user['items'][0]
            except Exception:
                pass

            try:
                if user['items'][1]:
                    posts['post2'] = user['items'][1]
            except Exception:
                pass

            try:
                if user['items'][2]:
                    posts['post3'] = user['items'][2]
            except Exception:
                pass
                
            try:
                if user['items'][3]:
                    posts['post4'] = user['items'][3]
            except Exception:
                pass
                
            try:
                if user['items'][4]:
                    posts['post5'] = user['items'][4]
            except Exception:
                pass
                
            try:
                if user['items'][5]:
                    posts['post6'] = user['items'][5]
            except Exception:
                pass

            try:
                if user['items'][6]:
                    posts['post7'] = user['items'][6]
            except Exception:
                pass

            try:
                if user['items'][7]:
                    posts['post8'] = user['items'][7]
            except Exception:
                pass

            try:
                if user['items'][8]:
                    posts['post9'] = user['items'][8]
            except Exception:
                pass

            try:
                if user['items'][9]:
                    posts['post10'] = user['items'][9]
            except Exception:
                pass
                
            return render_template('home.html', data=posts)
        return render_template('home.html', data=None)

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

#details about MyBucketList
@app.route('/about')
def about():
    return render_template('about.html')

#function on storing items in the bucket list
@app.route('/store', methods=['POST', 'GET'])
def store():
    if request.method == 'POST':
        users = mongo.db.users
        post = request.form['details']
        items = users.find_one({'items': post})
        if items is None:
            users.update({'name': request.form['bktName']},{ '$push': {'items': post}})

            message = Markup("Successfully updated")
            flash(message)
            return redirect(url_for('home'))
        else:
            message = Markup("The item is already in your bucket list!")
            flash(message)
            return redirect(url_for('home'))
    return 'something is wrong'


@app.route('/forgot', methods=['POST','GET'])
def forgot():
	return render_template('forgot.html')

@app.route('/profile', methods=['POST', 'GET'])
def profile():
    return render_template('profile.html')

if  __name__ == '__main__':
	app.secret_key='mysecret'
	app.run(debug=True)