
import sqlite3
from flask import Flask, jsonify

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/points', methods=["GET"])
def get_points():
    conn = get_db_connection()
    points = conn.execute('SELECT driver_id, points FROM drivers').fetchall()
    conn.close()
    result = [tuple(row) for row in points]
    return jsonify(result)

