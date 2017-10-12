import unittest
import requests
from flask import jsonify
from flask import Flask, render_template, json
from urllib.request import urlopen
from flask_testing import *
from flask_testing import LiveServerTestCase

app = Flask(__name__)

class MyTest(TestCase):
    
    def create_app(self):
        app.config['TESTING'] = True
        return app

    @app.route("/")
    def some_json():
        return jsonify(success=True)

    def test_some_json(self):
        response = self.client.get("/")
        self.assertEquals(response.json, dict(success=True))

    def test_register(self):
        response = requests.get('http://localhost:8000/register')
    
if __name__ == "__main__":
    unittest.main()