import requests

res = requests.get("http://127.0.0.1:5000/initialize-database")
print(res.json())