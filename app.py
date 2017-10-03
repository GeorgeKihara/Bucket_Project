#!/usr/local/bin/python
from app import app
@app.route('/')
def homepage():
    the_time = datetime.now().strftime("%A, %d %b %Y %l:%M %p")

    return """
    <h1 style="text-align:center;">Welcome to EAZYTOI</h1>
    <p>It is currently {time}.</p>

    """.format(time=the_time)
if  __name__ == '__main__':
    app.secret_key='mysecret'
    app.run(debug=True, use_reloader=True, port=7000)
	