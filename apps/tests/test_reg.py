import unittest
from flask import jsonify
from flask import Flask
from urllib.request import urlopen
from flask_testing import TestCase
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
    
if __name__ == "__main__":
    unittest.main()