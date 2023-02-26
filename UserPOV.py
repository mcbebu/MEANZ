from flask import Flask,request,jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/feedback", methods = ["GET"])
def feedback():
    ## render template for form
    # return "<h1> Feedback page <h1>"
    return {}

@app.route("/submitted_feedback", methods = ["POST"])
def submitted_feedbac():
    REWARD_POINTS = 10
    ## update points also
    # order_id = request.form.get('order_id')
    # driver_id = request.form.get('driver_id')
    # rating = request.form.get('rating')
    # feedback = request.form.get('feedback')
    # tips = request.form.get('tips',0)
    # within_time = request.form.get('within_time', 0)
    #====================================================
    order_id = request.args.get('orderid')
    # driver_id = request.args.get('driver_id')
    rating = request.args.get('rating')
    feedback = request.args.get('feedback',"")
    tips = request.args.get('tips',0)
    # within_time = request.args.get('within_time', 0)
   
    points = 0
    
    # driver_id , within_time get from database!

    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    driver_id = cur.execute("SELECT driver_id from orders WHERE order_id = ?",(order_id,)).fetchall()[0][0]
    start,end,deliver = cur.execute("SELECT timeslot_start, timeslot_end, attempted_time from orders where order_id = ? ",(order_id,)).fetchall()[0]
    within_time = 1 if start <= deliver <= end else 0
    if within_time:
        points += REWARD_POINTS
    insertion_query = '''INSERT INTO driverFeedback(order_id, driver_id, rating, feedback, tips, within_time) 
                         VALUES (?,?,?,?,?,?)'''
    row = (order_id,driver_id,rating,feedback,tips,within_time)
    cur.execute(insertion_query, row)

    if points:
        records = conn.execute(f'SELECT points from drivers WHERE {driver_id}= driver_id;').fetchall()
        print(records)
        points += records[0][0]
        conn.execute(f'UPDATE drivers set points = {points} where driver_id = {driver_id};')
    
    conn.commit()
    conn.close()
    return "<h1> You have successfully submitted your feedback <h1>"

@app.route("/",methods = ["GET"])
def hello_world():
    conn = get_db_connection()
    drivers = conn.execute('SELECT * FROM driverFeedback').fetchall()
    conn.close()
    display = []
    for row in drivers:
        within_time = "Yes" if row['within_time'] != 0 else "No"
        display.append(f"<h1>{(row['order_id'],row['rating'],row['feedback'],row['tips'], within_time)}<h1>")
    return "".join(display)


@app.route('/points', methods=["GET"])
def get_points():
    conn = get_db_connection()
    cur = conn.cursor()
    driver_id = request.args.get("driver_id")

    points = cur.execute(f'SELECT driver_id, points FROM drivers WHERE driver_id = ?',(driver_id,)).fetchall()
    conn.close()
    driver_id, points = points[0]
    print(f'points = {points}')
    print(jsonify(driver_id=driver_id, points=points))
    return jsonify(points=points,status="success")

@app.route('/feedback_stats', methods=["GET"])
def get_feedback_stats():
    conn = get_db_connection()
    cur = conn.cursor()
    driver_id = request.args.get("driver_id")
    avg_rating = cur.execute(f'SELECT avg(rating) FROM driverFeedback WHERE driver_id = ?', (driver_id,)).fetchall()
    average = avg_rating[0][0]
    
    feedback = cur.execute(f'SELECT feedback, rating FROM driverFeedback WHERE driver_id = ? AND rating > 2 ORDER BY rating DESC LIMIT 3', (driver_id,)).fetchall()
    conn.close()

    feedback1, rating1 = feedback[0]
    feedback2, rating2 = feedback[1]
    feedback3, rating3 = feedback[2]
    feedback_array = [(feedback1, rating1), (feedback2, rating2), (feedback3, rating3)]

    print(jsonify(feedback_array=feedback_array, average=average))
    return jsonify(feedback_array=feedback_array, average=average)


@app.route("/rewards", methods= ["GET"])
def reward_catalogue():
    conn = get_db_connection()
    cur = conn.cursor()
    avg_rating = cur.execute('SELECT item_name, points FROM rejected_orders').fetchall()
    lst = [(item_name,points) for item_name,points in avg_rating]
    return jsonify(catalogue=lst, status="success")