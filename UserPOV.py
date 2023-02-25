from flask import Flask
import sqlite3


app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/feedback", methods = ["GET","POST"])
def feedback():

    return """json string to be parsed"""

@app.route("/",methods = ["GET"])
def hello_world():
    conn = get_db_connection()
    drivers = conn.execute('SELECT * FROM drivers').fetchall()
    conn.close()
    display = []
    for row in drivers:
        display.append(f"<h1>{(row['driver_id'],row['driver_name'],row['points'])}<h1>")
    return "".join(display)
