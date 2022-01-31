from flask import Flask, request
from flask_cors import CORS
from urllib.parse import unquote
import sqlite3
import json
import os, threading

app = Flask(__name__)
CORS(app)

class simple_authentication:
    authenticated_users = []
    
    def reset_authentication(self):
        self.authenticated_users = []
        threading.Timer(120, self.reset_authentication).start()
    
    def is_authenticated(self, id):
        id = int(id)
        return id in self.authenticated_users
        
    def authenticate(self, id):
        self.authenticated_users.append(id)

auth = simple_authentication()
auth.reset_authentication()

@app.route('/initialize-database', methods = ['GET', 'OPTIONS'])
def initialize_database():
    try:
        os.remove('flags.db')
    except:
        pass
    sqlite3_connection = sqlite3.connect('flags.db')
    sqlite3_connection.execute('CREATE TABLE images(user_id Integer, image_path TEXT)')
    sqlite3_connection.execute('CREATE TABLE users(user_id Integer, password TEXT)')
    sqlite3_connection.execute("INSERT INTO users(user_id, password) VALUES(7, 'notPassword')")
    sqlite3_connection.execute("INSERT INTO images(user_id, image_path) VALUES(7, '/your/normal/image')")
    sqlite3_connection.commit()
    sqlite3_connection.close()
    return json.dumps({"message":"Database created successfully!"})

@app.route('/select-image', methods = ['GET', 'OPTIONS'])
def select_image():
    user_id = unquote(request.args['user_id'])
    sqlite3_connection = sqlite3.connect('flags.db')
    if auth.is_authenticated(int(user_id)):
        query = "SELECT image_path FROM images WHERE user_id=" + user_id
        image = sqlite3_connection.execute(query).fetchall()
        try:
            res = {"image": image[0]}
        except:
            res = {"image": "Invalid User ID"}
    else:
        res = {"msg": "Not authorized"}
    return json.dumps(res)

@app.route('/')
def hello():
    return "Backend is up and running!"

@app.route('/login', methods = ['GET', 'OPTIONS'])
def login():
    user_id = unquote(request.args['user_id'])
    pw = unquote(request.args['password'])
    sqlite3_connection = sqlite3.connect('flags.db')
    c_query = "SELECT * FROM users WHERE user_id=" + user_id + " AND password='" + pw + "'"
    print(c_query)
    cur = sqlite3_connection.execute(c_query)
    d = cur.fetchall()
    if len(d) > 0:
        auth.authenticate(int(user_id))
        return json.dumps({user_id : "authenticated"})
    else:
        return json.dumps({"msg" : "Incorrect username/password"})

if __name__ == '__main__':
    app.run()
