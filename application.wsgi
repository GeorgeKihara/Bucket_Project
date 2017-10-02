import os, sys

PROJECT_DIR = '/georgekihara.herokuapp.com/'

activate_this = os.path.join(PROJECT_DIR, 'bin', 'run.py')
execfile(run, dict(__file__=run))
sys.path.append(PROJECT_DIR)

from app import app