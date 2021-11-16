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

    cursor.execute("INSERT INTO Products VALUES ('Book','https://media.istockphoto.com/photos/blue-book-picture-id1281955543?b=1&k=20&m=1281955543&s=170667a&w=0&h=ZmwacrjQewEU3RqJLYufA-Bi7JVOI2JgcB8X0o7vPeI=',5,20,'59c33b4b-7603-4efa-9609-ce364d5faf66')")
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
print(Products['data'])


    
    
    

@app.route('/api',methods=['GET'])
def api():
    return jsonify(
        data= Products['data']
        )
    
        