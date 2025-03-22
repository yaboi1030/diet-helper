import requests

api_key = "YOUR_API_KEY"
url = f"https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&api_key={api_key}"

response = requests.get(url)
data = response.json()

print(data)
