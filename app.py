from flask import Flask,  render_template, url_for, request, session, redirect, flash, make_response
from datetime import datetime
from flask_pymongo import PyMongo
from werkzeug import secure_filename
import bcrypt, json, requests
from flask import Markup

app = Flask(__name__)

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
            if 'images' in user:
                image_profile = {}
                image_profile['pic1'] = user['images']
                return render_template('home.html', data=posts, image_profile = image_profile)
                
            return render_template('home.html', data=posts, image_profile = None)
        
        return render_template('home.html', data=None, image_profile = None)

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
        flash(request.form['username'] + ", thats not your password!")
        return redirect(url_for('login'))
    message = Markup("Sorry, the username does not exist")
    flash(message)
    return redirect(url_for('login'))

#register process
@app.route('/register', methods=['POST', 'GET'])
def register():
    error = None
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find_one({'name' : request.form['username']})
        form = request.form['confirm']

        if request.form['username'] != "":
            if form != request.form['password']:
                message = Markup('Passwords have to match!')
                flash(message)
                return redirect(url_for('register'))
            elif existing_user is None:
                hashpass = bcrypt.hashpw(request.form['password'].encode('utf-8'), bcrypt.gensalt())
                users.insert({'name':request.form['username'], 'email':request.form['email'], 'password': hashpass})
                session['username'] =  request.form['username']
                return redirect(url_for('login'))

            error = 'That username already exists!'
            return render_template('register.html', error=error)

    return render_template("register.html", error = error)

#details about MyBucketList
@app.route('/about')
def about():
    return render_template('about.html')

#function on storing items in the bucket list
@app.route('/store', methods=['POST', 'GET'])
def store():
    if request.method == 'POST':
        users = mongo.db.users
        user = users.find_one({'name': session['username']})
        calendar = request.form['calendar']
        choice = request.form['choice']
        post = (request.form['details'] + " " +choice+ " " +calendar+ ".")
        if 'items' not in user:
            user.update({'items' : []})
        if post not in user['items']:
            users.update({'name': request.form['bktName']},{ '$push': {'items': post}})
            message = Markup("Successfully updated")
            flash(message, category = 'success')
            return redirect(url_for('home'))
        else:
            message = Markup("The item is already in your bucket list!")
            flash(message, category = 'error')
            return redirect(url_for('home'))
    return 'something is wrong'

#deleting items from the bucketlist
@app.route('/delete1', methods=['POST', 'GET'])
def delete1():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][0] != 0:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][0] }})
            message = Markup("Item one has been successfully deleted")
            flash(message)
            return redirect(url_for('home'))
        
    except Exception:
        pass
    message = Markup("There is no item to delete")
    flash(message, category='error')
    return redirect(url_for('home'))

@app.route('/delete2', methods=['POST', 'GET'])
def delete2():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][1]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][1] }})
            flash("Item two has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete3', methods=['POST', 'GET'])
def delete3():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][2]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][2] }})
            flash("Item three has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete4', methods=['POST', 'GET'])
def delete4():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][3]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][3] }})
            flash("Item four has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete5', methods=['POST', 'GET'])
def delete5():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][4]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][4] }})
            flash("Item five has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete6', methods=['POST', 'GET'])
def delete6():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][5]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][5] }})
            flash("Item six has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete7', methods=['POST', 'GET'])
def delete7():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][6]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][6] }})
            flash("Item seven has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete8', methods=['POST', 'GET'])
def delete8():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][7]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][7] }})
            flash("Item eight has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete9', methods=['POST', 'GET'])
def delete9():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][8]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][8] }})
            flash("Item nine has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

@app.route('/delete10', methods=['POST', 'GET'])
def delete10():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    try:
        if user['items'][9]:
            users.update({'name': session['username']},{ '$pull': { 'items': user['items'][9] }})
            flash("Item ten has been successfully deleted")
            return redirect(url_for('home'))
        
    except Exception:
        pass
    flash("There is no item to delete", category='error')
    return redirect(url_for('home'))

#storing profile image
@app.route('/profile', methods=['POST', 'GET'])
def profile():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})
    """add an image to mongo's gridfs"""
    grid_fs = gridfs.GridFS(mongo.db)   
    # gridfs filename
    file_name = secure_filename(request.files['display'].filename)
    image_path = os.path.abspath(file_name) 
    with grid_fs.new_file(path=image_path, filename = file_name) as fp:
        fp.write(request.data)
        file_id = fp._id

    if grid_fs.find_one(file_id) is not None:
        flash('Image saved successfully')
        return redirect(url_for('home'))
    else:
        flash('Error occurred while saving file.')
        return redirect(url_for('home'))

@app.route('/profile1', methods=['POST', 'GET'])
def profile1():
    if request.method == 'POST':
        users = mongo.db.users
        user = users.find_one({'name': session['username']})
        file_name = secure_filename(request.files['display'].filename)
        image_path = os.path.abspath(file_name)
        image_profile = {}
        ALLOWED_EXTENSIONS = set(['pdf', 'png', 'jpg', 'jpeg', 'ico', 'gif'])
        if(image_path.rsplit('.',1)[1].lower()) not in ALLOWED_EXTENSIONS:
            flash('The file extension is not allowed')
            return redirect(url_for('home'))
        if 'images' not in user:
            users.update({"name": session['username']}, {"$set": {"images": image_path}})
            image_profile['pic1'] = image_path
            flash('Image has been saved successfully')
            return redirect(url_for('home',image_profile = image_profile))  
        if file_name != '':
            users.insert({"name": session['username']},{"images": image_path})
            image_profile['pic1'] = user['images']
            flash('Image updated successfully')
            return redirect(url_for('home',image_profile = image_profile)) 
        else:
            flash("No image has been selected")
            return redirect(url_for('home')) 
    return redirect(url_for('home')) 

@app.route('/image', methods=['POST', 'GET'])
def get_image():
    users = mongo.db.users
    user = users.find_one({'name': session['username']})        
    #retrieve an image from mongodb gridfs
    grid_fs = gridfs.GridFS(mongo.db)
    file_name = secure_filename(request.files['display'].filename)
    file1 = os.path.abspath(file_name)
    grid_fs_file = grid_fs.find_one({'filename': file_name})
    response = make_response(grid_fs_file.read())
    response.headers['Content-Type'] = 'application/octet-stream'
    response.headers["Content-Disposition"] = "attachment; filename={}".format(file_name)
    return response
    

#displaying forgot password page
@app.route('/forgot', methods=['POST','GET'])
def forgot():
    return render_template('forgot.html')

#retrieving password from the database
@app.route('/sendPassword', methods=['POST','GET'])
def sendPassword():
    if request.method == 'POST':
        users = mongo.db.users
        emailUser = request.form['email']
        user = users.find_one({'email': emailUser})
        if user is not None:
            emailito = user['password']
            message = Markup(emailito)
            flash('Your password is: ' + message)
            return redirect(url_for('forgot'))
        message = Markup('The email entered does not exist')
        flash(message)
        return redirect(url_for('forgot'))
    return 'something wrong'

if __name__ == '__main__':
    app.secret_key='mysecret'
    app.run(debug=True, use_reloader=True, port=8000)
	