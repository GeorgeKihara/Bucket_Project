from flask_wtf import Form
from wtforms import StringField, BooleanField, TextAreaField, FileField
from wtforms.validators import DataRequired, Length

class UploadForm(Form):
    image = FileField()