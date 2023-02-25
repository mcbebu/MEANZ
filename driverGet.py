
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

@app.route('/feedback_stats', methods=["GET"])
def get_feedback_stats():
    conn = get_db_connection()
    cur = conn.cursor()
    driver_id = request.args.get("driver_id")
    avg_rating = cur.execute(f'SELECT avg(rating) FROM driverFeedback WHERE driver_id = ?', driver_id).fetchall()
    average = avg_rating[0][0]
    
    feedback = cur.execute(f'SELECT feedback, rating FROM driverFeedback WHERE driver_id = ? AND rating > 2 ORDER BY rating DESC LIMIT 3', driver_id).fetchall()
    conn.close()

    feedback1, rating1 = feedback[0]
    feedback2, rating2 = feedback[1]
    feedback3, rating3 = feedback[2]
    feedback_array = [(feedback1, rating1), (feedback2, rating2), (feedback3, rating3)]

    print(jsonify(feedback_array=feedback_array, average=average))
    return jsonify(feedback_array=feedback_array, average=average)

