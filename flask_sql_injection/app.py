from urllib import request, response
from warnings import catch_warnings
from flask import Flask, request
from flask_cors import CORS
from urllib.parse import unquote
import sqlite3
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/initialize-database', methods = ['GET', 'OPTIONS'])
def initialize_database():
    os.remove('flags.db')
    sqlite3_connection = sqlite3.connect('flags.db')
    sqlite3_connection.execute('CREATE TABLE images(user_name TEXT, image_path TEXT)')
    sqlite3_connection.close()
    return json.dumps({"message":"Database created successfully!"})

@app.route('/select-image', methods = ['GET', 'OPTIONS'])
def select_image():
    user_name = unquote(request.args['user_name'])
    sqlite3_connection = sqlite3.connect('flags.db')
    query = "SELECT image_path FROM images WHERE user_name='" + user_name + "'"
    #injection_query = ";SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%';"
    image = sqlite3_connection.executescript(query).fetchall()
    print(image)
    try:
        res = {"image": image[0]}
    except:
        res = {"image": "Invalid User Name"}
    return json.dumps(res)

@app.route('/')
def hello():
    return "Backend is up and running!"

if __name__ == '__main__':
    app.run()
