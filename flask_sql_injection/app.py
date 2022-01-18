from flask import Flask
from flask_cors import CORS
import sqlite3
import json
import os

app = Flask(__name__)
CORS(app)

@app.route('/initialize-database', methods = ['GET', 'OPTIONS'])
def initialize_database():
    os.remove('flags.db')
    conn = sqlite3.connect('flags.db')
    conn.execute('CREATE TABLE images(user_name TEXT, image_path TEXT)')
    conn.close()
    return json.dumps({"message":"Database created successfully!"})

@app.route('/')
def hello():
    return "Backend is up and running!"

if __name__ == '__main__':
    app.run()
