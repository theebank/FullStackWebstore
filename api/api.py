import sqlite3
import json
from flask import Flask, render_template, request, redirect, jsonify, url_for

app = Flask('__name__')
Products = dict.fromkeys(['data'])

def grabconncurs():
    connection = sqlite3.connect('Website.db')
    curs= connection.cursor()
    return connection,curs

def initialize():
    connection,cursor = grabconncurs()
    cursor.execute("DROP TABLE IF EXISTS Products")
    table1 = """CREATE TABLE Products(product TEXT, productpath TEXT, price INTEGER, stock INTEGER,id TEXT) """
    cursor.execute(table1)

    cursor.execute("INSERT INTO Products VALUES ('Book','https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg',5,20,'59c33b4b-7603-4efa-9609-ce364d5faf66')")
    cursor.execute("INSERT INTO Products VALUES ('Clock','https://m.media-amazon.com/images/I/41IUwmEU64L._AC_SX466_.jpg',10,20,'da820155-2066-4d56-9849-b28c1c28910d')")

    connection.commit()
    
    cursor.execute("SELECT * FROM Products")
    results = cursor.fetchall()
    Products['data'] = []
    for i in results:
        temp = {
            'product': i[0],
            'productpath':i[1],
            'price':i[2],
            'stock':i[3]
        }
        Products['data'].append(temp)

initialize()    



    
    
    

@app.route('/api',methods=['GET'])
def api():
    return jsonify(
        data= Products['data']
        )
    
        