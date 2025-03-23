import requests

def get_info(barcode_id):
    url = "https://world.openfoodfacts.org/api/v0/product/" + str(barcode_id) + ".json"


    response = requests.get(url)
    return response.json()



get_info()
