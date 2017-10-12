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
    
    def test_login(self):
        response = requests.get('http://localhost:8000/login')
        self.assertEqual(response.status_code, 200)


if __name__ == "__main__":
    unittest.main()