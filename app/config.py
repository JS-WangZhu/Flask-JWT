DB_USER = 'root'
DB_PASSWORD = ''
DB_HOST = ''
DB_DB = 'flask-pyjwt-auth'

DEBUG = True
PORT = 5000
HOST = "0.0.0.0"
SECRET_KEY = "my secert"

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = 'mysql://' + DB_USER + ':' + DB_PASSWORD + '@' + DB_HOST + '/' + DB_DB
