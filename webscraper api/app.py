from flask import Flask, jsonify
import time
app = Flask(__name__)

from selenium import webdriver
from selenium.webdriver.common.by import By

def getItemsFromStores(item):
    driver = webdriver.Chrome()
    link = "https://www.amazon.com/"
    driver.get(link)

    input = driver.find_element(by= By.ID, value = "twotabsearchtextbox")

    input.send_keys(item)

    searchButton = driver.find_element(by = By.ID, value="nav-search-submit-button")

    searchButton.click()

    fourStars = driver.find_element(by= By.CSS_SELECTOR, value=".a-icon.a-icon-star-medium.a-star-medium-4")

    fourStars.click()
    time.sleep(0.5)
    products = []
    for i in range(3, 8):
        selector = f'[data-index="{i}"]'
        item = driver.find_element(by= By.CSS_SELECTOR, value=selector)
        image_url = item.find_element(by= By.CLASS_NAME, value="s-image").get_attribute('src')
        price = item.find_element(by = By.CSS_SELECTOR, value="span.a-offscreen").get_attribute('innerText')
        product_name = item.find_element(by = By.CSS_SELECTOR, value="span.a-size-base-plus.a-color-base.a-text-normal").get_attribute('innerText')
        product_link = item.find_element(by = By.CSS_SELECTOR, value="a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal").get_attribute('href')
        products.append({"image": image_url, "price": price, "itemName": product_name, "product_link": product_link})
    driver.quit()

    return products

@app.route('/item/<string:item_name>', methods=['GET'])
def get_item(item_name):
    #try:
    items = getItemsFromStores(item_name)
    return jsonify(items)
"""    except:
        return jsonify({"error" : "Try again."}), 404"""
if __name__ == '__main__':
    app.run(debug=True, port = 8083, use_reloader=False)