from flask import Flask, request
from flask_cors import CORS
# from flask_login import LoginManager, UserMixin
from urllib.parse import unquote
import sqlite3
import json
import os

# class User(UserMixin):
#     def is_authenticated(self):
#         return True
#     def is_active(self):
#         return True
#     def get_id(self):
#         return chr(1)

app = Flask(__name__)
CORS(app)
# login_manager = LoginManager()
# login_manager.init_app(app)

# @login_manager.user_loader
# def load_user(user_id):
#     return User()

@app.route('/initialize-database', methods = ['GET', 'OPTIONS'])
def initialize_database():
    try:
        os.remove('flags.db')
    except:
        pass
    sqlite3_connection = sqlite3.connect('flags.db')
    sqlite3_connection.execute('CREATE TABLE images(user_id Integer, image_path TEXT)')
    sqlite3_connection.close()
    return json.dumps({"message":"Database created successfully!"})

@app.route('/select-image', methods = ['GET', 'OPTIONS'])
def select_image():
    user_id = unquote(request.args['user_id'])
    sqlite3_connection = sqlite3.connect('flags.db')
    query = "SELECT image_path FROM images WHERE user_id=" + user_id + ""
    image = sqlite3_connection.execute(query).fetchall()
    try:
        res = {"image": image[0]}
    except:
        res = {"image": "Invalid User ID"}
    return json.dumps(res)

@app.route('/')
def hello():
    return "Backend is up and running!"

if __name__ == '__main__':
    app.run()
