
import sqlite3
from flask import Flask, jsonify, request

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/points', methods=["GET"])
def get_points():
    conn = get_db_connection()
    cur = conn.cursor()
    driver_id = request.args.get("driver_id")
    points = cur.execute(f'SELECT driver_id, points FROM drivers WHERE driver_id = ?',driver_id).fetchall()
    conn.close()
    driver_id, points = points[0]
    print(jsonify(driver_id=driver_id, points=points))
    return jsonify(driver_id=driver_id, points=points)

